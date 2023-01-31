import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import ServicesPage from '@/views/ServicesPage.vue'
import PricesPage from '@/views/PricesPage.vue'
import AboutPage from '@/views/AboutPage.vue'

const routes = [
  { 
    path: '/main', 
    name: 'main', 
    component: MainPage, 
    alias: '/' 
  },
  { 
    path: '/services', 
    name: 'services', 
    component: ServicesPage 
  },
  { 
    path: '/prices', 
    name: 'prices', 
    component: PricesPage 
  },
  { 
    path: '/about', 
    name: 'about', 
    component: AboutPage 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
