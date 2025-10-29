<template>
  <div class="services-page">
    <section class="hero hero-small">
      <div class="container">
        <h1 class="hero-title">Полный спектр услуг</h1>
        <p class="hero-subtitle">От аналитики до поддержки. Все в одном месте.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="services-list">
          <div v-for="(service, index) in services" :key="index" class="service-detail card">
            <div class="service-icon">{{ service.icon }}</div>
            <div class="service-content">
              <h2>{{ service.title }}</h2>
              <p class="service-description">{{ service.description }}</p>
              <ul class="service-features">
                <li v-for="(feature, idx) in service.features" :key="idx">{{ feature }}</li>
              </ul>
              <div class="service-tags">
                <span v-for="(tag, idx) in service.tags" :key="idx" class="tag">
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container">
        <div class="cta-box card-glass">
          <h2>Нужна консультация?</h2>
          <p>Расскажите о вашей задаче, и мы подберем оптимальный набор услуг</p>
          <RouterLink to="/contact" class="btn btn-primary">Обсудить проект</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const services = [
  {
    icon: '📊',
    title: 'Аналитика и бизнес-консалтинг',
    description: 'Анализируем бизнес-процессы, находим узкие места и возможности для оптимизации',
    features: [
      'Анализ текущего состояния и процессов',
      'Выявление возможностей для автоматизации',
      'ROI расчеты и оценка эффективности',
      'Дорожная карта цифровизации'
    ],
    tags: ['Стратегия', 'Оптимизация', 'ROI']
  },
  {
    icon: '🎨',
    title: 'Проектирование и дизайн (UX/UI)',
    description: 'Создаем удобные интерфейсы, которые любят пользователи',
    features: [
      'User Journey Mapping',
      'Wireframes и прототипирование',
      'UI дизайн и Design System',
      'Usability тестирование'
    ],
    tags: ['UX', 'UI', 'Прототипы', 'Design System']
  },
  {
    icon: '💻',
    title: 'Frontend разработка',
    description: 'Современные веб-приложения на React, Vue, Angular',
    features: [
      'SPA на React, Vue, Angular',
      'SSR для SEO (Next.js, Nuxt.js)',
      'Mobile apps (React Native)',
      'Адаптивная верстка'
    ],
    tags: ['React', 'Vue', 'Angular', 'Mobile']
  },
  {
    icon: '⚙️',
    title: 'Backend разработка',
    description: 'Надежный backend для любых задач',
    features: [
      'API разработка (REST, GraphQL)',
      'Базы данных (SQL, NoSQL, Graph)',
      'Микросервисная архитектура',
      'Интеграции с внешними системами'
    ],
    tags: ['Node.js', 'Python', 'Java', 'API']
  },
  {
    icon: '🧪',
    title: 'Тестирование',
    description: 'Гарантируем качество на всех уровнях',
    features: [
      'Unit и интеграционное тестирование',
      'Нагрузочное тестирование',
      'Тестирование безопасности',
      'Автоматизация тестирования'
    ],
    tags: ['QA', 'Автотесты', 'Нагрузка', 'Безопасность']
  },
  {
    icon: '🚀',
    title: 'DevOps и инфраструктура',
    description: 'Автоматизация развертывания и надежная инфраструктура',
    features: [
      'CI/CD настройка',
      'Контейнеризация (Docker, Kubernetes)',
      'Мониторинг и алертинг',
      'Управление инфраструктурой'
    ],
    tags: ['CI/CD', 'Docker', 'Kubernetes', 'Monitoring']
  },
  {
    icon: '📈',
    title: 'Поддержка и развитие',
    description: 'Техническая поддержка 24/7 и постоянное развитие системы',
    features: [
      'Мониторинг и быстрая реакция',
      'Обновления безопасности',
      'Добавление нового функционала',
      'Оптимизация производительности'
    ],
    tags: ['Support', '24/7', 'Обновления']
  }
]
</script>

<style scoped>
.hero-small {
  padding: var(--spacing-4xl) 0 var(--spacing-3xl);
}

.services-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
}

.service-detail {
  display: flex;
  gap: var(--spacing-xl);
  padding: var(--spacing-2xl);
  transition: all var(--transition-base);
}

.service-detail:hover {
  transform: translateY(-4px);
}

.service-icon {
  font-size: 4rem;
  flex-shrink: 0;
}

.service-content {
  flex: 1;
}

.service-content h2 {
  margin-bottom: var(--spacing-md);
}

.service-description {
  font-size: var(--font-size-large);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-lg);
}

.service-features {
  list-style: none;
  margin-bottom: var(--spacing-lg);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-sm);
}

.service-features li {
  padding-left: var(--spacing-lg);
  position: relative;
  color: var(--color-text-secondary);
}

.service-features li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-success);
  font-weight: var(--font-weight-bold);
}

.service-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.tag {
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--color-primary-ultra-light);
  color: var(--color-primary);
  border-radius: var(--radius-full);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-medium);
}

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

@media (max-width: 768px) {
  .service-detail {
    flex-direction: column;
    text-align: center;
  }

  .service-icon {
    font-size: 3rem;
  }

  .service-features {
    grid-template-columns: 1fr;
  }
}
</style>
