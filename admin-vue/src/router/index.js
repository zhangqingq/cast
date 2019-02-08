import Vue from 'vue'
import Router from 'vue-router'
// 引入 登录 组件
import Login from '@/components/login/login.vue'
import Home from '@/components/pages/home/home.vue'
// import Users from '../components/pages/user/users.vue'
Vue.use(Router)

// 单独引用 message
import {
  Message
} from 'element-ui'

Vue.use(Router)

var router = new Router({
  routes: [
    // 设置默认首页，重定向到 home
    {
      path: '/',
      redirect: '/login'
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'home',
      path: '/home',
      component: Home
      // ,
      // children: [{
      //   path: '/users', // /user
      //   component: Users
      // }]
    }
  ]
})
// 添加一个前置导航守卫
//  这句代码会在路由发生改变之前执行，如果不调用 next 方法，后续的代码不会执行
router.beforeEach((to, from, next) => {
  // 在判断时，需要将 login 路由排除掉
  if (to.path !== '/login') {
    // 判断用户是否登录:验证 token
    var token = window.localStorage.getItem('token')
    if (!token) {
      // 提示用户没有登录
      Message.error('您还没有登录，请先登录~~~')
      router.push('/login')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
