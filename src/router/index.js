import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/pages/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login,
    meta: { title: '登录' }
  },
  {
    path: '/views',
    name: 'views',
    component: () => import('@/pages/views'),
    children: [
      {
        path: '/views/home',
        name: 'home',
        component: () => import('@/views/Home.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/views/task-details',
        name: 'task-details',
        component: () => import('@/views/security-check/TaskDetails'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/views/task-management',
        name: 'task-management',
        component: () => import('@/views/security-check/TaskManagement')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
