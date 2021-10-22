import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/login'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('./views/home')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('./views/login')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('./views/register')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

