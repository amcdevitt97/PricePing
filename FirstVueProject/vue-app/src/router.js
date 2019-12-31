import Vue from 'vue'
import VueRouter from 'vue-router'
import App from "./App.vue"
import Calling from './Calling.vue'
//import Results from './views/results.js'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: App
    },
    {
      path: '/calling',
      name: 'Calling',
      component: Calling
    }, 
  ]
});

export default router;