import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/user/:id',
    component: () => import('@/views/user/index.vue')
  },
  {
    path: '/user',
    component: () => import('@/views/error/No-parameters.vue')
  },
  {
    path: '/agreement',
    component: () => import('@/views/agreement/index.vue')
  },
  {
    path: '/agreement/useragreement',
    component: () => import('@/views/agreement/useragreement/index.vue')
  },
  {
    path: '/agreement/privacypolicy',
    component: () => import('@/views/agreement/privacypolicy/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router