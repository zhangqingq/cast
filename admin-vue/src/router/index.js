import Vue from 'vue'
import Router from 'vue-router'
// 引入 登录 组件
import Login from '@/components/login/login.vue'
import Home from '@/components/pages/home/home.vue'
import Users from '../components/pages/users/users.vue'
import Rights from '../components/pages/rights/rights.vue'
import Roles from '../components/pages/roles/roles.vue'
import {
  Message
} from 'element-ui'

Vue.use(Router)

const router = new Router({
  routes: [{
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
      children: [{
          path: '/users',
          component: Users
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

// 前置路由守卫
router.beforeEach((to, from, next) => {
  // to    即将要进入的目标 路由对象
  // from   当前导航正要离开的路由
  // next    一定要调用该方法来 resolve 这个钩子
  // console.log(to);
  // console.log(from);
  // 当 要去的 目标 不是 login 的时候 判断是否存在 token
  if (to.path != '/login') {
    // 获取 token
    var token = localStorage.getItem('token');
    if (!token) {
      // 如果不存在 token 则返回首页
      router.push('/');
      Message.error('您还没有登录，请先登录');
      return;
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
