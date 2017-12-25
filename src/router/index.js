import Vue from 'vue'
import Router from 'vue-router'
import Quotes from '@/components/Quotes'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Quotes',
      component: Quotes
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
