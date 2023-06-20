import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import ServicesPage from '@/views/ServicesPage.vue'
import AboutPage from '@/views/AboutPage.vue'
import AuthPage from '@/views/AuthPage.vue'
import AdminPanel from '@/views/AdminPanel.vue'
import Auth from '@/components/AuthPage/Auth.vue'
import Registration from '@/components/AuthPage/Registration.vue'
import StaticInfo from '@/components/ServicePage/ServiceInfo/StaticInfo.vue'
import DynamicServiceInfo from '@/components/ServicePage/ServiceInfo/DynamicServiceInfo.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'
import store from '@/store'

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
    component: ServicesPage,
    children: [
      {
        path: '', 
        name: 'static info', 
        component: StaticInfo 
      }, 
      { 
        path: ':id', 
        name: 'dynamic_service', 
        component: DynamicServiceInfo, 
      },
    ]
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
    meta: {
      forAdmin: true,
    },
    scrollBehavior() {
      window.scrollTo(0,0);
    },
    component: AdminPanel 
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'error404', 
    component: NotFoundPage, 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach(async (to, from, next) => {
  if (to?.meta?.forAdmin) {
    if (store.getters.is_admin) {
      console.log(store.getters);
      next();
      return;
    } else {
      next('/404');
      return;
    }
  }
  next()
})

export default router
