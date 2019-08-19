import Vue from 'vue'
import App from './App';
import { VuePlugin } from 'vuera'
import router from './router/index'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import BootstrapVue from 'bootstrap-vue';


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(VuePlugin);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
