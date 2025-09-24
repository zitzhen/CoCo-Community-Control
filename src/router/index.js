import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component:() => import('@/views/index.vue') },
  { path: '/agreement/useragreement', name: 'UserAgreement', component: () => import('@/views/agreement/useragreement/index.vue') },
  { path: '/agreement/privacypolicy', name: 'PrivacyPolicy', component: () => import('@/views/agreement/privacypolicy/index.vue') },
  { path: '/agreement', name: 'Agreement', component: () => import('@/views/agreement/index.vue') },
  { path: '/tipping', name: 'Tipping', component: () => import('@/views/tipping/index.vue') },
  { path: '/user/:id', name: 'User', component: () => import('@/views/user/index.vue') },
  { path: '/user', name: 'UserError', component: () => import('@/views/user/No-parameters.vue') },
  { path: '/control/:id', name: 'Control', component: () => import('@/views/control/index.vue') },
  { path: '/control', name: 'ControlError', component: () => import('@/views/user/No-parameters.vue') },
  { path: '/essay/all/:id',name:'DevEssay',component: () => import('@/views/essay/all/dev.vue')},
  { path: '/essay/all', name:'ErrorEssay',component: () => import('@/views/user/No-parameters.vue')},
  { path: '/essay' ,name: 'Essay' ,component: () => import('@/views/essay/index.vue')},
  { path: '/safe', name:'Safe',component:() => import('@/views/safe/index.vue')},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
