<template>
  <div class="cooperation-page">
    <!-- Hero -->
    <section class="hero hero-small">
      <div class="container">
        <span class="hero-badge">Форматы работы</span>
        <h1 class="hero-title">Модели сотрудничества</h1>
        <p class="hero-subtitle">
          Четыре формата работы — от полного погружения до точечного усиления вашей команды.
          Подберём модель под ваш бюджет, сроки и уровень контроля.
        </p>
      </div>
    </section>

    <!-- Quick Selector -->
    <section class="section">
      <div class="container">
        <h2 class="section-title text-center">С чего начать?</h2>
        <p class="section-subtitle text-center">Опишите свою ситуацию — мы подскажем формат</p>
        <div class="selector-grid">
          <button
            v-for="(scenario, idx) in scenarios"
            :key="idx"
            class="selector-card card-glass"
            :class="{ 'selector-active': activeModel === scenario.model }"
            @click="scrollToModel(scenario.model)"
          >
            <span class="selector-icon">{{ scenario.icon }}</span>
            <span class="selector-question">{{ scenario.question }}</span>
            <span class="selector-answer">{{ scenario.answer }}</span>
          </button>
        </div>
      </div>
    </section>

    <!-- Models -->
    <section class="section section-alt">
      <div class="container">
        <h2 class="section-title text-center">Форматы работы</h2>
        <p class="section-subtitle text-center" style="margin-bottom: var(--spacing-3xl)">
          Каждый формат адаптируется под конкретный проект
        </p>

        <div
          v-for="(model, idx) in models"
          :key="idx"
          :id="model.id"
          class="model-block"
          :class="{ 'model-reverse': idx % 2 !== 0 }"
        >
          <div class="model-info">
            <div class="model-header">
              <span class="model-number">0{{ idx + 1 }}</span>
              <div>
                <h3 class="model-name">{{ model.title }}</h3>
                <p class="model-tagline">{{ model.tagline }}</p>
              </div>
            </div>

            <p class="model-description">{{ model.description }}</p>

            <div class="model-params">
              <div class="param" v-for="(param, pidx) in model.params" :key="pidx">
                <span class="param-label">{{ param.label }}</span>
                <span class="param-value">{{ param.value }}</span>
              </div>
            </div>

            <div class="model-when">
              <h4>Когда подходит</h4>
              <ul>
                <li v-for="(item, iidx) in model.when" :key="iidx">{{ item }}</li>
              </ul>
            </div>
          </div>

          <div class="model-details card-glass">
            <div class="model-includes">
              <h4>Что входит</h4>
              <ul>
                <li v-for="(item, iidx) in model.includes" :key="iidx">{{ item }}</li>
              </ul>
            </div>

            <div class="model-process">
              <h4>Как работаем</h4>
              <ol>
                <li v-for="(step, sidx) in model.process" :key="sidx">{{ step }}</li>
              </ol>
            </div>

            <div class="model-example" v-if="model.example">
              <h4>Пример</h4>
              <p>{{ model.example }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Comparison Table -->
    <section class="section">
      <div class="container">
        <h2 class="section-title text-center">Сравнение моделей</h2>
        <p class="section-subtitle text-center" style="margin-bottom: var(--spacing-3xl)">
          Ключевые параметры для выбора формата
        </p>

        <div class="table-wrapper card-glass">
          <table class="compare-table">
            <thead>
              <tr>
                <th>Критерий</th>
                <th v-for="model in models" :key="model.id">{{ model.shortTitle }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, ridx) in comparisonRows" :key="ridx">
                <td class="criteria-cell">{{ row.criteria }}</td>
                <td v-for="(val, vidx) in row.values" :key="vidx" v-html="val"></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Guarantees -->
    <section class="section section-alt">
      <div class="container">
        <h2 class="section-title text-center">Гарантии при любом формате</h2>
        <p class="section-subtitle text-center" style="margin-bottom: var(--spacing-3xl)">
          Стандарты, которые мы соблюдаем вне зависимости от модели
        </p>
        <div class="guarantees-grid">
          <div v-for="(g, gidx) in guarantees" :key="gidx" class="guarantee-card card-glass">
            <span class="guarantee-icon">{{ g.icon }}</span>
            <h4>{{ g.title }}</h4>
            <p>{{ g.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section section-dark">
      <div class="container text-center">
        <h2 class="section-title">Не уверены, какой формат подойдёт?</h2>
        <p class="section-subtitle" style="max-width: 540px; margin: 0 auto var(--spacing-xl)">
          Расскажите о проекте — мы предложим модель, которая закроет ваши задачи
          и уложится в бюджет.
        </p>
        <RouterLink to="/contact" class="btn btn-primary btn-lg">Обсудить проект</RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const activeModel = ref('')

const scrollToModel = (id: string) => {
  activeModel.value = id
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

const scenarios = [
  {
    icon: '👥',
    question: 'Нужна целая команда на проект',
    answer: 'Выделенная команда',
    model: 'dedicated-team'
  },
  {
    icon: '⏱',
    question: 'Требования ещё формируются',
    answer: 'Time & Materials',
    model: 'time-materials'
  },
  {
    icon: '📋',
    question: 'Чёткое ТЗ, фиксированный бюджет',
    answer: 'Фиксированный проект',
    model: 'fixed-price'
  },
  {
    icon: '🔧',
    question: 'Есть команда, не хватает людей',
    answer: 'Аутстаффинг',
    model: 'outstaffing'
  }
]

const models = [
  {
    id: 'dedicated-team',
    title: 'Выделенная команда',
    shortTitle: 'Команда',
    tagline: 'Ваша команда — наша ответственность',
    description:
      'Формируем команду под проект: аналитики, разработчики, тестировщики, DevOps. Команда работает только на вас, погружается в бизнес-контекст и становится продолжением вашего отдела.',
    params: [
      { label: 'Срок', value: 'от 3 месяцев' },
      { label: 'Команда', value: 'от 3 человек' },
      { label: 'Оплата', value: 'ежемесячно за команду' },
      { label: 'Управление', value: 'ваш PM или наш' }
    ],
    when: [
      'Долгосрочный проект с развивающимися требованиями',
      'Нужна полноценная продуктовая команда',
      'Важна глубокая экспертиза в домене',
      'Планируете масштабирование'
    ],
    includes: [
      'Подбор команды под стек и задачи',
      'Онбординг и погружение в домен',
      'Еженедельные демо и отчёты',
      'Ретроспективы и оптимизация процессов',
      'Доступ к репозиторию и CI/CD',
      'Замена специалистов при необходимости'
    ],
    process: [
      'Анализируем задачи и формируем состав команды',
      'Проводим онбординг: домен, процессы, инструменты',
      'Работаем спринтами по 2 недели с демо',
      'Масштабируем команду по мере роста проекта'
    ],
    example:
      'Финтех-стартап: команда из 6 человек (2 backend, 2 frontend, QA, DevOps) за 8 месяцев запустила платёжную платформу с нуля.'
  },
  {
    id: 'time-materials',
    title: 'Time & Materials',
    shortTitle: 'T&M',
    tagline: 'Гибкость без лишних обязательств',
    description:
      'Оплата за фактически затраченное время. Подходит, когда требования уточняются в процессе, а скоуп может меняться. Вы контролируете приоритеты — мы контролируем качество.',
    params: [
      { label: 'Срок', value: 'от 1 месяца' },
      { label: 'Команда', value: 'от 1 специалиста' },
      { label: 'Оплата', value: 'за часы/спринты' },
      { label: 'Гибкость', value: 'максимальная' }
    ],
    when: [
      'Требования формируются итеративно',
      'Нужно быстро стартовать и двигаться',
      'Скоуп проекта может расширяться',
      'Важна возможность менять приоритеты на лету'
    ],
    includes: [
      'Трекинг времени с детализацией по задачам',
      'Еженедельные отчёты о прогрессе',
      'Приоритизация бэклога совместно',
      'Code review и тестирование',
      'Прозрачный доступ к таск-трекеру',
      'Регулярные созвоны и синки'
    ],
    process: [
      'Согласуем ставки и состав команды',
      'Формируем бэклог и приоритеты',
      'Работаем спринтами, отчитываемся за каждый час',
      'Корректируем скоуп и приоритеты по ходу'
    ],
    example:
      'Логистическая компания: за 4 месяца разработали и запустили систему маршрутизации, по ходу проекта трижды пересматривали приоритеты фич.'
  },
  {
    id: 'fixed-price',
    title: 'Фиксированный проект',
    shortTitle: 'Fixed Price',
    tagline: 'Чёткий результат за согласованный бюджет',
    description:
      'Фиксируем скоуп, сроки и стоимость до старта. Проводим детальную аналитику, декомпозируем задачи — и гарантируем результат. Идеально, когда вы точно знаете, что хотите получить.',
    params: [
      { label: 'Срок', value: 'фиксированный' },
      { label: 'Бюджет', value: 'фиксированный' },
      { label: 'Скоуп', value: 'зафиксирован в ТЗ' },
      { label: 'Риски', value: 'на нашей стороне' }
    ],
    when: [
      'Есть чёткое техническое задание',
      'Бюджет утверждён и не должен меняться',
      'Нужен конкретный результат к определённой дате',
      'Проект ограничен по объёму'
    ],
    includes: [
      'Детальная аналитика и проектирование',
      'Техническое задание с декомпозицией',
      'Разработка с промежуточными приёмками',
      'Полное тестирование и документация',
      'Гарантийная поддержка 3 месяца',
      'Передача всех артефактов'
    ],
    process: [
      'Проводим аналитику и фиксируем ТЗ',
      'Согласуем стоимость и сроки',
      'Разрабатываем с промежуточными демо',
      'Сдаём проект, запускаем гарантийный период'
    ],
    example:
      'Медицинская клиника: за 3 месяца разработали портал записи пациентов с интеграцией в МИС — точно в срок и в рамках бюджета.'
  },
  {
    id: 'outstaffing',
    title: 'Аутстаффинг',
    shortTitle: 'Аутстаффинг',
    tagline: 'Нужные специалисты — без найма в штат',
    description:
      'Предоставляем специалистов, которые работают в вашей команде, по вашим процессам, на ваших инструментах. Вы управляете — мы обеспечиваем качество кадров.',
    params: [
      { label: 'Срок', value: 'от 3 месяцев' },
      { label: 'Специалисты', value: 'от 1 человека' },
      { label: 'Оплата', value: 'за специалиста/мес' },
      { label: 'Управление', value: 'на вашей стороне' }
    ],
    when: [
      'Нужно быстро усилить команду без долгого найма',
      'Требуется редкая экспертиза на конкретный период',
      'Свой процесс разработки, не хватает рук',
      'Пиковая нагрузка или параллельные проекты'
    ],
    includes: [
      'Подбор кандидатов под ваши требования',
      'Техническое собеседование на вашей стороне',
      'Оформление и администрирование',
      'Замена специалиста в течение 5 дней',
      'Менторинг и развитие специалиста',
      'Контроль качества работы'
    ],
    process: [
      'Описываете профиль: стек, грейд, задачи',
      'Предлагаем кандидатов за 3–5 рабочих дней',
      'Вы проводите собеседование и выбираете',
      'Специалист интегрируется в вашу команду'
    ],
    example:
      'Банк: за 2 недели вывели 3 senior-разработчиков на Go, которые закрыли критичный модуль за квартал.'
  }
]

const comparisonRows = [
  {
    criteria: 'Управление',
    values: ['Совместное', 'Совместное', 'Наше', 'Ваше']
  },
  {
    criteria: 'Гибкость скоупа',
    values: [
      '<strong>Высокая</strong>',
      '<strong>Максимальная</strong>',
      'Низкая',
      'Зависит от вас'
    ]
  },
  {
    criteria: 'Предсказуемость бюджета',
    values: ['Средняя', 'Низкая', '<strong>Максимальная</strong>', '<strong>Высокая</strong>']
  },
  {
    criteria: 'Скорость старта',
    values: ['2–3 недели', '3–5 дней', '2–4 недели', '1–2 недели']
  },
  {
    criteria: 'Погружение в домен',
    values: ['<strong>Глубокое</strong>', 'Среднее', 'Среднее', 'По задаче']
  },
  {
    criteria: 'Минимальный срок',
    values: ['3 месяца', '1 месяц', 'По проекту', '3 месяца']
  },
  {
    criteria: 'Лучше всего для',
    values: [
      'Продуктовая разработка',
      'R&D, стартапы',
      'Проект с ТЗ',
      'Усиление команды'
    ]
  }
]

const guarantees = [
  {
    icon: '📊',
    title: 'Прозрачность',
    text: 'Еженедельные отчёты, доступ к таск-трекеру и репозиторию. Вы всегда видите, на что уходит время и бюджет.'
  },
  {
    icon: '🔐',
    title: 'Код — ваш',
    text: 'Все права на исходный код принадлежат вам. Мы передаём репозиторий, документацию и артефакты.'
  },
  {
    icon: '📝',
    title: 'NDA с первого дня',
    text: 'Подписываем соглашение о неразглашении до начала работ. Ваши данные и идеи защищены.'
  },
  {
    icon: '🔄',
    title: 'Замена специалистов',
    text: 'Если специалист не подходит — заменим в течение 5 рабочих дней без потери прогресса.'
  },
  {
    icon: '📈',
    title: 'Метрики качества',
    text: 'Покрытие тестами, code review, CI/CD, мониторинг — стандарты качества зафиксированы в SLA.'
  },
  {
    icon: '👤',
    title: 'Один контакт',
    text: 'Выделенный менеджер проекта — единая точка входа по всем вопросам, от сроков до технических деталей.'
  }
]
</script>

<style scoped>
/* Hero badge */
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

/* Quick Selector */
.selector-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
  margin-top: var(--spacing-2xl);
}

.selector-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-xl) var(--spacing-lg);
  cursor: pointer;
  border: 2px solid transparent;
  transition: all var(--transition-base);
  text-align: center;
  font-family: var(--font-family-primary);
}

.selector-card:hover {
  border-color: var(--color-primary);
  transform: translateY(-2px);
}

.selector-active {
  border-color: var(--color-primary);
  background: var(--color-primary-ultra-light);
}

.selector-icon {
  font-size: 2rem;
}

.selector-question {
  font-size: var(--font-size-small);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

.selector-answer {
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  font-size: var(--font-size-base);
}

/* Model Blocks */
.model-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-4xl);
  align-items: start;
  scroll-margin-top: 100px;
}

.model-block.model-reverse {
  direction: rtl;
}

.model-block.model-reverse > * {
  direction: ltr;
}

.model-header {
  display: flex;
  gap: var(--spacing-lg);
  align-items: flex-start;
  margin-bottom: var(--spacing-lg);
}

.model-number {
  font-family: var(--font-family-heading);
  font-size: 2.5rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  opacity: 0.3;
  line-height: 1;
}

.model-name {
  font-size: var(--font-size-h3);
  margin-bottom: var(--spacing-xs);
}

.model-tagline {
  color: var(--color-text-tertiary);
  font-size: var(--font-size-small);
  font-style: italic;
}

.model-description {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-xl);
}

/* Params */
.model-params {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
}

.param {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: var(--spacing-md);
  background: rgba(10, 132, 255, 0.04);
  border-radius: var(--radius-md);
  border-left: 3px solid var(--color-primary);
}

.param-label {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.param-value {
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-primary);
  font-size: var(--font-size-small);
}

/* When */
.model-when h4 {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-primary);
}

.model-when ul {
  list-style: none;
}

.model-when li {
  position: relative;
  padding-left: var(--spacing-lg);
  padding-bottom: var(--spacing-xs);
  font-size: var(--font-size-small);
  color: var(--color-text-secondary);
}

.model-when li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-weight: bold;
}

/* Details card */
.model-details {
  padding: var(--spacing-2xl);
}

.model-includes,
.model-process {
  margin-bottom: var(--spacing-xl);
}

.model-includes h4,
.model-process h4,
.model-example h4 {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-md);
  color: var(--color-text-primary);
}

.model-includes ul {
  list-style: none;
}

.model-includes li {
  position: relative;
  padding-left: var(--spacing-lg);
  padding-bottom: var(--spacing-sm);
  font-size: var(--font-size-small);
  color: var(--color-text-secondary);
}

.model-includes li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: var(--color-success);
  font-weight: bold;
}

.model-process ol {
  list-style: none;
  counter-reset: steps;
}

.model-process li {
  position: relative;
  padding-left: var(--spacing-xl);
  padding-bottom: var(--spacing-sm);
  font-size: var(--font-size-small);
  color: var(--color-text-secondary);
  counter-increment: steps;
}

.model-process li::before {
  content: counter(steps);
  position: absolute;
  left: 0;
  width: 22px;
  height: 22px;
  background: var(--color-primary);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: var(--font-weight-bold);
}

.model-example {
  padding-top: var(--spacing-lg);
  border-top: 1px solid rgba(0, 0, 0, 0.06);
}

.model-example p {
  font-size: var(--font-size-small);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  font-style: italic;
}

/* Comparison Table */
.table-wrapper {
  overflow-x: auto;
  padding: var(--spacing-lg);
}

.compare-table {
  width: 100%;
  border-collapse: collapse;
  font-size: var(--font-size-small);
}

.compare-table th,
.compare-table td {
  padding: var(--spacing-md) var(--spacing-lg);
  text-align: left;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}

.compare-table th {
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  font-size: var(--font-size-xs);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
}

.compare-table td {
  color: var(--color-text-secondary);
}

.criteria-cell {
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary) !important;
  white-space: nowrap;
}

.compare-table tbody tr:last-child td {
  border-bottom: none;
}

.compare-table tbody tr:hover {
  background: rgba(10, 132, 255, 0.03);
}

/* Guarantees */
.guarantees-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

.guarantee-card {
  padding: var(--spacing-xl);
  text-align: center;
}

.guarantee-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: var(--spacing-md);
}

.guarantee-card h4 {
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-base);
}

.guarantee-card p {
  font-size: var(--font-size-small);
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
}

/* Section alt background */
.section-alt {
  background: var(--color-bg-secondary);
}

/* Button large */
.btn-lg {
  padding: var(--spacing-md) var(--spacing-2xl);
  font-size: var(--font-size-large);
}

/* Responsive */
@media (max-width: 968px) {
  .selector-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .model-block,
  .model-block.model-reverse {
    grid-template-columns: 1fr;
    direction: ltr;
  }

  .guarantees-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .compare-table th,
  .compare-table td {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: var(--font-size-xs);
  }
}

@media (max-width: 640px) {
  .selector-grid {
    grid-template-columns: 1fr;
  }

  .model-params {
    grid-template-columns: 1fr;
  }

  .guarantees-grid {
    grid-template-columns: 1fr;
  }

  .table-wrapper {
    padding: var(--spacing-sm);
  }
}
</style>
