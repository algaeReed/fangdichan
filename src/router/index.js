import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import New from '../views/New.vue'
import Old from '../views/Old.vue'
import Rental from '../views/Rental.vue'
import Our from '../views/Our.vue'
import Reg from '../views/Reg.vue'
import Login from '../views/Login.vue'
import FAQ from '../views/Faq.vue'

import ServiceInfo from '../views/ServiceInfo.vue'
import HousePublish from '../views/HousePublish.vue'
import Tenement from '../views/Tenement.vue'

import fjphb from '../views/fjphb.vue'
import bykp from '../views/bykp.vue'
import lpdg from '../views/lpdg.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home 
  },
  {
    path: '/new',
    component: New
  },
  {
    path: '/old',
    component: Old
  },
  {
    path: '/rental',
    component: Rental
  },
  {
    path: '/our ',
    component: Our
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/reg',
    component: Reg
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/faq',
    component: FAQ
  },
  {
    path: '/ServiceInfo',
    component: ServiceInfo
  },
  {
    path: '/HousePublish',
    component: HousePublish
  },
  {
    path: '/bykp',
    component: bykp
  },
  {
    path: '/lpdg',
    component: lpdg
  },
  {
    path: '/fjphb',
    component: fjphb
  },
  {
    path: '/tenement',
    component: Tenement
  },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
