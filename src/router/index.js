import Vue from 'vue'
import Router from 'vue-router'
import VuePage from '../components/VuePage/VuePage'
import Profile from '../components/Profile'
import ReactPage from '../components/ReactPage/ReactPage'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/home',
      name: 'Home',
      component: Profile
    },
    {
      path: '/vue',
      name: 'VuePage',
      component: VuePage
    },
    {
      path: '/react',
      name: 'ReactPage',
      component: ReactPage
   }
  ]
});