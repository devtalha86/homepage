import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";
import PortfolioDetail from "../views/PortfolioDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/module-inner/:module_id",
    name: "PortfolioDetail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: PortfolioDetail
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
