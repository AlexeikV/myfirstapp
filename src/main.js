// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueResource from 'vue-resource'
import VueRouter from 'vue-router'

import Test from './components/Test';
import User from './components/User';

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.config.productionTip = false



const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      component: User
    },
    {
      path: '/test',
      component: Test
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
