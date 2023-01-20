import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    name: 'register',
    path: '/register',
    component: () => import('../views/Register.vue'),
  }
]

const history = createWebHistory()

export const router = createRouter({
  routes,
  history,
})