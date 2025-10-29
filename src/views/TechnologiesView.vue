<template>
  <div class="technologies-page">
    <section class="hero hero-small">
      <div class="container">
        <h1 class="hero-title">Технологии под каждый уровень бизнеса</h1>
        <p class="hero-subtitle">Не универсальные решения, а оптимальный стек под вашу задачу</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="tech-levels">
          <div v-for="(level, index) in techLevels" :key="index" class="tech-level card-glass">
            <div class="tech-level-header">
              <div class="tech-level-icon">{{ level.icon }}</div>
              <div>
                <h2>{{ level.title }}</h2>
                <p class="tech-level-subtitle">{{ level.subtitle }}</p>
              </div>
            </div>

            <div class="tech-stack">
              <h3>Технологический стек</h3>
              <div class="stack-grid">
                <div v-for="(item, idx) in level.stack" :key="idx" class="stack-item">
                  <strong>{{ item.category }}:</strong> {{ item.tech }}
                </div>
              </div>
            </div>

            <div class="tech-benefits">
              <h3>Преимущества</h3>
              <ul>
                <li v-for="(benefit, idx) in level.benefits" :key="idx">{{ benefit }}</li>
              </ul>
            </div>

            <div class="tech-stats">
              <div class="stat">
                <div class="stat-value">{{ level.stats.time }}</div>
                <div class="stat-label">Время до MVP</div>
              </div>
              <div class="stat">
                <div class="stat-value">{{ level.stats.cost }}</div>
                <div class="stat-label">Стоимость</div>
              </div>
              <div class="stat">
                <div class="stat-value">{{ level.stats.sla }}</div>
                <div class="stat-label">SLA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container text-center">
        <h2 class="section-title">Не уверены, какой стек подойдет?</h2>
        <p class="section-subtitle">Мы проанализируем ваши требования и предложим оптимальное решение</p>
        <RouterLink to="/contact" class="btn btn-primary">Получить консультацию</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const techLevels = [
  {
    icon: '🚀',
    title: 'Малый бизнес',
    subtitle: 'Быстро, надежно, доступно',
    stack: [
      { category: 'Архитектура', tech: 'Монолитная' },
      { category: 'Frontend', tech: 'React / Vue.js' },
      { category: 'Backend', tech: 'Node.js' },
      { category: 'БД', tech: 'PostgreSQL' },
      { category: 'Кэш', tech: 'Redis' },
      { category: 'Инфраструктура', tech: 'Docker' }
    ],
    benefits: [
      'Минимальные требования к инфраструктуре',
      'Быстрая разработка',
      'Простота поддержки',
      'Предсказуемые расходы'
    ],
    stats: {
      time: '2-4 недели',
      cost: 'от 300 тыс ₽',
      sla: '99%'
    }
  },
  {
    icon: '📈',
    title: 'Средний бизнес',
    subtitle: 'Готовность к росту без переписывания',
    stack: [
      { category: 'Архитектура', tech: 'Модульная с элементами микросервисов' },
      { category: 'Frontend', tech: 'React + Next.js (SSR)' },
      { category: 'Backend', tech: 'Node.js микросервисы' },
      { category: 'БД', tech: 'PostgreSQL + Redis + Elasticsearch' },
      { category: 'Очереди', tech: 'RabbitMQ / Kafka' },
      { category: 'Инфраструктура', tech: 'Docker + Docker Swarm' }
    ],
    benefits: [
      'Модульная архитектура — добавляете функции без остановки',
      'Горизонтальное масштабирование',
      'Детальная аналитика производительности',
      'Поддержка высоких нагрузок'
    ],
    stats: {
      time: '3-6 месяцев',
      cost: 'от 1 млн ₽',
      sla: '99.9%'
    }
  },
  {
    icon: '🏢',
    title: 'Enterprise',
    subtitle: 'Максимальная производительность и надежность',
    stack: [
      { category: 'Архитектура', tech: 'True микросервисная' },
      { category: 'Frontend', tech: 'React / Angular' },
      { category: 'Backend', tech: 'Полиглот (Node.js, Java, Python)' },
      { category: 'БД', tech: 'GraphDB + PostgreSQL + MongoDB + Redis' },
      { category: 'Messaging', tech: 'Apache Kafka + NATS' },
      { category: 'Search', tech: 'Elasticsearch' },
      { category: 'Инфраструктура', tech: 'Kubernetes + Service Mesh' }
    ],
    benefits: [
      'Неограниченное масштабирование (миллионы пользователей)',
      'Отказоустойчивость 99.99% SLA',
      'Изоляция сбоев',
      'Гранулярная безопасность',
      'Распределенная архитектура'
    ],
    stats: {
      time: '6-12 месяцев',
      cost: 'от 5 млн ₽',
      sla: '99.99%'
    }
  }
]
</script>

<style scoped>
.tech-levels {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xl);
}

.tech-level {
  padding: var(--spacing-3xl);
}

.tech-level-header {
  display: flex;
  gap: var(--spacing-lg);
  align-items: flex-start;
  margin-bottom: var(--spacing-2xl);
  padding-bottom: var(--spacing-xl);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.tech-level-icon {
  font-size: 4rem;
}

.tech-level-subtitle {
  color: var(--color-text-secondary);
  font-size: var(--font-size-large);
  margin-top: var(--spacing-xs);
}

.tech-stack {
  margin-bottom: var(--spacing-2xl);
}

.tech-stack h3 {
  margin-bottom: var(--spacing-lg);
}

.stack-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
}

.stack-item {
  padding: var(--spacing-md);
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-md);
  font-size: var(--font-size-small);
  color: var(--color-text-secondary);
}

.stack-item strong {
  color: var(--color-text-primary);
  display: block;
  margin-bottom: var(--spacing-xs);
}

.tech-benefits {
  margin-bottom: var(--spacing-2xl);
}

.tech-benefits h3 {
  margin-bottom: var(--spacing-lg);
}

.tech-benefits ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-md);
}

.tech-benefits li {
  padding-left: var(--spacing-lg);
  position: relative;
  color: var(--color-text-secondary);
}

.tech-benefits li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-success);
  font-weight: var(--font-weight-bold);
}

.tech-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  padding-top: var(--spacing-xl);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.stat {
  text-align: center;
}

.stat-value {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
}

.stat-label {
  font-size: var(--font-size-small);
  color: var(--color-text-tertiary);
}

@media (max-width: 768px) {
  .tech-level {
    padding: var(--spacing-2xl) var(--spacing-lg);
  }

  .tech-level-header {
    flex-direction: column;
    text-align: center;
  }

  .stack-grid,
  .tech-benefits ul {
    grid-template-columns: 1fr;
  }

  .tech-stats {
    grid-template-columns: 1fr;
  }
}
</style>
