import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import ServicesPage from '@/views/ServicesPage.vue'
import AboutPage from '@/views/AboutPage.vue'
import AuthPage from '@/views/AuthPage.vue'
import AdminPanel from '@/views/AdminPanel.vue'
import Auth from '@/components/AuthPage/Auth.vue'
import Registration from '@/components/AuthPage/Registration.vue'

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
    path: '/about', 
    name: 'about', 
    component: AboutPage 
  },
  { 
    path: '/auth', 
    name: 'auth', 
    component: AuthPage,
    children: [
      {
        path: '', 
        name: 'auth', 
        component: Auth 
      }, 
      { 
        path: 'registration', 
        name: 'registration', 
        component: Registration, 
      },
    ]
  },
  { 
    path: '/adminpanel', 
    name: 'adminpanel', 
    component: AdminPanel 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
