import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vueSmoothScroll from "vue2-smooth-scroll";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;
Vue.use(vueSmoothScroll);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
