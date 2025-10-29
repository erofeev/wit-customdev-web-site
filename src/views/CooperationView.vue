<template>
  <div class="cooperation-page">
    <section class="hero hero-small">
      <div class="container">
        <h1 class="hero-title">Модели сотрудничества</h1>
        <p class="hero-subtitle">Выберите формат работы, который подходит именно вам</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="models-grid">
          <div v-for="(model, index) in models" :key="index" class="model-card card-glass">
            <div class="model-badge">{{ model.badge }}</div>
            <h2>{{ model.title }}</h2>
            <p class="model-subtitle">{{ model.subtitle }}</p>

            <div class="model-pricing">
              <div class="price-item">
                <span class="price-label">Разработка:</span>
                <span class="price-value">{{ model.devCost }}</span>
              </div>
              <div v-if="model.monthlyCost" class="price-item">
                <span class="price-label">Ежемесячно:</span>
                <span class="price-value">{{ model.monthlyCost }}</span>
              </div>
            </div>

            <div class="model-includes">
              <h4>Что входит:</h4>
              <ul>
                <li v-for="(item, idx) in model.includes" :key="idx">{{ item }}</li>
              </ul>
            </div>

            <div class="model-benefits">
              <h4>Преимущества:</h4>
              <ul>
                <li v-for="(benefit, idx) in model.benefits" :key="idx">{{ benefit }}</li>
              </ul>
            </div>

            <div class="model-for">
              <strong>Для кого:</strong> {{ model.forWhom }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container text-center">
        <h2 class="section-title">Не уверены, какая модель подойдет?</h2>
        <p class="section-subtitle">Мы поможем выбрать оптимальный вариант сотрудничества</p>
        <RouterLink to="/contact" class="btn btn-primary">Обсудить условия</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const models = [
  {
    badge: 'Популярный',
    title: 'Разработка с подпиской',
    subtitle: 'Разработка + ежемесячная поддержка',
    devCost: 'от 300 000 ₽',
    monthlyCost: 'от 30 000 ₽/мес',
    includes: [
      'Хостинг на наших серверах',
      'Техническая поддержка 24/7',
      'Обновления безопасности',
      'Резервное копирование',
      'Мониторинг и устранение сбоев',
      'Мелкие доработки (до 10 часов/мес)'
    ],
    benefits: [
      'Предсказуемые расходы',
      'Полная техническая поддержка',
      'Быстрое внедрение изменений',
      'Система всегда актуальна'
    ],
    forWhom: 'Компании без собственного IT-отдела'
  },
  {
    badge: 'Свобода',
    title: 'Передача кода',
    subtitle: 'Полное владение исходным кодом',
    devCost: 'от 800 000 ₽',
    monthlyCost: null,
    includes: [
      'Полный исходный код',
      'Техническая документация',
      'Инструкции по развертыванию',
      '3 месяца гарантийной поддержки',
      'Обучение вашей команды'
    ],
    benefits: [
      'Полный контроль над системой',
      'Возможность любых модификаций',
      'Независимость от разработчика',
      'Код — ваш актив'
    ],
    forWhom: 'Компании с собственным IT-отделом'
  },
  {
    badge: 'Для партнеров',
    title: 'Лицензирование',
    subtitle: 'Платформа для ваших проектов',
    devCost: 'от 500 000 ₽',
    monthlyCost: null,
    includes: [
      'Исходный код платформы',
      'Право использования в коммерческих проектах',
      'Техническая документация',
      'Обучение команды',
      'Консультационная поддержка'
    ],
    benefits: [
      'Быстрый старт проектов',
      'Готовая инфраструктура',
      'Проверенные решения',
      'Техническая поддержка'
    ],
    forWhom: 'IT-компании и системные интеграторы'
  }
]
</script>

<style scoped>
.models-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: var(--spacing-xl);
}

.model-card {
  padding: var(--spacing-2xl);
  position: relative;
}

.model-badge {
  position: absolute;
  top: var(--spacing-lg);
  right: var(--spacing-lg);
  background: var(--gradient-accent);
  color: var(--color-text-inverse);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
}

.model-card h2 {
  margin-bottom: var(--spacing-sm);
}

.model-subtitle {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
}

.model-pricing {
  background: rgba(255, 255, 255, 0.05);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  margin-bottom: var(--spacing-lg);
}

.price-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-sm) 0;
}

.price-label {
  color: var(--color-text-secondary);
  font-size: var(--font-size-small);
}

.price-value {
  font-size: var(--font-size-large);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
}

.model-includes,
.model-benefits {
  margin-bottom: var(--spacing-lg);
}

.model-includes h4,
.model-benefits h4 {
  margin-bottom: var(--spacing-md);
  font-size: var(--font-size-base);
}

.model-includes ul,
.model-benefits ul {
  list-style: none;
}

.model-includes li,
.model-benefits li {
  padding: var(--spacing-xs) 0;
  padding-left: var(--spacing-lg);
  position: relative;
  font-size: var(--font-size-small);
  color: var(--color-text-secondary);
}

.model-includes li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-success);
}

.model-benefits li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-accent);
}

.model-for {
  padding-top: var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: var(--font-size-small);
  color: var(--color-text-secondary);
}

.model-for strong {
  color: var(--color-text-primary);
}

@media (max-width: 768px) {
  .models-grid {
    grid-template-columns: 1fr;
  }
}
</style>
