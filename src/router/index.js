import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue"
import Sponsor from "../views/Sponsor.vue";
import About from "../views/About.vue";
import Profile from "../views/Profile.vue";
import store from "../store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/sponsor",
    name: "sponsor",
    component: Sponsor,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "login",
    component: Login
    // component: () =>
    //   import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/profile/:userId",
    name: "profile",
    component: Profile,
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        offset: { x: 0, y: 120 }
      }
    }

    if (savedPosition) return savedPosition;

    return { x: 0, y: 0 }
  }
});

router.beforeEach((to, from, next) => {

  let auth = store.getters.isLogged;
  let idLogin = store.getters.loggedUser.id;
  console.log(idLogin, "IDLOGIIIIIIIIIN")

  if (to.matched.some(record => record.meta.requiresAuth) && !auth) {
    alert("Não se encontra logado");
    next("/");
  } else if (to.matched.some(record => record.meta.requiresAuth) && auth) {
    if (idLogin != 0) {
      if (to.params.userId== idLogin) {
        next();
      } else {
        alert("Não pode aceder a essa página!");
        router.go(-1);
      }
    }
  } else {
    next();
  }
 
});

export default router;
