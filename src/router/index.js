import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/index.vue'
import UserAgreement from '../views/agreement/useragreement/index.vue'
import PrivacyPolicy from '../views/agreement/privacypolicy/index.vue'
import Agreement from '../views/agreement/index.vue'
import Tipping from '../views/tipping/index.vue' 
import Errorpages from '../views/user/No-parameters.vue'
import User from '../views/user/index.vue'
import Control from '../views/control/index.vue'

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
  },
  {
    path:'/agreement',
    name:'agreement',
    component:Agreement
  },
  {
    path: '/tipping',
    name: 'tipping',
    component :Tipping
  },
  {
    path :'/user/:id',
    name:'user',
    component:User
  },
  {
    path: '/user',
    name: 'Path-error',
    component:Errorpages
  },
  {
    path :'/control/:id',
    name:'control-Error',
    component:Control
  },
  {
    path :'/control',
    name:'control-Error',
    component:Errorpages
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router