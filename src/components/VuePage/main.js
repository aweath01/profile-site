import Vue from "vue";
import App from "./App";

import "@babel/polyfill";
import "./plugins/bootstrap-vue";
import BootstrapVue from "bootstrap-vue";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  el: "#vue-page",
  components: { App },
  template: "<App/>"
});
