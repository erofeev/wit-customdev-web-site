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
        title: 'WONE IT | Разработка — Продукты и услуги для цифровой трансформации'
      }
    },
    {
      path: '/products/wonescale',
      name: 'wonescale',
      component: () => import('@/views/PlatformView.vue'),
      meta: {
        title: 'WoneScale — Платформа быстрой разработки | WONE IT'
      }
    },
    {
      path: '/products/wonendr',
      name: 'wonendr',
      component: () => import('@/views/WoneNdrView.vue'),
      meta: {
        title: 'WoneNDR — Сетевая безопасность (NDR) для бизнеса | WONE IT'
      }
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/ServicesView.vue'),
      meta: {
        title: 'Услуги разработки | WONE IT'
      }
    },
    {
      path: '/technologies',
      name: 'technologies',
      component: () => import('@/views/TechnologiesView.vue'),
      meta: {
        title: 'Технологии | WONE IT'
      }
    },
    {
      path: '/cooperation',
      name: 'cooperation',
      component: () => import('@/views/CooperationView.vue'),
      meta: {
        title: 'Модели сотрудничества | WONE IT'
      }
    },
    {
      path: '/cases',
      name: 'cases',
      component: () => import('@/views/CasesView.vue'),
      meta: {
        title: 'Кейсы и проекты | WONE IT'
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
      meta: {
        title: 'Контакты | WONE IT'
      }
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: () => import('@/views/KnowledgeView.vue'),
      meta: {
        title: 'База знаний — Технологии и best practices | WONE IT'
      }
    },
    {
      path: '/knowledge/:slug',
      name: 'knowledge-article',
      component: () => import('@/views/KnowledgeArticleView.vue'),
      meta: {
        title: 'База знаний | WONE IT'
      }
    },
    {
      path: '/products/data-showcase',
      name: 'data-showcase',
      component: () => import('@/views/DataShowcaseView.vue'),
      meta: {
        title: 'Data Showcase — Цифровая витрина данных | WONE IT'
      }
    },
    // Redirects for old routes
    {
      path: '/platform',
      redirect: '/products/wonescale'
    }
  ],
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Update document title
router.beforeEach((to, _from, next) => {
  document.title = to.meta.title as string || 'WONE IT | Разработка'
  next()
})

export default router
