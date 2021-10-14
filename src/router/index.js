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
    path: "/pokemon",
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
];

const router = new VueRouter({
  routes,
});

export default router;
