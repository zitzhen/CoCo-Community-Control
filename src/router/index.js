import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import UserAgreement from '../views/UserAgreement.vue'
import PrivacyPolicy from '../views/PrivacyPolicy.vue'

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