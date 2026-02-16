<template>
  <div class="cases-page">
    <section class="hero hero-small">
      <div class="container">
        <h1 class="hero-title">Кейсы и проекты</h1>
        <p class="hero-subtitle">Реальные примеры наших работ</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="cases-list">
          <div v-for="(caseItem, index) in cases" :key="index" class="case-card card">
            <div class="case-header">
              <div>
                <h2>{{ caseItem.title }}</h2>
                <p class="case-client">{{ caseItem.client }}</p>
              </div>
              <div class="case-category">{{ caseItem.category }}</div>
            </div>

            <div class="case-task">
              <h4>Задача:</h4>
              <p>{{ caseItem.task }}</p>
            </div>

            <div class="case-tech">
              <h4>Технологии:</h4>
              <div class="tech-tags">
                <span v-for="(tech, idx) in caseItem.technologies" :key="idx" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
            </div>

            <div class="case-results">
              <h4>Результаты:</h4>
              <ul>
                <li v-for="(result, idx) in caseItem.results" :key="idx">{{ result }}</li>
              </ul>
            </div>

            <div class="case-footer">
              <div class="case-meta">
                <div class="meta-item">
                  <span class="meta-label">Бюджет:</span>
                  <span class="meta-value">{{ caseItem.budget }}</span>
                </div>
                <div class="meta-item">
                  <span class="meta-label">Срок:</span>
                  <span class="meta-value">{{ caseItem.duration }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section section-dark">
      <div class="container text-center">
        <h2 class="section-title">Хотите похожий проект?</h2>
        <p class="section-subtitle">Расскажите о вашей задаче, и мы предложим решение</p>
        <RouterLink to="/contact" class="btn btn-primary">Обсудить проект</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

const cases = [
  {
    title: 'Интернет-магазин автозапчастей',
    client: 'АвтоСнаб (федеральная сеть)',
    category: 'E-commerce',
    task: 'Каталог 100 000+ товаров, поиск по VIN-коду, интеграция с 15+ поставщиками, доставка по всей России',
    technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Elasticsearch', 'Redis'],
    results: [
      'Поиск товара < 200 мс (было 5-10 секунд)',
      'Автоматическая синхронизация цен',
      'Снижение ручной работы на 60%',
      'Увеличение конверсии на 35%'
    ],
    budget: 'от 1 500 000 ₽',
    duration: '2 месяца'
  },
  {
    title: 'CRM для управляющей компании',
    client: 'УК "Комфорт"',
    category: 'CRM / ЖКХ',
    task: 'Учет жильцов и договоров, начисление ЖКУ, прием заявок, управление бригадами, интеграция с ГИС ЖКХ',
    technologies: ['Angular', 'Moleculer', 'DGraph', 'React Native', 'Camunda'],
    results: [
      'Время обработки заявок: с 2 дней до 2 часов',
      'Автоматизация начислений (0% ручной работы)',
      'Интеграция с ГИС ЖКХ за 2 недели',
      'Рост удовлетворенности на 40%'
    ],
    budget: 'от 3 000 000 ₽',
    duration: '5 месяцев'
  },
  {
    title: 'Маркетплейс строительных материалов',
    client: 'СтройМаркет',
    category: 'Marketplace',
    task: 'Платформа для продавцов и покупателей, каталог 500 000+ позиций, сложная система скидок',
    technologies: ['Vue.js', 'Nuxt.js', 'Python', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Elasticsearch'],
    results: [
      'Поддержка 10 000+ одновременных пользователей',
      'Поиск < 100 мс по 500 000+ товаров',
      'Время загрузки < 1 сек',
      '300+ продавцов за 3 месяца'
    ],
    budget: 'от 5 000 000 ₽',
    duration: '6 месяцев'
  },
  {
    title: 'Финтех платформа для микрофинансирования',
    client: 'МКК "Быстрозайм"',
    category: 'Fintech',
    task: 'Платформа для выдачи микрозаймов, скоринг, интеграция с БКИ, автоматизация процесса',
    technologies: ['React', 'Java', 'Spring Boot', 'PostgreSQL', 'NATS', 'Kubernetes'],
    results: [
      'Обработка заявки < 5 минут (было 2-3 часа)',
      'Автоматическое решение в 80% случаев',
      'SLA 99.95%',
      'Обработка 50 000+ заявок/месяц'
    ],
    budget: 'от 8 000 000 ₽',
    duration: '9 месяцев'
  }
]
</script>

<style scoped>
.cases-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xl);
}

.case-card {
  padding: var(--spacing-2xl);
}

.case-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-lg);
  border-bottom: 2px solid var(--color-primary-ultra-light);
}

.case-card h2 {
  margin-bottom: var(--spacing-sm);
}

.case-client {
  color: var(--color-text-secondary);
  font-size: var(--font-size-small);
}

.case-category {
  background: var(--color-primary-ultra-light);
  color: var(--color-primary);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  white-space: nowrap;
}

.case-task,
.case-tech,
.case-results {
  margin-bottom: var(--spacing-lg);
}

.case-task h4,
.case-tech h4,
.case-results h4 {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
}

.case-task p {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: 0;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.tech-tag {
  background: var(--color-bg-tertiary);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
  color: var(--color-text-secondary);
}

.case-results ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-sm);
}

.case-results li {
  padding-left: var(--spacing-lg);
  position: relative;
  color: var(--color-text-secondary);
  font-size: var(--font-size-small);
}

.case-results li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-success);
  font-weight: var(--font-weight-bold);
}

.case-footer {
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--color-bg-tertiary);
}

.case-meta {
  display: flex;
  gap: var(--spacing-2xl);
}

.meta-item {
  display: flex;
  gap: var(--spacing-sm);
}

.meta-label {
  color: var(--color-text-tertiary);
  font-size: var(--font-size-small);
}

.meta-value {
  color: var(--color-text-primary);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-small);
}

@media (max-width: 768px) {
  .case-header {
    flex-direction: column;
    gap: var(--spacing-md);
  }

  .case-category {
    align-self: flex-start;
  }

  .case-results ul {
    grid-template-columns: 1fr;
  }

  .case-meta {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
}
</style>
