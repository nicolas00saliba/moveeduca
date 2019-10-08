import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import Projects from './views/Projects.vue'
import Institutional from './views/Institutional.vue'
import Partners from './views/Partners.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/partners',
      name: 'partners',
      component: Partners
    },
    {
      path: '/Institutional',
      name: 'institutional',
      component: Institutional
    }
  ]
})