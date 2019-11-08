import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import VueScrollactive from "vue-scrollactive";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "vueperslides/dist/vueperslides.css";

Vue.config.productionTip = false;
Vue.use(VueScrollactive);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
