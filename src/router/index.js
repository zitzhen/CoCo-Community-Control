import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/index.vue'
import UserAgreement from '../views/agreement/useragreement/index.vue'
import PrivacyPolicy from '../views/agreement/privacypolicy/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/agreement/useragreement',
    name: 'UserAgreement',
    component: UserAgreement
  },
  {
    path: '/agreement/privacypolicy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router