import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.js'
import Results from './views/results.js'

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/results',
      name: 'results',
      component: Results
    },  
  ]
})

export default router;