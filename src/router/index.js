import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/agreement',
    component: () => import('@/views/agreement/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
