// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'

import myBread from './layout/bread/mybread.vue'

import myaxios from './assets/js/myaxios.js'

// 将面包屑导航注册为 全局中间件
Vue.component(myBread.name, myBread)


// 引入公共样式
import './assets/css/style.css'

Vue.use(ElementUI)
Vue.use(myaxios)
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
