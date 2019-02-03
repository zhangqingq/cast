import Vue from 'vue'
import Router from 'vue-router'
// 引入 登录 组件
import Login from '@/components/login/login.vue'
import Home from '@/components/pages/home/home.vue'
import Users from '../components/pages/users/users.vue'
import Rights from '../components/pages/rights/rights.vue'
import Roles from '../components/pages/roles/roles.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path:'/users',
          component:Users
        },
        {
          path: '/roles',
          component: Roles
        },
        {
          path: '/rights',
          component: Rights
        }
      ]
    },
    
  ]
})
