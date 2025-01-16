import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ApiTestView from "@/views/ApiTestView.vue";
import Dashboard from "@/views/DashBoard.vue";
import VeeValidate from "@/views/VeeValidate.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/apiTest",
      name: "apiTest",
      component: ApiTestView,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path: "/vee",
      name: "vee",
      component: VeeValidate,
    },
  ],
});

export default router;
