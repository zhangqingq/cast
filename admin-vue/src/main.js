// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
// // 引入 axios
// import axios from 'axios'
// axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
// Vue.prototype.$http = axios
import Bread from './layout/bread/mybread.vue'
import myaxios from './assets/js/myaxios.js'
Vue.use(myaxios)

// 引入公共样式
import './assets/css/style.css'
Vue.component(Bread.name, Bread)
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
