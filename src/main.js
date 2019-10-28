import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import vueSmoothScroll from "vue2-smooth-scroll";
import VueScrollactive from "vue-scrollactive";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// Since v. 1.6.0, you need to include Vueper Slides CSS file for default styles.
import "vueperslides/dist/vueperslides.css";

Vue.config.productionTip = false;
// Vue.use(vueSmoothScroll);
Vue.use(VueScrollactive);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
