<template>
  <div class="knowledge-page">
    <!-- Hero -->
    <section class="hero hero-small">
      <div class="container">
        <div class="kb-badge">База знаний WONE IT</div>
        <h1 class="hero-title">Технологии, подходы и <span class="text-gradient">лучшие практики</span></h1>
        <p class="hero-subtitle">
          Наша команда делится экспертизой: от архитектурных решений до конкретных технологий.
          Понятно, с примерами, без воды.
        </p>
      </div>
    </section>

    <!-- Search & Filter -->
    <section class="section">
      <div class="container">
        <div class="kb-controls">
          <div class="kb-search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" class="search-icon">
              <circle cx="11" cy="11" r="8" stroke="currentColor" stroke-width="2"/>
              <path d="M21 21l-4.35-4.35" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Поиск по статьям..."
              class="search-input"
            />
          </div>
          <div class="kb-tags">
            <button
              v-for="cat in categories"
              :key="cat.id"
              class="tag-btn"
              :class="{ active: activeCategory === cat.id }"
              @click="activeCategory = activeCategory === cat.id ? 'all' : cat.id"
            >
              {{ cat.label }}
            </button>
          </div>
        </div>

        <!-- Articles grid -->
        <div class="kb-grid">
          <RouterLink
            v-for="article in filteredArticles"
            :key="article.slug"
            :to="`/knowledge/${article.slug}`"
            class="kb-card"
          >
            <div class="kb-card-top">
              <span class="kb-card-cat" :style="{ color: getCatColor(article.category) }">
                {{ getCatLabel(article.category) }}
              </span>
              <span class="kb-card-time">{{ article.readTime }} мин</span>
            </div>
            <h3 class="kb-card-title">{{ article.title }}</h3>
            <p class="kb-card-excerpt">{{ article.excerpt }}</p>
            <div class="kb-card-footer">
              <div class="kb-card-author">
                <div class="author-avatar" :style="{ background: article.authorColor }">
                  {{ article.authorInitials }}
                </div>
                <span>{{ article.author }}</span>
              </div>
              <span class="kb-card-arrow">→</span>
            </div>
          </RouterLink>
        </div>

        <div v-if="filteredArticles.length === 0" class="kb-empty">
          <p>Статьи по запросу не найдены</p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section-dark">
      <div class="container">
        <div class="kb-cta card-glass">
          <h2>Нужна экспертиза по вашему проекту?</h2>
          <p>Наши инженеры помогут выбрать технологии и спроектировать архитектуру</p>
          <RouterLink to="/contact" class="btn btn-primary">Обсудить проект</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'

const searchQuery = ref('')
const activeCategory = ref('all')

const categories = [
  { id: 'all', label: 'Все', color: '#94a3b8' },
  { id: 'architecture', label: 'Архитектура', color: '#ef3f29' },
  { id: 'security', label: 'Безопасность', color: '#802fb9' },
  { id: 'frontend', label: 'Frontend', color: '#22c55e' },
  { id: 'backend', label: 'Backend', color: '#f59e0b' },
  { id: 'devops', label: 'DevOps', color: '#3b82f6' },
  { id: 'databases', label: 'Базы данных', color: '#8b5cf6' },
  { id: 'methodology', label: 'Методологии', color: '#ec4899' }
]

interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: number
  author: string
  authorInitials: string
  authorColor: string
}

const articles: Article[] = [
  {
    slug: 'microservices-architecture',
    title: 'Микросервисная архитектура: когда она действительно нужна',
    excerpt: 'Разбираем, в каких случаях микросервисы оправданы, а когда монолит — лучший выбор. Реальные кейсы из нашей практики на 500+ проектах.',
    category: 'architecture',
    readTime: 12,
    author: 'Команда архитектуры',
    authorInitials: 'КА',
    authorColor: '#ef3f29'
  },
  {
    slug: 'ndr-network-detection-response',
    title: 'Что такое NDR и зачем он нужен вашей компании',
    excerpt: 'Network Detection & Response простыми словами. Как NDR-системы обнаруживают угрозы, которые пропускают файрволы и антивирусы.',
    category: 'security',
    readTime: 8,
    author: 'Отдел безопасности',
    authorInitials: 'ОБ',
    authorColor: '#802fb9'
  },
  {
    slug: 'vue-vs-react-vs-angular',
    title: 'Vue, React или Angular: как мы выбираем фреймворк',
    excerpt: 'Честное сравнение трёх фреймворков. Критерии выбора, подводные камни и когда какой подойдёт лучше для enterprise-проектов.',
    category: 'frontend',
    readTime: 10,
    author: 'Frontend-команда',
    authorInitials: 'FE',
    authorColor: '#22c55e'
  },
  {
    slug: 'graphdb-dgraph-guide',
    title: 'Графовые базы данных: Dgraph в production',
    excerpt: 'Когда реляционные БД не справляются: как графовая модель ускоряет запросы по сложным связям в 10-100 раз. Наш опыт с Dgraph.',
    category: 'databases',
    readTime: 15,
    author: 'Команда данных',
    authorInitials: 'КД',
    authorColor: '#8b5cf6'
  },
  {
    slug: 'kubernetes-production',
    title: 'Kubernetes в production: уроки из 50+ деплоев',
    excerpt: 'Практический гайд по K8s: от первого кластера до автомасштабирования. Типичные ошибки и как их избежать.',
    category: 'devops',
    readTime: 14,
    author: 'DevOps-инженеры',
    authorInitials: 'DO',
    authorColor: '#3b82f6'
  },
  {
    slug: 'api-gateway-patterns',
    title: 'API Gateway: паттерны и антипаттерны',
    excerpt: 'Traefik, Kong или кастомный gateway? Разбираем паттерны маршрутизации, аутентификации и rate limiting на реальных примерах.',
    category: 'backend',
    readTime: 11,
    author: 'Backend-команда',
    authorInitials: 'BE',
    authorColor: '#f59e0b'
  },
  {
    slug: 'network-security-smb',
    title: 'Сетевая безопасность для среднего бизнеса: с чего начать',
    excerpt: 'Пошаговый план защиты корпоративной сети: от аудита до внедрения NDR. Без бюджета на SOC и команду безопасников.',
    category: 'security',
    readTime: 9,
    author: 'Отдел безопасности',
    authorInitials: 'ОБ',
    authorColor: '#802fb9'
  },
  {
    slug: 'nodejs-python-java-go',
    title: 'Node.js vs Python vs Java vs Go: когда что использовать',
    excerpt: 'Полиглот-подход к микросервисам: выбираем язык под задачу. Бенчмарки, экосистема, стоимость разработки и поддержки.',
    category: 'backend',
    readTime: 13,
    author: 'Backend-команда',
    authorInitials: 'BE',
    authorColor: '#f59e0b'
  },
  {
    slug: 'postgresql-optimization',
    title: 'PostgreSQL: оптимизация для высоких нагрузок',
    excerpt: 'Индексы, партиционирование, пулинг соединений — практические приёмы из проектов с нагрузкой 10K+ RPS.',
    category: 'databases',
    readTime: 16,
    author: 'Команда данных',
    authorInitials: 'КД',
    authorColor: '#8b5cf6'
  },
  {
    slug: 'cicd-best-practices',
    title: 'CI/CD pipeline: от push до production за 10 минут',
    excerpt: 'Как мы построили CI/CD на GitLab CI + Docker + K8s. Автотесты, canary-деплой, откаты — всё автоматически.',
    category: 'devops',
    readTime: 11,
    author: 'DevOps-инженеры',
    authorInitials: 'DO',
    authorColor: '#3b82f6'
  },
  {
    slug: 'bpm-business-automation',
    title: 'BPM-движок: автоматизация бизнес-процессов',
    excerpt: 'Как встроенный BPM в WoneScale автоматизирует рутину: от заведения заявки до уведомления клиента. Camunda под капотом.',
    category: 'architecture',
    readTime: 10,
    author: 'Команда архитектуры',
    authorInitials: 'КА',
    authorColor: '#ef3f29'
  },
  {
    slug: 'typescript-enterprise',
    title: 'TypeScript для enterprise-проектов',
    excerpt: 'Strict mode, дженерики, паттерны — как TypeScript спасает от 90% runtime-ошибок. Примеры из наших SPA-приложений.',
    category: 'frontend',
    readTime: 9,
    author: 'Frontend-команда',
    authorInitials: 'FE',
    authorColor: '#22c55e'
  },
  {
    slug: 'kafka-event-streaming',
    title: 'Event-driven архитектура: паттерны асинхронного взаимодействия',
    excerpt: 'Паттерны Event Sourcing и CQRS с брокером сообщений. Как обрабатывать миллионы событий в секунду и не потерять ни одного.',
    category: 'architecture',
    readTime: 14,
    author: 'Команда архитектуры',
    authorInitials: 'КА',
    authorColor: '#ef3f29'
  },
  {
    slug: 'redis-caching-strategies',
    title: 'Redis: стратегии кэширования для веб-приложений',
    excerpt: 'Cache-aside, Write-through, Write-behind — какую стратегию выбрать. 4 уровня кэширования в нашей платформе WoneScale.',
    category: 'databases',
    readTime: 10,
    author: 'Команда данных',
    authorInitials: 'КД',
    authorColor: '#8b5cf6'
  },
  {
    slug: 'nats-messaging',
    title: 'NATS: высокоскоростной обмен сообщениями',
    excerpt: 'Почему мы выбрали NATS для межсервисного взаимодействия. Pub/Sub, Request/Reply и JetStream в микросервисной архитектуре.',
    category: 'architecture',
    readTime: 8,
    author: 'Команда архитектуры',
    authorInitials: 'КА',
    authorColor: '#ef3f29'
  },
  {
    slug: 'docker-containerization',
    title: 'Docker: контейнеризация от основ до production',
    excerpt: 'Multi-stage builds, security scanning, health checks — best practices для контейнерных приложений.',
    category: 'devops',
    readTime: 12,
    author: 'DevOps-инженеры',
    authorInitials: 'DO',
    authorColor: '#3b82f6'
  },
  {
    slug: 'graphql-rest-api-design',
    title: 'GraphQL vs REST: когда какой API выбрать',
    excerpt: 'Практическое сравнение на реальных кейсах. Когда GraphQL экономит время, а когда REST проще и надёжнее.',
    category: 'backend',
    readTime: 10,
    author: 'Backend-команда',
    authorInitials: 'BE',
    authorColor: '#f59e0b'
  },
  {
    slug: 'agile-development-process',
    title: 'Как мы работаем: Agile без карго-культа',
    excerpt: 'Наш процесс разработки: 2-недельные спринты, код-ревью, парное программирование. Без лишних церемоний, но с результатом.',
    category: 'methodology',
    readTime: 7,
    author: 'PM-команда',
    authorInitials: 'PM',
    authorColor: '#ec4899'
  },
  {
    slug: 'mongodb-use-cases',
    title: 'MongoDB: когда документная БД — правильный выбор',
    excerpt: 'Гибкая схема, горизонтальное масштабирование, агрегации — реальные сценарии использования MongoDB в наших проектах.',
    category: 'databases',
    readTime: 9,
    author: 'Команда данных',
    authorInitials: 'КД',
    authorColor: '#8b5cf6'
  },
  {
    slug: 'network-traffic-analysis',
    title: 'Анализ сетевого трафика: как обнаружить аномалии',
    excerpt: 'ML-модели для обнаружения угроз в сетевом трафике. Как WoneNDR находит атаки, которые пропускают сигнатурные системы.',
    category: 'security',
    readTime: 11,
    author: 'Отдел безопасности',
    authorInitials: 'ОБ',
    authorColor: '#802fb9'
  },
  {
    slug: 'event-sourcing-cqrs',
    title: 'Event Sourcing и CQRS: разделяй и властвуй',
    excerpt: 'Как хранить историю изменений вместо текущего состояния. Связка Event Sourcing + CQRS + брокер сообщений в реальных проектах.',
    category: 'architecture',
    readTime: 13,
    author: 'Команда архитектуры',
    authorInitials: 'КА',
    authorColor: '#ef3f29'
  },
  {
    slug: 'monolith-to-microservices',
    title: 'Миграция с монолита на микросервисы: пошаговый план',
    excerpt: 'Стратегия Strangler Fig: как разделить монолит без Big Bang Rewrite. Пошаговый план из нашей практики.',
    category: 'architecture',
    readTime: 14,
    author: 'Команда архитектуры',
    authorInitials: 'КА',
    authorColor: '#ef3f29'
  },
  {
    slug: 'domain-driven-design',
    title: 'DDD: проектирование от бизнеса, а не от таблиц',
    excerpt: 'Bounded Context, Ubiquitous Language, Aggregates — ключевые концепции Domain-Driven Design на понятных примерах.',
    category: 'architecture',
    readTime: 12,
    author: 'Команда архитектуры',
    authorInitials: 'КА',
    authorColor: '#ef3f29'
  },
  {
    slug: 'zero-trust-architecture',
    title: 'Zero Trust: не доверяй, проверяй',
    excerpt: 'Классический периметр больше не защищает. Как внедрить Zero Trust: mTLS, Service Mesh, NDR-мониторинг.',
    category: 'security',
    readTime: 10,
    author: 'Отдел безопасности',
    authorInitials: 'ОБ',
    authorColor: '#802fb9'
  },
  {
    slug: 'owasp-top-10',
    title: 'OWASP Top 10: защита веб-приложений',
    excerpt: 'Топ-10 уязвимостей веб-приложений: Broken Access Control, Injection, Misconfiguration. Как мы проверяем каждый проект.',
    category: 'security',
    readTime: 12,
    author: 'Отдел безопасности',
    authorInitials: 'ОБ',
    authorColor: '#802fb9'
  },
  {
    slug: 'siem-integration',
    title: 'SIEM-интеграция: центральный мониторинг безопасности',
    excerpt: 'Как объединить логи из всех источников и обнаруживать атаки через корреляцию. WoneNDR + ELK — связка для среднего бизнеса.',
    category: 'security',
    readTime: 9,
    author: 'Отдел безопасности',
    authorInitials: 'ОБ',
    authorColor: '#802fb9'
  },
  {
    slug: 'nextjs-nuxtjs-ssr',
    title: 'SSR: Next.js и Nuxt.js для SEO и производительности',
    excerpt: 'SPA vs SSR vs SSG — когда что выбрать. Практическое сравнение Next.js и Nuxt.js для enterprise-проектов.',
    category: 'frontend',
    readTime: 11,
    author: 'Frontend-команда',
    authorInitials: 'FE',
    authorColor: '#22c55e'
  },
  {
    slug: 'design-system-guide',
    title: 'Design System: от кнопки до экосистемы',
    excerpt: 'Как мы создаём дизайн-системы: Design Tokens, компоненты, Storybook. Когда нужна и когда это overengineering.',
    category: 'frontend',
    readTime: 10,
    author: 'Frontend-команда',
    authorInitials: 'FE',
    authorColor: '#22c55e'
  },
  {
    slug: 'web-performance',
    title: 'Web Performance: загрузка за 1 секунду',
    excerpt: 'Core Web Vitals, lazy loading, code splitting, CDN — чек-лист оптимизации. Каждая секунда = 7% конверсии.',
    category: 'frontend',
    readTime: 12,
    author: 'Frontend-команда',
    authorInitials: 'FE',
    authorColor: '#22c55e'
  },
  {
    slug: 'pwa-progressive-web-apps',
    title: 'PWA: приложение без магазина',
    excerpt: 'Когда PWA лучше нативного приложения. Service Worker, Web Manifest, Push API — технологии для B2B-продуктов.',
    category: 'frontend',
    readTime: 9,
    author: 'Frontend-команда',
    authorInitials: 'FE',
    authorColor: '#22c55e'
  },
  {
    slug: 'grpc-microservices',
    title: 'Как ускорить корпоративные системы в 5-10 раз',
    excerpt: 'Оптимизация внутреннего взаимодействия между модулями системы. Как снизить задержки и обслуживать больше пользователей на том же оборудовании.',
    category: 'backend',
    readTime: 11,
    author: 'Backend-команда',
    authorInitials: 'BE',
    authorColor: '#f59e0b'
  },
  {
    slug: 'oauth-jwt-authentication',
    title: 'OAuth и JWT: аутентификация правильно',
    excerpt: 'Authorization Code + PKCE, Refresh Token Rotation, граф прав в Dgraph — наш подход к безопасной аутентификации.',
    category: 'backend',
    readTime: 13,
    author: 'Backend-команда',
    authorInitials: 'BE',
    authorColor: '#f59e0b'
  },
  {
    slug: 'websocket-realtime',
    title: 'Real-time в бизнесе: зачем вашей системе работа в реальном времени',
    excerpt: 'Уведомления, live-дашборды, трекинг и совместная работа — как мгновенная обратная связь повышает эффективность и лояльность.',
    category: 'backend',
    readTime: 10,
    author: 'Backend-команда',
    authorInitials: 'BE',
    authorColor: '#f59e0b'
  },
  {
    slug: 'rate-limiting-patterns',
    title: 'Защита от перегрузок: как не потерять бизнес из-за DDoS или всплеска трафика',
    excerpt: 'Три уровня защиты от перегрузок. Как обеспечить доступность системы при рекламных кампаниях, всплесках и атаках.',
    category: 'backend',
    readTime: 9,
    author: 'Backend-команда',
    authorInitials: 'BE',
    authorColor: '#f59e0b'
  },
  {
    slug: 'elasticsearch-search',
    title: 'Elasticsearch: полнотекстовый поиск и аналитика',
    excerpt: 'Когда SQL LIKE не справляется. Полнотекстовый поиск, фасетная фильтрация, геопоиск — на реальных кейсах.',
    category: 'databases',
    readTime: 12,
    author: 'Команда данных',
    authorInitials: 'КД',
    authorColor: '#8b5cf6'
  },
  {
    slug: 'database-migration-strategies',
    title: 'Миграции БД без даунтайма: стратегии и инструменты',
    excerpt: 'Expand-Contract, Online DDL, Flyway — как менять схему БД на production без остановки сервиса.',
    category: 'databases',
    readTime: 11,
    author: 'Команда данных',
    authorInitials: 'КД',
    authorColor: '#8b5cf6'
  },
  {
    slug: 'data-backup-recovery',
    title: 'Бэкапы и восстановление: стратегии для production',
    excerpt: 'Стратегия 3-2-1, pg_basebackup + WAL, PITR — как не потерять данные. И как проверить, что бэкап работает.',
    category: 'databases',
    readTime: 10,
    author: 'Команда данных',
    authorInitials: 'КД',
    authorColor: '#8b5cf6'
  },
  {
    slug: 'terraform-infrastructure',
    title: 'Terraform: инфраструктура как код',
    excerpt: 'Декларативное описание серверов, сетей, БД. Remote state, модули, workspaces — best practices из 50+ проектов.',
    category: 'devops',
    readTime: 12,
    author: 'DevOps-инженеры',
    authorInitials: 'DO',
    authorColor: '#3b82f6'
  },
  {
    slug: 'monitoring-observability',
    title: 'Мониторинг и Observability: видеть всё',
    excerpt: 'Три столпа: Metrics (Prometheus), Logs (Loki), Traces (Jaeger). Как мы мониторим 50+ микросервисов в production.',
    category: 'devops',
    readTime: 13,
    author: 'DevOps-инженеры',
    authorInitials: 'DO',
    authorColor: '#3b82f6'
  },
  {
    slug: 'gitops-argocd',
    title: 'GitOps: деплой через Git с ArgoCD',
    excerpt: 'Git как единственный источник правды. Как ArgoCD автоматически синхронизирует Kubernetes с репозиторием.',
    category: 'devops',
    readTime: 10,
    author: 'DevOps-инженеры',
    authorInitials: 'DO',
    authorColor: '#3b82f6'
  },
  {
    slug: 'load-balancing-strategies',
    title: 'Балансировка нагрузки: стратегии и инструменты',
    excerpt: 'Round Robin, Least Connections, IP Hash. L4 vs L7 балансировка. Traefik, Nginx, Envoy — когда что использовать.',
    category: 'devops',
    readTime: 10,
    author: 'DevOps-инженеры',
    authorInitials: 'DO',
    authorColor: '#3b82f6'
  },
  {
    slug: 'testing-pyramid',
    title: 'Пирамида тестирования: сколько тестов писать',
    excerpt: 'Unit (70%), Integration (20%), E2E (10%) — оптимальное соотношение. Почему перевёрнутая пирамида убивает CI/CD.',
    category: 'methodology',
    readTime: 10,
    author: 'QA-команда',
    authorInitials: 'QA',
    authorColor: '#ec4899'
  },
  {
    slug: 'load-testing-k6',
    title: 'Как узнать предел вашей системы до того, как это сделают пользователи',
    excerpt: 'Зачем бизнесу нагрузочное тестирование. Гарантия SLA, планирование роста и экономия на инфраструктуре.',
    category: 'methodology',
    readTime: 11,
    author: 'QA-команда',
    authorInitials: 'QA',
    authorColor: '#ec4899'
  },
  {
    slug: 'e2e-testing-playwright',
    title: 'Автоматическое тестирование: почему ручная проверка — это риск для бизнеса',
    excerpt: 'Как автоматические тесты защищают от регрессий, ускоряют релизы и экономят деньги. Реальные примеры.',
    category: 'methodology',
    readTime: 9,
    author: 'QA-команда',
    authorInitials: 'QA',
    authorColor: '#ec4899'
  },
  {
    slug: 'code-review-practices',
    title: 'Код-ревью: как делать правильно',
    excerpt: 'Что проверять, сколько времени тратить, как комментировать. Правила, которые ускоряют разработку, а не тормозят.',
    category: 'methodology',
    readTime: 8,
    author: 'PM-команда',
    authorInitials: 'PM',
    authorColor: '#ec4899'
  },
  {
    slug: 'technical-debt',
    title: 'Технический долг: измерить и погасить',
    excerpt: 'Осознанный vs неосознанный долг. Как визуализировать, бюджетировать и не утонуть. Метрики и процессы.',
    category: 'methodology',
    readTime: 10,
    author: 'PM-команда',
    authorInitials: 'PM',
    authorColor: '#ec4899'
  },
  {
    slug: 'mvp-development',
    title: 'MVP: минимум для максимума',
    excerpt: 'Как определить скоуп MVP за 1 день. User Story Mapping, MoSCoW — и запуск за 4-8 недель.',
    category: 'methodology',
    readTime: 9,
    author: 'PM-команда',
    authorInitials: 'PM',
    authorColor: '#ec4899'
  },
  {
    slug: 'cloud-native-architecture',
    title: 'Cloud Native: проектирование для облака',
    excerpt: 'Контейнеризация, оркестрация, 12-Factor App — принципы cloud-native архитектуры. Не только про AWS.',
    category: 'devops',
    readTime: 11,
    author: 'DevOps-инженеры',
    authorInitials: 'DO',
    authorColor: '#3b82f6'
  },
  {
    slug: 'serverless-functions',
    title: 'Serverless: когда это выгодно',
    excerpt: 'Lambda, Cloud Functions — когда serverless дешевле сервера. Cold start, ограничения и реальные сценарии.',
    category: 'devops',
    readTime: 9,
    author: 'DevOps-инженеры',
    authorInitials: 'DO',
    authorColor: '#3b82f6'
  },
  {
    slug: 'feature-flags',
    title: 'Feature Flags: релизы без рисков',
    excerpt: 'Canary release, A/B тесты, kill switch — как разделить деплой и релиз. LaunchDarkly, Unleash или custom.',
    category: 'methodology',
    readTime: 8,
    author: 'PM-команда',
    authorInitials: 'PM',
    authorColor: '#ec4899'
  },
  {
    slug: 'rls-fls-data-security',
    title: 'RLS и FLS: безопасность данных на уровне строк и полей',
    excerpt: 'Row Level Security и Field Level Security в PostgreSQL. Как мы реализуем multi-tenant изоляцию без проверок в коде.',
    category: 'security',
    readTime: 14,
    author: 'Команда данных',
    authorInitials: 'КД',
    authorColor: '#8b5cf6'
  }
]

const getCatColor = (catId: string): string => {
  return categories.find(c => c.id === catId)?.color || '#94a3b8'
}

const getCatLabel = (catId: string): string => {
  return categories.find(c => c.id === catId)?.label || catId
}

const filteredArticles = computed(() => {
  return articles.filter(a => {
    const matchCategory = activeCategory.value === 'all' || a.category === activeCategory.value
    const matchSearch = !searchQuery.value ||
      a.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      a.excerpt.toLowerCase().includes(searchQuery.value.toLowerCase())
    return matchCategory && matchSearch
  })
})
</script>

<style scoped>
.kb-badge {
  display: inline-block;
  background: var(--color-primary-ultra-light);
  color: var(--color-primary);
  padding: 4px 16px;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 16px;
}

/* Controls */
.kb-controls {
  margin-bottom: var(--spacing-2xl);
}

.kb-search {
  position: relative;
  margin-bottom: var(--spacing-lg);
}

.search-icon {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-text-tertiary);
  pointer-events: none;
}

.search-input {
  width: 100%;
  padding: 14px 16px 14px 48px;
  border: 2px solid var(--color-bg-tertiary);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  background: var(--color-bg-primary);
  color: var(--color-text-primary);
  transition: border-color 0.2s;
  font-family: inherit;
}

.search-input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.search-input::placeholder {
  color: var(--color-text-tertiary);
}

.kb-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag-btn {
  padding: 6px 14px;
  border-radius: 9999px;
  border: 1px solid var(--color-bg-tertiary);
  background: var(--color-bg-primary);
  color: var(--color-text-secondary);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  font-family: inherit;
}

.tag-btn:hover {
  border-color: var(--color-primary);
  color: var(--color-primary);
}

.tag-btn.active {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: #fff;
}

/* Grid */
.kb-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--spacing-lg);
}

.kb-card {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-bg-tertiary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  transition: all 0.2s;
}

.kb-card:hover {
  border-color: var(--color-primary);
  box-shadow: 0 4px 20px rgba(239, 63, 41, 0.08);
  transform: translateY(-2px);
}

.kb-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
}

.kb-card-cat {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.kb-card-time {
  font-size: 12px;
  color: var(--color-text-tertiary);
}

.kb-card-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
  line-height: 1.4;
}

.kb-card-excerpt {
  font-size: 14px;
  color: var(--color-text-secondary);
  line-height: 1.6;
  flex: 1;
  margin-bottom: var(--spacing-lg);
}

.kb-card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.kb-card-author {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: var(--color-text-tertiary);
}

.author-avatar {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 700;
  color: #fff;
}

.kb-card-arrow {
  color: var(--color-primary);
  font-size: 18px;
  font-weight: 600;
  opacity: 0;
  transform: translateX(-4px);
  transition: all 0.2s;
}

.kb-card:hover .kb-card-arrow {
  opacity: 1;
  transform: translateX(0);
}

/* Empty */
.kb-empty {
  text-align: center;
  padding: var(--spacing-4xl) 0;
  color: var(--color-text-tertiary);
}

/* CTA */
.kb-cta {
  text-align: center;
  padding: var(--spacing-4xl);
  max-width: 600px;
  margin: 0 auto;
}

.kb-cta h2 {
  margin-bottom: var(--spacing-md);
}

.kb-cta p {
  color: var(--color-text-secondary);
  font-size: var(--font-size-large);
  margin-bottom: var(--spacing-xl);
}

@media (max-width: 768px) {
  .kb-grid {
    grid-template-columns: 1fr;
  }
}
</style>
