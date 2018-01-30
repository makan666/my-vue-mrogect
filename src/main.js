// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
// import Users from './components/Users'
// import Home from './components/Home'

Vue.config.productionTip = false
Vue.use(VueResource)
// 全局注册组件
// Vue.component('users', Users)
// Vue.component('home', Home)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
