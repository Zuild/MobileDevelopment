import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import Footer from '../views/Footer.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/signin',
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('@/views/signin/index.vue'),
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import('@/views/Cards/index.vue'),
  },
  {
    path: '/modal',
    name: 'modal',
    component: () => import('@/views/Modal/index.vue'),
  },
  {
    path: '/reorder',
    name: 'reorder',
    component: () => import('@/views/reorder/index.vue'),
  },
  {
    path: '/float',
    name: 'float',
    component: () => import('@/views/FloatingButton/index.vue'),
  },
  {
    path: '/swiper',
    name: 'swiper',
    component: () => import('@/views/swiper/index.vue'),
  },
  {
    path: '/swiperloop',
    name: 'swiperloop',
    component: () => import('@/views/swiperloop/index.vue'),
  },
  {
    path: '/localstorage',
    name: 'localstorage',
    component: () => import('@/views/localstorage/index.vue'),
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('@/views/map/index.vue'),
  },
  {
    path: '/geolocation',
    name: 'geolocation',
    component: () => import('@/views/geolocation/index.vue'),
  },
  {
    path: '/camera',
    name: 'camera',
    component: () => import('@/views/camera/index.vue'),
  },
  {
    path: '/tabs/',
    component: Footer,
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: 'profile',
        name: 'profile',
        component: () => import('@/views/profile/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
