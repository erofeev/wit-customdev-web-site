<template>
  <div class="platform-page">
    <!-- Hero -->
    <section class="hero hero-small">
      <div class="container">
        <h1 class="hero-title">Платформа для быстрого старта проектов</h1>
        <p class="hero-subtitle">
          Не одно решение для всех, а модульная архитектура под каждую задачу
        </p>
        <div class="hero-philosophy">
          <p>
            Наша платформа — это набор готовых, мощных компонентов, которые позволяют быстро строить
            веб-системы любой сложности. Каждый компонент решает конкретную задачу,
            а комбинация компонентов дает неограниченные возможности.
          </p>
        </div>
      </div>
    </section>

    <!-- Architecture Diagram -->
    <section class="section section-dark">
      <div class="container">
        <h2 class="section-title text-center">Архитектура платформы: концепция "ЛЕГО"</h2>
        <p class="section-subtitle text-center">
          Модульная архитектура — собирайте систему как конструктор
        </p>
        <ArchitectureDiagram />
      </div>
    </section>

    <!-- Key Capabilities -->
    <section class="section">
      <div class="container">
        <h2 class="section-title text-center">Ключевые возможности</h2>
        <p class="section-subtitle text-center">
          14 мощных компонентов для построения современных систем
        </p>

        <div class="capabilities-list">
          <div
            v-for="(capability, index) in capabilities"
            :key="index"
            class="capability-item"
            :class="{ expanded: expandedIndex === index }"
          >
            <div class="capability-header" @click="toggleCapability(index)">
              <div class="capability-title-row">
                <div class="capability-number">{{ String(index + 1).padStart(2, '0') }}</div>
                <h3>{{ capability.title }}</h3>
              </div>
              <div class="capability-brief">{{ capability.brief }}</div>
              <button class="expand-btn" :aria-label="expandedIndex === index ? 'Свернуть' : 'Развернуть'">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  :style="{ transform: expandedIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }"
                >
                  <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </button>
            </div>

            <transition name="expand">
              <div v-if="expandedIndex === index" class="capability-details">
                <div class="detail-section" v-if="capability.technical">
                  <h4>Технически:</h4>
                  <p>{{ capability.technical }}</p>
                </div>

                <div class="detail-section" v-if="capability.simple">
                  <h4>Простыми словами:</h4>
                  <p>{{ capability.simple }}</p>
                </div>

                <div class="detail-section" v-if="capability.benefits">
                  <h4>Преимущества для клиента:</h4>
                  <ul class="benefits-list">
                    <li v-for="(benefit, idx) in capability.benefits" :key="idx">{{ benefit }}</li>
                  </ul>
                </div>

                <div class="detail-section" v-if="capability.useCases">
                  <h4>Когда использовать:</h4>
                  <ul class="use-cases-list">
                    <li v-for="(useCase, idx) in capability.useCases" :key="idx">{{ useCase }}</li>
                  </ul>
                </div>

                <div v-if="capability.example" class="detail-section example-box">
                  <h4>Пример:</h4>
                  <p class="example-text">{{ capability.example }}</p>
                </div>

                <div class="detail-section" v-if="capability.scenarios">
                  <h4>Реальные сценарии:</h4>
                  <div v-for="(scenario, idx) in capability.scenarios" :key="idx" class="scenario-box">
                    <strong>{{ scenario.title }}</strong>
                    <p>{{ scenario.description }}</p>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Real Example -->
    <section class="section section-dark">
      <div class="container">
        <h2 class="section-title text-center">Как это работает вместе</h2>
        <div class="example-card card-glass">
          <h3>Пример: Сервис для управления поставками</h3>

          <div class="example-components">
            <h4>Компоненты:</h4>
            <div class="component-tags">
              <span class="tag">Assets Service</span>
              <span class="tag">Графовая БД</span>
              <span class="tag">BPM для автоматизации</span>
              <span class="tag">Микросервисы</span>
            </div>
          </div>

          <div class="example-process">
            <h4>Процесс:</h4>
            <ol class="process-steps">
              <li>Приход новой партии → событие</li>
              <li>Процесс оценки качества и распределения</li>
              <li>Уведомления по готовности</li>
              <li>Запросы к поставщикам через связи</li>
              <li>Права: менеджер видит цены, кладовщик — склад</li>
            </ol>
          </div>

          <div class="example-result">
            <h4>Результат:</h4>
            <p>Автоматизация цепочки, полный контроль и быстрая загрузка.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison -->
    <section class="section">
      <div class="container">
        <h2 class="section-title text-center">Сравнение с аналогами</h2>
        <div class="comparison-table">
          <div class="comparison-header">
            <div></div>
            <div>Обычные CMS/CRM</div>
            <div>Наша платформа</div>
          </div>

          <div v-for="(row, index) in comparisonData" :key="index" class="comparison-row">
            <div class="comparison-label">{{ row.label }}</div>
            <div class="comparison-value negative">{{ row.others }}</div>
            <div class="comparison-value positive">{{ row.ours }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="section section-dark">
      <div class="container">
        <h2 class="section-title text-center">Преимущества для быстрого старта</h2>
        <div class="grid grid-3">
          <div class="benefit-card card-glass">
            <div class="benefit-icon">⚡</div>
            <h3>Прототипирование за дни</h3>
            <ul>
              <li>Готовые компоненты</li>
              <li>Изменения схемы в runtime</li>
              <li>Без лишней архитектуры на старте</li>
            </ul>
          </div>

          <div class="benefit-card card-glass">
            <div class="benefit-icon">📈</div>
            <h3>Масштабная готовность</h3>
            <ul>
              <li>Сложные связи и высокие нагрузки</li>
              <li>Микросервисы, нужные на старте</li>
              <li>Горизонтальное масштабирование</li>
            </ul>
          </div>

          <div class="benefit-card card-glass">
            <div class="benefit-icon">🎯</div>
            <h3>Гибкость без потери качества</h3>
            <ul>
              <li>Меняем бизнес-логику быстро</li>
              <li>Процессы и права без переработки</li>
              <li>Технологический стек расширяется</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="cta-box card-glass">
          <h2>Попробуйте платформу</h2>
          <p>Получите демо-доступ и оцените возможности</p>
          <RouterLink to="/contact" class="btn btn-primary btn-lg">Запросить демо</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import ArchitectureDiagram from '@/components/ArchitectureDiagram.vue'

const expandedIndex = ref<number | null>(null)

const toggleCapability = (index: number) => {
  expandedIndex.value = expandedIndex.value === index ? null : index
}

const capabilities = [
  {
    title: 'Графовая база данных для сложных связей',
    brief: 'Быстрые запросы по 5+ связям между сущностями',
    technical: 'Используем графовую базу данных там, где у сущностей 5+ связей или нужна гибкость',
    simple: 'В отличие от обычных баз, где данные в таблицах, здесь все связано как сеть. Пользователь → заказ → товары → склады → поставщики. Запросы проходят быстрее.',
    benefits: [
      'Запросы по сложным связям выполняются быстро',
      'Масштабируется при росте связей',
      'Можно представить любую бизнес-модель',
      'Готово для рекомендаций, аналитики и поиска'
    ],
    useCases: [
      'CRM (клиенты-компании-контакты-сделки)',
      'Каталоги товаров с кросс-линейками',
      'Социальные сети и рекомендации',
      'Знаниевые системы'
    ],
    example: 'В CRM, вместо 10 таблиц и джойнов, вся история в одном запросе.'
  },
  {
    title: 'Трехуровневая система прав',
    brief: 'Группы + роли + права на поля',
    technical: 'Комбинированная модель прав — пользователь получает доступ из нескольких источников одновременно',
    simple: 'Система собирает ВСЕ права из всех источников и применяет их одновременно. Роли, группы доступа и индивидуальные права на поля.',
    benefits: [
      'Максимальная гибкость — комбинируем права из разных источников',
      'Точная настройка — права до уровня отдельных полей',
      'Масштабируемость — легко добавлять роли и группы',
      'Соответствие требованиям (152-ФЗ, GDPR)',
      'Audit trail — полная история изменений прав'
    ],
    scenarios: [
      {
        title: 'Менеджер с разными правами в филиалах',
        description: 'Роль "Руководитель продаж" + группы "Московский филиал" и "Нижегородский филиал". Видит заказы только в этих филиалах, может менять цены.'
      },
      {
        title: 'Бухгалтер с ограничениями',
        description: 'Видит суммы, даты, контрагентов, но НЕ видит контакты клиентов (защита персональных данных).'
      }
    ],
    useCases: [
      'Медицина — врач видит своих пациентов, но не личные контакты',
      'Финансы — бухгалтер видит суммы, но не клиентские ПД',
      'Франчайзинг — каждая точка работает только со своими данными'
    ]
  },
  {
    title: 'Assets Service — работа со схемой в реальном времени',
    brief: 'Изменяем схему и поля на лету без остановки',
    technical: 'Отдельный сервис для работы с сущностями: изменяем схему и поля на лету без остановки',
    simple: 'Добавляем новые поля и сущности по API без остановки, без миграций. Например, хотим поле "скидка" — создали его и оно доступно.',
    benefits: [
      'Меньше перерывов в работе',
      'Быстрый запуск MVP с доработкой по ходу',
      'Плавное развитие без переписывания',
      'Готовность к быстрым изменениям'
    ],
    example: 'Сайт запущен, покупатели спрашивают про размер. Добавляем поле и начинаем записывать за 15 минут без простоев. Аналогов мало — вендоры требуют остановку, мы меняем в онлайн.'
  },
  {
    title: 'Мониторинг и observability',
    brief: 'Полная видимость работы системы в реальном времени',
    technical: 'Grafana для метрик, ELK для логов, Jaeger для трейсинга',
    simple: 'Видите в реальном времени: количество запросов, время отклика, активные пользователи, использование ресурсов.',
    benefits: [
      'Своевременная реакция на проблемы',
      'Видимость о работе в реальном времени',
      'Анализ для оптимизации процессов',
      'Соответствие аудитам'
    ]
  },
  {
    title: 'Контейнеризация и кластеризация',
    brief: 'Docker + Kubernetes для масштабирования',
    technical: 'Docker + Kubernetes/Swarm',
    simple: 'Упаковываем части системы в контейнеры, разворачиваем и масштабируем по мере нагрузки.',
    benefits: [
      'Стабильная работа',
      'Автомасштабирование',
      'Обновления без простоя',
      'Экономия ресурсов',
      'Быстрое разворачивание окружения'
    ],
    example: 'Переход от Docker Swarm к Kubernetes без переписывания при росте нагрузки.'
  },
  {
    title: 'Умное многоуровневое кэширование',
    brief: 'Browser → CDN → Application → Query cache',
    technical: '4 уровня кэширования: Browser, CDN, Application (Redis), Query cache',
    simple: 'Данные кэшируются на нескольких уровнях для максимальной скорости отдачи.',
    benefits: [
      'Быстрая отдача для пользователей',
      'Меньше нагрузка на БД',
      'Снижение расходов на серверы',
      'Готовность к пиковым дням'
    ]
  },
  {
    title: 'True микросервисы',
    brief: 'Service Discovery, Load Balancing, Circuit Breaker',
    technical: 'Полноценная микросервисная архитектура с продвинутыми возможностями',
    simple: 'Система делится на независимые части: один ломается — остальные работают.',
    benefits: [
      'Отказоустойчивость',
      'Масштабирование отдельных частей',
      'Быстрые релизы и откаты',
      'Команды работают независимо',
      'Разные технологии в одном проекте'
    ]
  },
  {
    title: 'Поддержка разных баз данных',
    brief: 'GraphDB, PostgreSQL, MongoDB, Redis, Elasticsearch',
    simple: 'Используем разные БД по назначению: графы для рекомендаций, SQL для аналитики, кэш и поиск по необходимости.',
    benefits: [
      'Оптимальная производительность',
      'Бережем бюджет',
      'Используем сильные стороны каждого подхода'
    ]
  },
  {
    title: 'Монорепозиторий (Monorepo)',
    brief: 'Весь код в одном репозитории',
    benefits: [
      'Единая структура проекта',
      'Легче влиять на связанные модули',
      'Общие компоненты без дублирования',
      'Можно чинить баги сразу по всем модулям',
      'Проще рефакторинг'
    ]
  },
  {
    title: 'Интегрированный BPM',
    brief: 'Автоматизация бизнес-процессов',
    technical: 'Встроенная подсистема процессов на базе Camunda',
    simple: 'Автоматизация процессов — от создания карточки до уведомлений.',
    benefits: [
      'Автоматизация рутинных задач',
      'Меньше ошибок и контроль исполнения',
      'Гибкая настройка процессов',
      'Готовность к аудитам'
    ],
    example: 'При создании заказа автоматически уведомляется отдел доставки. Аналогов немного — вендоры требуют отдельную систему и глубокую интеграцию.'
  },
  {
    title: 'Логирование и аудит',
    brief: 'Application, Access, Security, Performance logs',
    simple: 'Многоуровневое логирование: что делает система, кто и что запрашивал, подозрительная активность, узкие места.',
    benefits: [
      'Рост доверия к системе',
      'Быстрая диагностика проблем',
      'Готовность к аудитам',
      'История для споров'
    ]
  },
  {
    title: 'Метрики производительности',
    brief: 'Response time, Throughput, Error rate, Resource usage',
    simple: 'Отслеживаем: время отклика, количество запросов, процент ошибок, использование ресурсов.',
    benefits: [
      'Оптимизация производительности',
      'Алерты при деградации',
      'Данные для capacity planning'
    ]
  },
  {
    title: 'Полиглот: микросервисы на разных языках',
    brief: 'JavaScript, Python, Java, Go, .NET',
    simple: 'Можем использовать разные языки для разных сервисов.',
    benefits: [
      'Удобные языки для команды',
      'Быстрая интеграция с новыми компонентами',
      'Фокус на бизнес-логике',
      'Легче поддерживать существующий стек'
    ],
    example: 'Клиент с PHP-командой может нарастить функционал на PHP в той же системе.'
  },
  {
    title: 'Frontend на современных фреймворках',
    brief: 'Angular, React, Vue — выбираем под задачу',
    simple: 'Используем современные фреймворки: Angular для enterprise, React для гибкости, Vue для скорости разработки.',
    benefits: [
      'Производительность и SEO',
      'Продуманный UX/UI',
      'Готовность к росту команды',
      'Простая поддержка и модификации'
    ]
  }
]

const comparisonData = [
  {
    label: 'Изменения схемы данных',
    others: 'Нужна остановка',
    ours: 'Runtime без простоев'
  },
  {
    label: 'Права доступа',
    others: 'Таблицы/роли',
    ours: 'До уровня полей'
  },
  {
    label: 'Автоматизация процессов',
    others: 'Дорогие интеграции',
    ours: 'Встроенная'
  },
  {
    label: 'Масштабирование',
    others: 'Ограничения',
    ours: 'Безлимитное'
  },
  {
    label: 'Поддержка технологий',
    others: 'Один стек',
    ours: 'Полиглот'
  },
  {
    label: 'Добавление модулей',
    others: 'Плагины с ограничениями',
    ours: 'Любой микросервис'
  },
  {
    label: 'Кэширование',
    others: 'Базовое',
    ours: 'Многоуровневое'
  },
  {
    label: 'Разные БД',
    others: 'Только SQL',
    ours: 'По задаче'
  }
]
</script>

<style scoped>
/* Hero philosophy */
.hero-philosophy {
  max-width: 800px;
  margin: var(--spacing-2xl) auto 0;
  text-align: center;
}

.hero-philosophy p {
  font-size: var(--font-size-large);
  line-height: var(--line-height-relaxed);
  color: var(--color-text-secondary);
}

/* Capabilities List */
.capabilities-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-2xl);
}

.capability-item {
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  border: 2px solid var(--color-bg-tertiary);
  transition: all var(--transition-base);
  overflow: hidden;
}

.capability-item.expanded {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-lg);
}

.capability-header {
  padding: var(--spacing-xl);
  cursor: pointer;
  position: relative;
  transition: background var(--transition-fast);
}

.capability-header:hover {
  background: var(--color-bg-secondary);
}

.capability-title-row {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-sm);
}

.capability-number {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  font-family: var(--font-family-heading);
  min-width: 50px;
}

.capability-header h3 {
  margin: 0;
  color: var(--color-text-primary);
}

.capability-brief {
  color: var(--color-text-secondary);
  margin-left: 66px;
  padding-right: 50px;
}

.expand-btn {
  position: absolute;
  top: 50%;
  right: var(--spacing-xl);
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--color-primary);
  cursor: pointer;
  padding: var(--spacing-sm);
  transition: all var(--transition-base);
}

.expand-btn svg {
  display: block;
  transition: transform var(--transition-base);
}

/* Capability Details */
.capability-details {
  padding: 0 var(--spacing-xl) var(--spacing-xl);
  padding-left: 66px;
}

.detail-section {
  margin-bottom: var(--spacing-lg);
}

.detail-section:last-child {
  margin-bottom: 0;
}

.detail-section h4 {
  color: var(--color-text-secondary);
  font-size: var(--font-size-small);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: var(--spacing-sm);
  font-weight: var(--font-weight-semibold);
}

.detail-section p {
  color: var(--color-text-primary);
  line-height: var(--line-height-relaxed);
  margin: 0;
}

.benefits-list,
.use-cases-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-sm);
}

.benefits-list li,
.use-cases-list li {
  padding-left: var(--spacing-lg);
  position: relative;
  color: var(--color-text-secondary);
}

.benefits-list li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-success);
  font-weight: var(--font-weight-bold);
}

.use-cases-list li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-accent);
}

.example-box {
  background: var(--color-primary-ultra-light);
  padding: var(--spacing-lg);
  border-radius: var(--radius-md);
  border-left: 4px solid var(--color-primary);
}

.example-text {
  font-style: italic;
  color: var(--color-text-secondary);
}

.scenario-box {
  background: var(--color-bg-secondary);
  padding: var(--spacing-md);
  border-radius: var(--radius-sm);
  margin-bottom: var(--spacing-sm);
}

.scenario-box strong {
  display: block;
  color: var(--color-primary);
  margin-bottom: var(--spacing-xs);
}

.scenario-box p {
  margin: 0;
  color: var(--color-text-secondary);
  font-size: var(--font-size-small);
}

/* Expand transition */
.expand-enter-active,
.expand-leave-active {
  transition: all 0.3s ease;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  max-height: 0;
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  max-height: 2000px;
}

/* Example Card */
.example-card {
  padding: var(--spacing-3xl);
}

.example-card h3 {
  margin-bottom: var(--spacing-xl);
}

.example-card h4 {
  color: var(--color-text-secondary);
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-md);
}

.example-components,
.example-process,
.example-result {
  margin-bottom: var(--spacing-xl);
}

.component-tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.tag {
  background: var(--color-primary-ultra-light);
  color: var(--color-primary);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-medium);
}

.process-steps {
  padding-left: var(--spacing-xl);
  margin: 0;
}

.process-steps li {
  padding: var(--spacing-sm) 0;
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

.example-result p {
  font-size: var(--font-size-large);
  color: var(--color-text-primary);
  font-weight: var(--font-weight-medium);
  margin: 0;
}

/* Comparison Table */
.comparison-table {
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.comparison-header {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  background: var(--gradient-dark);
  color: var(--color-text-inverse);
  font-weight: var(--font-weight-semibold);
  padding: var(--spacing-lg);
}

.comparison-header div {
  padding: 0 var(--spacing-md);
  text-align: center;
}

.comparison-header div:first-child {
  text-align: left;
}

.comparison-row {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  border-bottom: 1px solid var(--color-bg-tertiary);
  padding: var(--spacing-md);
  transition: background var(--transition-fast);
}

.comparison-row:hover {
  background: var(--color-bg-secondary);
}

.comparison-row:last-child {
  border-bottom: none;
}

.comparison-label {
  padding: 0 var(--spacing-md);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
}

.comparison-value {
  padding: 0 var(--spacing-md);
  text-align: center;
  font-size: var(--font-size-small);
}

.comparison-value.negative {
  color: var(--color-error);
}

.comparison-value.positive {
  color: var(--color-success);
  font-weight: var(--font-weight-medium);
}

/* Benefit Cards */
.benefit-card {
  padding: var(--spacing-2xl);
  text-align: center;
}

.benefit-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
}

.benefit-card h3 {
  margin-bottom: var(--spacing-lg);
}

.benefit-card ul {
  list-style: none;
  text-align: left;
  margin: 0;
  padding: 0;
}

.benefit-card li {
  padding: var(--spacing-xs) 0;
  padding-left: var(--spacing-lg);
  position: relative;
  color: var(--color-text-secondary);
  font-size: var(--font-size-small);
}

.benefit-card li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-accent);
}

/* CTA Box */
.cta-box {
  text-align: center;
  padding: var(--spacing-4xl);
  max-width: 700px;
  margin: 0 auto;
}

.cta-box h2 {
  margin-bottom: var(--spacing-md);
}

.cta-box p {
  font-size: var(--font-size-large);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
}

.btn-lg {
  padding: var(--spacing-lg) var(--spacing-2xl);
  font-size: var(--font-size-large);
}

/* Responsive */
@media (max-width: 968px) {
  .capability-brief {
    margin-left: 0;
    margin-top: var(--spacing-sm);
  }

  .capability-details {
    padding-left: var(--spacing-xl);
  }

  .comparison-header,
  .comparison-row {
    grid-template-columns: 1.5fr 1fr 1fr;
  }

  .comparison-label,
  .comparison-value {
    font-size: var(--font-size-small);
  }
}

@media (max-width: 640px) {
  .capability-title-row {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-sm);
  }

  .comparison-table {
    font-size: var(--font-size-xs);
  }

  .comparison-header,
  .comparison-row {
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xs);
  }

  .comparison-label {
    grid-column: 1 / -1;
    padding-bottom: var(--spacing-xs);
    border-bottom: 1px solid var(--color-bg-tertiary);
  }

  .benefit-card ul {
    text-align: center;
  }

  .benefit-card li {
    padding-left: 0;
  }

  .benefit-card li::before {
    display: none;
  }
}
</style>
