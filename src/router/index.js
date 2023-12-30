import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/About.vue"),
  },
  {
    path: "/quiz",
    name: "quiz",
    component: () => import("@/views/Quiz.vue"),
  },
  {
    path: "/counter",
    name: "counter",
    component: () => import("@/views/Counter.vue"),
  },
  {
    path: "/team",
    name: "team",
    component: () => import("@/views/Team.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
