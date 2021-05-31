import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/category/Category')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/cart/Cart')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/profile/Profile')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
