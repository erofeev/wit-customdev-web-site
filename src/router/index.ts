import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Главная | Разработка веб-систем'
      }
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/ServicesView.vue'),
      meta: {
        title: 'Услуги | Разработка веб-систем'
      }
    },
    {
      path: '/technologies',
      name: 'technologies',
      component: () => import('@/views/TechnologiesView.vue'),
      meta: {
        title: 'Технологии | Разработка веб-систем'
      }
    },
    {
      path: '/platform',
      name: 'platform',
      component: () => import('@/views/PlatformView.vue'),
      meta: {
        title: 'Платформа | Разработка веб-систем'
      }
    },
    {
      path: '/cooperation',
      name: 'cooperation',
      component: () => import('@/views/CooperationView.vue'),
      meta: {
        title: 'Модели сотрудничества | Разработка веб-систем'
      }
    },
    {
      path: '/cases',
      name: 'cases',
      component: () => import('@/views/CasesView.vue'),
      meta: {
        title: 'Кейсы | Разработка веб-систем'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
      meta: {
        title: 'Контакты | Разработка веб-систем'
      }
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Update document title
router.beforeEach((to, from, next) => {
  document.title = to.meta.title as string || 'Разработка веб-систем'
  next()
})

export default router
