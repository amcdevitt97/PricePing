// main.js

import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import App from './App.vue';
import Results from './components/Results.vue';

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'Home', component: App },
    { path: '/results/:cityName',  name: 'Results', component: Results }
  ]
});

new Vue({
  router,
  template: `
    <div>
      
      <router-view class="view"></router-view>
    </div>
  `
}).$mount('#app');