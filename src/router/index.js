import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/index.vue'
import UserAgreement from '@/views/agreement/useragreement/index.vue'
import PrivacyPolicy from '@/views/agreement/privacypolicy/index.vue'
import Agreement from '@/views/agreement/index.vue'
import Tipping from '@/views/tipping/index.vue' 
import Errorpages from '@/views/user/No-parameters.vue'
import User from '@/views/user/index.vue'
import Control from '@/views/control/index.vue'
import Essay from '@/views/essay/index.vue'
import Dev from '@/views/essay/all/dev.vue'
import Safe from '@/views/safe/index.vue'

const routes = [
  { path: '/', name: 'Home', component:() => import(Home) },
  { path: '/agreement/useragreement', name: 'UserAgreement', component: () => import(UserAgreement) },
  { path: '/agreement/privacypolicy', name: 'PrivacyPolicy', component: () => import(PrivacyPolicy) },
  { path: '/agreement', name: 'Agreement', component: () => import(Agreement) },
  { path: '/tipping', name: 'Tipping', component: () => import(Tipping) },
  { path: '/user/:id', name: 'User', component: () => import(User) },
  { path: '/user', name: 'UserError', component: () => import(Errorpages) },
  { path: '/control/:id', name: 'Control', component: () => import(Control) },
  { path: '/control', name: 'ControlError', component: () => import(Errorpages) },
  { path: '/essay/all/:id',name:'DevEssay',component: () => import(Dev)},
  { path: '/essay/all', name:'ErrorEssay',component: () => import(Errorpages)},
  { path: '/essay' ,name: 'Essay' ,component: () => import(Essay)},
  { path: '/safe', name:'Safe',component:() => import(Safe)},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
