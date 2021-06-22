import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '@/views/home/Home'
const Details = ()=>import("@/views/details/Details")
const aaa = ()=>import('@/views/logins/Logins')
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta:{
      title:"首页"
    }
  },
  {
    path: '/category',
    name: 'Category',
    component: () => import('@/views/category/Category'),
    meta:{
      title:"分类"
    }
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/cart/Cart'),
    meta:{
      requireAuth:true,
      title:"分类"
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('@/views/profile/Profile'),
    meta:{
      title:"我的"
    }
  },
  {
    path: '/details/:iid',
    name: 'Details',
    component: Details,
    meta:{
      title:"详情"
    }
  },
  {
    path:'/logins',
    name:"Logins",
    component: aaa,
    meta:{
      title:"登录"
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 前置守卫guard
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  // next()
  if(to.meta.requireAuth){
    if(sessionStorage.getItem('token')==1){
      next()
    }else{
      next({path:'/logins'})
    }
  }else{
    next()
  }
  
})
// 后置钩子hook
router.afterEach((to,from)=>{
  // console.log('end');
})

export default router
