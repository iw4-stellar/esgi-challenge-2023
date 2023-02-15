import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/projects',
  },
  {
    name: 'register',
    path: '/register',
    component: () => import('../views/Register.vue'),
  },
  {
    name: 'login',
    path: '/login',
    component: () => import('../views/Login.vue'),
  },
  {
    name: 'projects',
    path: '/projects',
    component: () => import('../views/Projects.vue'),
  },
  {
    name: 'ProjectDetails',
    path: '/projects/:id',
    component: () => import('../views/ProjectDetails.vue'),
  },
  {
    name: 'CreateProject',
    path: '/createProject',
    component: () => import('../views/CreateProject.vue'),
  },
]

const history = createWebHistory()

export const router = createRouter({
  routes,
  history,
})