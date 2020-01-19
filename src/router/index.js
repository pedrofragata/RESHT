import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue"
import Sponsor from "../views/Sponsor.vue";
import About from "../views/About.vue";
import Profile from "../views/Profile.vue";
import Backoffice from "../views/Backoffice.vue";
//import store from "../store/index.js";

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
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/profile/:userID",
    name: "profile",
    component: Profile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/backoffice",
    name: "backoffice",
    component: Backoffice,
    meta: {
      admin: true
    },
    // beforeEnter (to, from, next) {
    //   console.log(to)
    //   console.log(from)
    //   console.log(next)
    //   console.log(store.getters["users/loginStatus"].loggedUser)
    // },
  }
];

const router = new VueRouter({
  mode: "history",
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
  const loginStatus = JSON.parse(sessionStorage.getItem("login-status"));
  let accessLevel

  if (loginStatus!=null){
    accessLevel = loginStatus.loggedUser.accessLevel
  }
  

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!loginStatus.isLogged) {
      alert("Não se encontra logado");
      next("/login");
    }
    else {
      next();
    }
  }
  else {
    next();
  }
  
  if (to.meta.admin) {
    if (accessLevel == 2 || accessLevel == 1 ) {
      next();
    } else {
      alert("Não é administrador");
      router.go(-1);
    }
  }
});

export default router;
