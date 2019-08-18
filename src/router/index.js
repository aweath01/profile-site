import Vue from 'vue'
import Router from 'vue-router'
import VuePage from '../components/VuePage/VuePage'
import Profile from '../components/Profile'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/vue',
      name: 'VuePage',
      component: VuePage
    }
  ]
});