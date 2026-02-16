<template>
  <div class="services-page">
    <section class="hero hero-small">
      <div class="container">
        <span class="hero-badge">Что мы делаем</span>
        <h1 class="hero-title">Полный цикл разработки</h1>
        <p class="hero-subtitle">
          От аналитики до поддержки — закрываем весь процесс создания цифрового продукта
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="service-row"
          :class="{ 'service-reverse': index % 2 !== 0 }"
        >
          <!-- Illustration -->
          <div class="service-visual card-glass">
            <div class="visual-inner" :class="`visual-${service.color}`">
              <div class="visual-icon">{{ service.icon }}</div>
              <svg class="visual-pattern" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <!-- Abstract decorative shapes -->
                <circle :cx="service.pattern[0]" :cy="service.pattern[1]" :r="service.pattern[2]" :fill="`url(#grad-${service.color})`" opacity="0.15"/>
                <rect :x="service.pattern[3]" :y="service.pattern[4]" :width="service.pattern[5]" :height="service.pattern[6]" rx="8" :fill="`url(#grad-${service.color})`" opacity="0.1" :transform="`rotate(${service.pattern[7]} 100 100)`"/>
                <circle cx="160" cy="40" r="20" :stroke="`url(#grad-${service.color})`" stroke-width="2" fill="none" opacity="0.2"/>
                <defs>
                  <linearGradient :id="`grad-${service.color}`" x1="0" y1="0" x2="200" y2="200">
                    <stop offset="0%" :stop-color="service.gradStart"/>
                    <stop offset="100%" :stop-color="service.gradEnd"/>
                  </linearGradient>
                </defs>
              </svg>
              <div class="visual-number">0{{ index + 1 }}</div>
            </div>
          </div>

          <!-- Content -->
          <div class="service-content">
            <span class="service-label" :style="{ color: service.gradStart }">{{ service.label }}</span>
            <h2 class="service-title">{{ service.title }}</h2>
            <p class="service-description">{{ service.description }}</p>

            <ul class="service-features">
              <li v-for="(feature, idx) in service.features" :key="idx">
                <span class="feature-check" :style="{ background: service.gradStart }">✓</span>
                {{ feature }}
              </li>
            </ul>

            <div class="service-tags">
              <RouterLink
                v-for="(tag, idx) in service.tags"
                :key="idx"
                :to="tag.link"
                class="service-tag"
                :style="{ borderColor: service.gradStart + '30', color: service.gradStart }"
              >
                {{ tag.label }}
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <FaqSection
      title="Частые вопросы об услугах"
      :items="faqItems"
      :dark="true"
    />

    <section class="section">
      <div class="container">
        <div class="cta-box card-glass">
          <h2>Нужна консультация?</h2>
          <p>Расскажите о вашей задаче, и мы подберём оптимальный набор услуг</p>
          <RouterLink to="/contact" class="btn btn-primary">Обсудить проект</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import FaqSection from '@/components/FaqSection.vue'

const faqItems = [
  {
    question: 'Сколько стоит разработка MVP?',
    answer: 'Стоимость MVP начинается от 300 000 ₽ для малого бизнеса (монолитная архитектура, 2-4 недели). Для среднего бизнеса — от 1 млн ₽ (модульная архитектура, 3-6 месяцев). Точная оценка зависит от сложности, количества интеграций и требований к нагрузке.'
  },
  {
    question: 'Можем ли мы забрать код себе?',
    answer: 'Да. У нас есть модель "Передача кода" — вы получаете полный исходный код, документацию и инструкции по развертыванию. Также доступна модель подписки, где мы хостим и поддерживаем систему за вас.'
  },
  {
    question: 'Какие технологии вы используете?',
    answer: 'Мы подбираем стек под задачу: React/Vue/Angular для frontend, Node.js/Python/Java для backend, PostgreSQL/MongoDB/GraphDB для баз данных, Docker/Kubernetes для инфраструктуры. Наша платформа WoneScale ускоряет старт за счёт готовых компонентов.'
  },
  {
    question: 'Что входит в подписку на поддержку?',
    answer: 'Хостинг, мониторинг 24/7, обновления безопасности, резервное копирование, устранение сбоев и до 10 часов мелких доработок в месяц. Стоимость — от 30 000 ₽/мес.'
  },
  {
    question: 'Работаете ли вы с кастомизацией ваших продуктов?',
    answer: 'Да. WoneScale можно адаптировать под специфику вашего бизнеса: кастомные модули, интеграции, бизнес-логика. WoneNDR также настраивается: кастомные правила обнаружения, интеграция с вашей SIEM-системой.'
  }
]

const services = [
  {
    icon: '📊',
    label: 'Аналитика',
    title: 'Аналитика и бизнес-консалтинг',
    description: 'Погружаемся в бизнес-процессы, находим узкие места и проектируем архитектуру решения. Строим дорожную карту — от текущего состояния до целевого.',
    features: [
      'Аудит текущих процессов и систем',
      'Выявление точек автоматизации',
      'ROI-расчёт и бизнес-кейс',
      'Дорожная карта цифровизации'
    ],
    tags: [
      { label: 'Стратегия', link: '/knowledge/mvp-development' },
      { label: 'Оптимизация', link: '/knowledge/bpm-business-automation' },
      { label: 'ROI', link: '/knowledge/mvp-development' }
    ],
    color: 'blue',
    gradStart: '#0A84FF',
    gradEnd: '#00D9FF',
    pattern: [40, 140, 60, 80, 20, 100, 80, 15]
  },
  {
    icon: '🎨',
    label: 'Дизайн',
    title: 'Проектирование и UX/UI дизайн',
    description: 'Создаём интерфейсы, которые решают задачи пользователей. Исследуем аудиторию, прототипируем, тестируем — и только потом рисуем финальный дизайн.',
    features: [
      'User Research и Journey Mapping',
      'Wireframes и интерактивные прототипы',
      'UI-дизайн и Design System',
      'Usability-тестирование на реальных пользователях'
    ],
    tags: [
      { label: 'UX', link: '/knowledge/design-system-guide' },
      { label: 'UI', link: '/knowledge/design-system-guide' },
      { label: 'Прототипы', link: '/knowledge/design-system-guide' },
      { label: 'Design System', link: '/knowledge/design-system-guide' }
    ],
    color: 'purple',
    gradStart: '#802FB9',
    gradEnd: '#C471ED',
    pattern: [150, 150, 50, 20, 40, 80, 60, -10]
  },
  {
    icon: '💻',
    label: 'Frontend',
    title: 'Frontend-разработка',
    description: 'Быстрые, отзывчивые интерфейсы на современном стеке. SPA, SSR, мобильные приложения — подберём архитектуру под задачу и нагрузку.',
    features: [
      'SPA на React, Vue, Angular',
      'SSR для SEO: Next.js, Nuxt.js',
      'Мобильные приложения (React Native)',
      'Адаптивная вёрстка и анимации'
    ],
    tags: [
      { label: 'React', link: '/knowledge/vue-vs-react-vs-angular' },
      { label: 'Vue', link: '/knowledge/vue-vs-react-vs-angular' },
      { label: 'Angular', link: '/knowledge/vue-vs-react-vs-angular' },
      { label: 'TypeScript', link: '/knowledge/typescript-enterprise' }
    ],
    color: 'green',
    gradStart: '#16A34A',
    gradEnd: '#4ADE80',
    pattern: [100, 100, 70, 30, 60, 90, 50, 25]
  },
  {
    icon: '⚙️',
    label: 'Backend',
    title: 'Backend-разработка',
    description: 'Проектируем надёжный backend: API, базы данных, микросервисы, интеграции. Строим архитектуру, которая масштабируется и не падает под нагрузкой.',
    features: [
      'REST и GraphQL API',
      'Микросервисная архитектура',
      'SQL, NoSQL, графовые БД',
      'Интеграции с внешними системами'
    ],
    tags: [
      { label: 'Node.js', link: '/knowledge/nodejs-python-java-go' },
      { label: 'GraphQL', link: '/knowledge/graphql-rest-api-design' },
      { label: 'PostgreSQL', link: '/knowledge/postgresql-optimization' },
      { label: 'Event-driven', link: '/knowledge/kafka-event-streaming' }
    ],
    color: 'orange',
    gradStart: '#D97706',
    gradEnd: '#FBBF24',
    pattern: [60, 60, 45, 100, 80, 70, 70, -20]
  },
  {
    icon: '🧪',
    label: 'QA',
    title: 'Тестирование и обеспечение качества',
    description: 'Гарантируем качество на всех уровнях: от unit-тестов до нагрузочного тестирования и аудита безопасности. Автоматизируем всё, что можно.',
    features: [
      'Unit и интеграционное тестирование',
      'Нагрузочное тестирование (k6, JMeter)',
      'Тестирование безопасности (OWASP)',
      'Автоматизация CI/CD-пайплайнов'
    ],
    tags: [
      { label: 'QA', link: '/knowledge/testing-pyramid' },
      { label: 'Автотесты', link: '/knowledge/e2e-testing-playwright' },
      { label: 'Нагрузка', link: '/knowledge/load-testing-k6' },
      { label: 'Безопасность', link: '/knowledge/owasp-top-10' }
    ],
    color: 'red',
    gradStart: '#EF3F29',
    gradEnd: '#FB7A6A',
    pattern: [140, 130, 55, 10, 30, 110, 60, 30]
  },
  {
    icon: '🚀',
    label: 'DevOps',
    title: 'DevOps и инфраструктура',
    description: 'Настраиваем CI/CD, контейнеризацию, мониторинг. Ваши релизы — стабильные и предсказуемые, инфраструктура — масштабируемая и отказоустойчивая.',
    features: [
      'CI/CD: GitLab CI, GitHub Actions, Jenkins',
      'Docker и Kubernetes в продакшене',
      'Мониторинг: Prometheus, Grafana, ELK',
      'IaC: Terraform, Ansible'
    ],
    tags: [
      { label: 'Docker', link: '/knowledge/docker-containerization' },
      { label: 'Kubernetes', link: '/knowledge/kubernetes-production' },
      { label: 'CI/CD', link: '/knowledge/cicd-best-practices' },
      { label: 'Monitoring', link: '/knowledge/monitoring-observability' }
    ],
    color: 'cyan',
    gradStart: '#0891B2',
    gradEnd: '#22D3EE',
    pattern: [80, 160, 40, 50, 10, 100, 90, -15]
  },
  {
    icon: '📈',
    label: 'Поддержка',
    title: 'Поддержка и развитие',
    description: 'Техническая поддержка 24/7, мониторинг, обновления безопасности. Развиваем продукт: добавляем фичи, оптимизируем производительность, масштабируем.',
    features: [
      'Мониторинг и реагирование 24/7',
      'Обновления безопасности и патчи',
      'Добавление нового функционала',
      'Оптимизация производительности'
    ],
    tags: [
      { label: 'SLA', link: '/knowledge/monitoring-observability' },
      { label: '24/7', link: '/knowledge/monitoring-observability' },
      { label: 'Обновления', link: '/knowledge/cicd-best-practices' }
    ],
    color: 'indigo',
    gradStart: '#6366F1',
    gradEnd: '#A78BFA',
    pattern: [120, 80, 65, 20, 100, 80, 55, 20]
  }
]
</script>

<style scoped>
.hero-badge {
  display: inline-block;
  background: var(--gradient-accent);
  color: var(--color-text-inverse);
  padding: var(--spacing-xs) var(--spacing-lg);
  border-radius: var(--radius-full);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-lg);
}

/* Zigzag service rows */
.service-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
  margin-bottom: var(--spacing-4xl);
}

.service-row:last-child {
  margin-bottom: 0;
}

.service-row.service-reverse {
  direction: rtl;
}

.service-row.service-reverse > * {
  direction: ltr;
}

/* Visual / illustration block */
.service-visual {
  padding: 0;
  overflow: hidden;
  border-radius: var(--radius-xl);
  aspect-ratio: 4 / 3;
}

.visual-inner {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  min-height: 320px;
}

.visual-inner.visual-blue { background: linear-gradient(135deg, rgba(10,132,255,0.06), rgba(0,217,255,0.08)); }
.visual-inner.visual-purple { background: linear-gradient(135deg, rgba(128,47,185,0.06), rgba(196,113,237,0.08)); }
.visual-inner.visual-green { background: linear-gradient(135deg, rgba(22,163,74,0.06), rgba(74,222,128,0.08)); }
.visual-inner.visual-orange { background: linear-gradient(135deg, rgba(217,119,6,0.06), rgba(251,191,36,0.08)); }
.visual-inner.visual-red { background: linear-gradient(135deg, rgba(239,63,41,0.06), rgba(251,122,106,0.08)); }
.visual-inner.visual-cyan { background: linear-gradient(135deg, rgba(8,145,178,0.06), rgba(34,211,238,0.08)); }
.visual-inner.visual-indigo { background: linear-gradient(135deg, rgba(99,102,241,0.06), rgba(167,139,250,0.08)); }

.visual-icon {
  font-size: 5rem;
  z-index: 2;
  filter: drop-shadow(0 4px 12px rgba(0,0,0,0.08));
}

.visual-pattern {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.visual-number {
  position: absolute;
  top: var(--spacing-lg);
  left: var(--spacing-lg);
  font-family: var(--font-family-heading);
  font-size: 3rem;
  font-weight: var(--font-weight-bold);
  opacity: 0.08;
  z-index: 1;
}

/* Content */
.service-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.service-label {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.service-title {
  font-size: var(--font-size-h3);
  line-height: var(--line-height-tight);
}

.service-description {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  font-size: var(--font-size-base);
}

.service-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-sm);
}

.service-features li {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-small);
  color: var(--color-text-secondary);
}

.feature-check {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  color: white;
  font-size: 10px;
  flex-shrink: 0;
}

.service-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-sm);
}

.service-tag {
  padding: 4px 12px;
  border: 1px solid;
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  text-decoration: none;
  transition: all var(--transition-fast);
}

.service-tag:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

/* CTA */
.cta-box {
  text-align: center;
  padding: var(--spacing-4xl);
}

.cta-box h2 {
  margin-bottom: var(--spacing-md);
}

.cta-box p {
  font-size: var(--font-size-large);
  color: var(--color-text-tertiary);
  margin-bottom: var(--spacing-xl);
}

/* Responsive */
@media (max-width: 968px) {
  .service-row,
  .service-row.service-reverse {
    grid-template-columns: 1fr;
    direction: ltr;
    gap: var(--spacing-xl);
  }

  .visual-inner {
    min-height: 240px;
  }
}

@media (max-width: 640px) {
  .visual-inner {
    min-height: 200px;
  }

  .visual-icon {
    font-size: 3.5rem;
  }

  .service-title {
    font-size: var(--font-size-h4);
  }
}
</style>
