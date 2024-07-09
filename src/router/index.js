import { createRouter, createWebHashHistory } from 'vue-router'
import AuthRouter from '../modules/auth/router'
import MainRouter from '@/modules/main/router'
import isAuthenticatedGuard from './auth-guard'

const routes = [
  {
    path: "",
    beforeEnter: [isAuthenticatedGuard],
    ...MainRouter,
  },
  {
    path: '/auth',
    ...AuthRouter
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
