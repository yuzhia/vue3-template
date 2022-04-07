import { createRouter, createWebHistory } from 'vue-router'

// 路由信息
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: { title: '首页' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
    meta: { title: '关于' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    hidden: true
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
    hidden: true
  },
  { path: '/:pathMatch(.*)*', redirect: '/404', hidden: true }
]

// 路由器
const router = createRouter({
  history: createWebHistory(), // HTML5模式
  routes
})

export default router

export function resetRouter() {
  const newRouter = createRouter({
    history,
    routes
  })
  router.matcher = newRouter.matcher // reset router
}
