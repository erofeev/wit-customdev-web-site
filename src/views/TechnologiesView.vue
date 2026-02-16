<template>
  <div class="technologies-page">
    <section class="hero hero-small">
      <div class="container">
        <div class="hero-badge">Технологии</div>
        <h1 class="hero-title">Технологии под каждый уровень бизнеса</h1>
        <p class="hero-subtitle">Не универсальные решения, а оптимальный стек под вашу задачу и нагрузку</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div
          v-for="(level, index) in techLevels"
          :key="index"
          class="tech-row"
          :class="{ 'tech-reverse': index % 2 !== 0 }"
        >
          <!-- Illustration -->
          <div class="tech-visual">
            <div class="visual-inner" :class="`visual-${level.color}`">
              <div class="visual-icon">{{ level.icon }}</div>
              <svg class="visual-pattern" viewBox="0 0 240 240" fill="none">
                <circle :cx="level.pattern[0]" :cy="level.pattern[1]" :r="level.pattern[2]" :fill="`url(#grad-${level.color})`" opacity="0.12"/>
                <rect :x="level.pattern[3]" :y="level.pattern[4]" :width="level.pattern[5]" :height="level.pattern[6]" rx="12" :fill="`url(#grad-${level.color})`" opacity="0.08" :transform="`rotate(${level.pattern[7]} 120 120)`"/>
                <circle cx="190" cy="50" r="24" :stroke="`url(#grad-${level.color})`" stroke-width="2" fill="none" opacity="0.15"/>
                <defs>
                  <linearGradient :id="`grad-${level.color}`" x1="0" y1="0" x2="240" y2="240">
                    <stop offset="0%" :stop-color="level.gradStart"/>
                    <stop offset="100%" :stop-color="level.gradEnd"/>
                  </linearGradient>
                </defs>
              </svg>
              <!-- Stats overlay -->
              <div class="visual-stats">
                <div class="visual-stat" v-for="(s, si) in level.stats" :key="si">
                  <strong>{{ s.value }}</strong>
                  <span>{{ s.label }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Content -->
          <div class="tech-content">
            <span class="tech-label" :style="{ color: level.gradStart }">{{ level.label }}</span>
            <h2 class="tech-title">{{ level.title }}</h2>
            <p class="tech-description">{{ level.subtitle }}</p>

            <div class="tech-stack">
              <div v-for="(item, idx) in level.stack" :key="idx" class="stack-chip">
                <strong>{{ item.category }}</strong>
                <span>{{ item.tech }}</span>
              </div>
            </div>

            <ul class="tech-benefits">
              <li v-for="(benefit, idx) in level.benefits" :key="idx">
                <span class="benefit-check" :style="{ background: level.gradStart }">✓</span>
                {{ benefit }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container text-center">
        <h2 class="section-title">Не уверены, какой стек подойдёт?</h2>
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
    label: 'Малый бизнес',
    title: 'Быстрый старт',
    subtitle: 'Монолитная архитектура для быстрого запуска. Минимальные требования к инфраструктуре, предсказуемые расходы. Идеально для MVP и первых пользователей.',
    color: 'green',
    gradStart: '#10B981',
    gradEnd: '#34D399',
    pattern: [50, 170, 70, 100, 30, 110, 90, 12],
    stack: [
      { category: 'Архитектура', tech: 'Монолит' },
      { category: 'Frontend', tech: 'React / Vue.js' },
      { category: 'Backend', tech: 'Node.js' },
      { category: 'БД', tech: 'PostgreSQL' },
      { category: 'Кэш', tech: 'Redis' },
      { category: 'Инфраструктура', tech: 'Docker' }
    ],
    benefits: [
      'MVP за 2-4 недели',
      'Стоимость от 300 тыс ₽',
      'Простота поддержки и деплоя',
      'SLA 99%'
    ],
    stats: [
      { value: '2-4 нед.', label: 'до MVP' },
      { value: 'от 300K', label: 'стоимость' },
      { value: '99%', label: 'SLA' }
    ]
  },
  {
    icon: '📈',
    label: 'Средний бизнес',
    title: 'Готовность к росту',
    subtitle: 'Модульная архитектура с элементами микросервисов. Горизонтальное масштабирование без переписывания. Добавляйте функции без остановки системы.',
    color: 'blue',
    gradStart: '#3B82F6',
    gradEnd: '#60A5FA',
    pattern: [160, 160, 60, 20, 50, 90, 70, -8],
    stack: [
      { category: 'Архитектура', tech: 'Модульная' },
      { category: 'Frontend', tech: 'React + Next.js (SSR)' },
      { category: 'Backend', tech: 'Node.js микросервисы' },
      { category: 'БД', tech: 'PostgreSQL + Elasticsearch' },
      { category: 'Очереди', tech: 'RabbitMQ / NATS' },
      { category: 'Инфраструктура', tech: 'Docker + Swarm' }
    ],
    benefits: [
      'Масштабирование без простоя',
      'Стоимость от 1 млн ₽',
      'Детальная аналитика производительности',
      'SLA 99.9%'
    ],
    stats: [
      { value: '3-6 мес.', label: 'до MVP' },
      { value: 'от 1M', label: 'стоимость' },
      { value: '99.9%', label: 'SLA' }
    ]
  },
  {
    icon: '🏢',
    label: 'Enterprise',
    title: 'Максимальная надёжность',
    subtitle: 'True микросервисная архитектура на полиглот-стеке. Неограниченное масштабирование, изоляция сбоев, гранулярная безопасность. Для миллионов пользователей.',
    color: 'red',
    gradStart: '#EF3F29',
    gradEnd: '#FB7A6A',
    pattern: [80, 80, 55, 130, 100, 80, 70, 20],
    stack: [
      { category: 'Архитектура', tech: 'True микросервисы' },
      { category: 'Frontend', tech: 'React / Angular' },
      { category: 'Backend', tech: 'Node.js, Java, Python' },
      { category: 'БД', tech: 'GraphDB + PostgreSQL + MongoDB' },
      { category: 'Messaging', tech: 'NATS JetStream' },
      { category: 'Search', tech: 'Elasticsearch' },
      { category: 'Инфраструктура', tech: 'Kubernetes + Service Mesh' }
    ],
    benefits: [
      'Миллионы пользователей одновременно',
      'Стоимость от 5 млн ₽',
      'Изоляция сбоев и отказоустойчивость',
      'SLA 99.99%'
    ],
    stats: [
      { value: '6-12 мес.', label: 'до MVP' },
      { value: 'от 5M', label: 'стоимость' },
      { value: '99.99%', label: 'SLA' }
    ]
  }
]
</script>

<style scoped>
/* Zigzag rows */
.tech-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
  margin-bottom: var(--spacing-5xl);
}

.tech-row:last-child {
  margin-bottom: 0;
}

.tech-row.tech-reverse {
  direction: rtl;
}

.tech-row.tech-reverse > * {
  direction: ltr;
}

/* Visual / illustration */
.tech-visual {
  border-radius: var(--radius-xl);
  overflow: hidden;
}

.visual-inner {
  position: relative;
  width: 100%;
  aspect-ratio: 4 / 3;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: var(--radius-xl);
  min-height: 320px;
}

.visual-inner.visual-green { background: linear-gradient(135deg, rgba(16,185,129,0.08), rgba(52,211,153,0.12)); }
.visual-inner.visual-blue { background: linear-gradient(135deg, rgba(59,130,246,0.08), rgba(96,165,250,0.12)); }
.visual-inner.visual-red { background: linear-gradient(135deg, rgba(239,63,41,0.08), rgba(251,122,106,0.12)); }

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

.visual-stats {
  position: absolute;
  bottom: var(--spacing-lg);
  left: var(--spacing-lg);
  right: var(--spacing-lg);
  display: flex;
  justify-content: center;
  gap: var(--spacing-xl);
  z-index: 2;
}

.visual-stat {
  text-align: center;
  background: rgba(255,255,255,0.9);
  backdrop-filter: blur(8px);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.visual-stat strong {
  display: block;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}

.visual-stat span {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
}

/* Content */
.tech-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.tech-label {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  letter-spacing: 1.5px;
}

.tech-title {
  font-size: var(--font-size-h3);
  line-height: var(--line-height-tight);
}

.tech-description {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  font-size: var(--font-size-base);
}

/* Stack chips */
.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-sm);
}

.stack-chip {
  display: flex;
  flex-direction: column;
  gap: 1px;
  padding: var(--spacing-sm) var(--spacing-md);
  background: var(--color-bg-tertiary);
  border-radius: var(--radius-md);
  font-size: var(--font-size-xs);
}

.stack-chip strong {
  color: var(--color-text-primary);
  font-weight: var(--font-weight-semibold);
}

.stack-chip span {
  color: var(--color-text-tertiary);
}

/* Benefits */
.tech-benefits {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-sm);
}

.tech-benefits li {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-size-small);
  color: var(--color-text-secondary);
}

.benefit-check {
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

/* Responsive */
@media (max-width: 968px) {
  .tech-row,
  .tech-row.tech-reverse {
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

  .tech-title {
    font-size: var(--font-size-h4);
  }

  .visual-stats {
    gap: var(--spacing-sm);
  }

  .visual-stat {
    padding: var(--spacing-xs) var(--spacing-sm);
  }
}
</style>
