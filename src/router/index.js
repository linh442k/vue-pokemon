import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/pokemon"
  },
  {
    path: "/home",
    name: "default",
    component: () =>
      import("../components/pokemon-form"),
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/pokemon/:id",
    name: "Pokemon",
    component: () =>
      import("../components/pokemon-stat-page"),
  },
  {
    path: "/pokemon",
    name: "Missing Id",
    component: () =>
      import("../views/Home"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
