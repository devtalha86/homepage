import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import VueScrollactive from "vue-scrollactive";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "vueperslides/dist/vueperslides.css";

import $ from 'jquery'

Vue.config.productionTip = false;
Vue.use(VueScrollactive);

Vue.directive('tooltip', function(el, binding){
  $(el).tooltip({
    title: binding.value,
    placement: binding.arg,
    trigger: 'focus'
  })
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
