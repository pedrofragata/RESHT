import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue"
import Sponsor from "../views/Sponsor.vue";
import About from "../views/About.vue";

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
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
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

export default router;
