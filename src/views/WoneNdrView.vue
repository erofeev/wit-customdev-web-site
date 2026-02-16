<template>
  <div class="ndr-page">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-glow hero-glow-1"></div>
        <div class="hero-glow hero-glow-2"></div>
        <div class="grid-lines"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">Network Detection & Response</div>
          <h1 class="hero-title animate-slide-up">
            <span class="text-gradient">WoneNDR</span> — узнай свою сеть за 24 часа
          </h1>
          <p class="hero-subtitle animate-slide-up">
            Сетевая безопасность для среднего бизнеса. Автоматическая карта сети, обнаружение угроз и AI-аналитика — без выделенного SOC.
          </p>
          <div class="hero-cta animate-slide-up">
            <RouterLink to="/contact" class="btn btn-primary">
              Бесплатный аудит за 48 часов
            </RouterLink>
            <a href="#pricing" class="btn btn-outline">Тарифы</a>
          </div>
          <div class="hero-stats">
            <div class="hero-stat">
              <strong>30 мин</strong>
              <span>установка</span>
            </div>
            <div class="hero-stat">
              <strong>24 часа</strong>
              <span>до полной карты сети</span>
            </div>
            <div class="hero-stat">
              <strong>в 5-10x</strong>
              <span>дешевле enterprise NDR</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem -->
    <section class="section">
      <div class="container">
        <h2 class="section-title text-center">Проблема: 90% компаний не видят свою сеть</h2>
        <p class="section-subtitle text-center">
          Enterprise-решения стоят 5-20 млн в год. Бесплатные инструменты требуют команду экспертов. Между ними — пустота.
        </p>
        <div class="problem-grid">
          <div class="problem-card card">
            <h3>PT NAD / Kaspersky KATA</h3>
            <div class="problem-price">5-20 млн ₽/год</div>
            <ul class="problem-list">
              <li class="negative">Нужен выделенный SOC</li>
              <li class="negative">Месяцы внедрения</li>
              <li class="negative">Для Enterprise 1000+ сотрудников</li>
            </ul>
          </div>
          <div class="problem-card problem-card-hero card-glass">
            <h3>WoneNDR</h3>
            <div class="problem-price highlight">от 0 ₽ (Free tier)</div>
            <ul class="problem-list">
              <li class="positive">Работает без SOC — AI объясняет всё</li>
              <li class="positive">Установка за 30 минут</li>
              <li class="positive">Для компаний 50-1000 сотрудников</li>
            </ul>
          </div>
          <div class="problem-card card">
            <h3>Suricata / Zeek (Open Source)</h3>
            <div class="problem-price">0 ₽</div>
            <ul class="problem-list">
              <li class="negative">Нужна команда экспертов</li>
              <li class="negative">Нет визуализации</li>
              <li class="negative">Только сырые алерты</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Capabilities -->
    <section class="section section-dark">
      <div class="container">
        <h2 class="section-title text-center">Что умеет WoneNDR</h2>
        <div class="grid grid-3 mt-4">
          <div class="feature-card card-glass">
            <div class="feature-icon">🗺️</div>
            <h3>Автоматическая карта сети</h3>
            <p>За 24 часа построит интерактивную карту всех устройств и связей. Находит забытые устройства, неправильно настроенное IoT-оборудование.</p>
          </div>
          <div class="feature-card card-glass">
            <div class="feature-icon">🔗</div>
            <h3>Граф-аналитика</h3>
            <p>Уникальная технология: анализ путей атак, расчёт «радиуса поражения», обнаружение lateral movement. То, что есть только у Darktrace за 15-30 млн.</p>
          </div>
          <div class="feature-card card-glass">
            <div class="feature-icon">🤖</div>
            <h3>AI-объяснения инцидентов</h3>
            <p>Объясняет на русском языке, что произошло и что делать. Три варианта: локальный AI, российские API (YandexGPT), международные (Claude).</p>
          </div>
          <div class="feature-card card-glass">
            <div class="feature-icon">🛡️</div>
            <h3>30 правил обнаружения</h3>
            <p>Suricata IDS + поведенческий анализ (ML) + 5 граф-правил. DNS-туннели, сканирование портов, brute-force, C2-маяки, эксфильтрация данных.</p>
          </div>
          <div class="feature-card card-glass">
            <div class="feature-icon">📊</div>
            <h3>Комплаенс-отчёты</h3>
            <p>Автоматическая генерация отчётов для 187-ФЗ (КИИ) и ГОСТ 57580. Оценка сегментации сети (0-100 баллов, пересчёт ежедневно).</p>
          </div>
          <div class="feature-card card-glass">
            <div class="feature-icon">📱</div>
            <h3>Telegram-уведомления</h3>
            <p>Оповещения с кнопками действий прямо в Telegram. Не просто email — интерактивные алерты для быстрого реагирования.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="section">
      <div class="container">
        <h2 class="section-title text-center">Как это работает</h2>
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Установка сенсора</h3>
              <p>Одна команда в терминале. Сенсор подключается к зеркальному порту коммутатора и начинает анализ трафика.</p>
              <div class="step-time">30 минут</div>
            </div>
          </div>
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>Автоматическое обучение</h3>
              <p>Система строит карту сети, определяет baseline нормального поведения, назначает роли устройствам.</p>
              <div class="step-time">24 часа</div>
            </div>
          </div>
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Обнаружение и защита</h3>
              <p>Детектирование аномалий, алерты с AI-объяснениями, визуализация путей атак и рекомендации по реагированию.</p>
              <div class="step-time">24/7</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Attack Scenarios -->
    <section class="section section-dark">
      <div class="container">
        <h2 class="section-title text-center">Реальные сценарии угроз</h2>
        <p class="section-subtitle text-center">WoneNDR обнаружит каждый из этих сценариев автоматически</p>
        <div class="scenarios-list">
          <div
            v-for="(scenario, index) in scenarios"
            :key="index"
            class="scenario-item"
            :class="{ expanded: expandedScenario === index }"
          >
            <button class="scenario-header" @click="toggleScenario(index)">
              <span class="scenario-icon">{{ scenario.icon }}</span>
              <span class="scenario-title">{{ scenario.title }}</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" class="scenario-chevron"
                   :style="{ transform: expandedScenario === index ? 'rotate(180deg)' : 'rotate(0deg)' }">
                <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
            <transition name="expand">
              <div v-if="expandedScenario === index" class="scenario-body">
                <p>{{ scenario.description }}</p>
                <div class="scenario-detection">
                  <strong>Как WoneNDR обнаружит:</strong> {{ scenario.detection }}
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="section" id="pricing">
      <div class="container">
        <h2 class="section-title text-center">Тарифы</h2>
        <p class="section-subtitle text-center">Начните бесплатно, масштабируйте по мере роста</p>
        <div class="pricing-grid">
          <div v-for="(plan, index) in pricing" :key="index" class="pricing-card" :class="{ featured: plan.featured }">
            <div v-if="plan.featured" class="pricing-badge">Популярный</div>
            <h3>{{ plan.name }}</h3>
            <div class="pricing-price">
              <span class="price-amount">{{ plan.price }}</span>
              <span v-if="plan.period" class="price-period">{{ plan.period }}</span>
            </div>
            <div class="pricing-details">
              <div class="pricing-detail">До {{ plan.hosts }} хостов</div>
              <div class="pricing-detail">{{ plan.sensors }} сенсор{{ Number(plan.sensors) > 1 ? 'а' : '' }}</div>
            </div>
            <ul class="pricing-features">
              <li v-for="(feature, idx) in plan.features" :key="idx">{{ feature }}</li>
            </ul>
            <RouterLink to="/contact" class="btn" :class="plan.featured ? 'btn-primary' : 'btn-outline'">
              {{ plan.cta }}
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <FaqSection
      title="Частые вопросы о WoneNDR"
      subtitle="Ответы на главные вопросы о сетевой безопасности"
      :items="faqItems"
      :dark="true"
    />

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="cta-box card-glass">
          <h2>Бесплатный аудит безопасности сети за 48 часов</h2>
          <p>Установим сенсор, проанализируем трафик 2 дня, предоставим PDF-отчёт с картой сети и найденными проблемами. Бесплатно и без обязательств.</p>
          <RouterLink to="/contact" class="btn btn-primary btn-lg">Заказать бесплатный аудит</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import FaqSection from '@/components/FaqSection.vue'

const expandedScenario = ref<number | null>(null)

const toggleScenario = (index: number) => {
  expandedScenario.value = expandedScenario.value === index ? null : index
}

const scenarios = [
  {
    icon: '💀',
    title: 'Ransomware-атака через фишинг',
    description: 'Сотрудник открыл вредоносный макрос → загрузчик скачивает полезную нагрузку → сканирует сеть → пытается получить доступ к бэкапам.',
    detection: 'Обнаружение нетипичного сетевого сканирования, аномального исходящего трафика, попыток доступа к бэкап-серверам с рабочей станции. Визуализация полной цепочки атаки.'
  },
  {
    icon: '🕵️',
    title: 'Инсайдерская угроза',
    description: 'Сотрудник копирует клиентскую базу данных в облачное хранилище перед увольнением.',
    detection: 'Аномальный объём данных от рабочей станции, загрузка в облачное хранилище, нетипичные паттерны обращения к базе данных.'
  },
  {
    icon: '🔗',
    title: 'Атака через цепочку поставок',
    description: 'Злоумышленник проникает через VPN подрядчика → lateral movement → установка C2-маяка.',
    detection: 'Граф-аналитика обнаруживает цепочку новых соединений (2+ hop за 30 минут), C2-маяк выявляется по характерным паттернам коммуникации.'
  },
  {
    icon: '📡',
    title: 'Уязвимое IoT-устройство',
    description: 'Незащищённая IP-камера в серверном VLAN с прямым доступом к 14 серверам.',
    detection: 'Проактивное обнаружение при построении baseline: устройство без политики безопасности имеет доступ к критическим ресурсам. Рекомендация по сегментации.'
  },
  {
    icon: '🌐',
    title: 'DNS-туннелирование',
    description: 'Вредоносное ПО незаметно передаёт данные через DNS-запросы, обходя файрвол.',
    detection: 'Анализ DNS-трафика: аномальная длина запросов, нетипичные домены, высокая частота. Детектирование даже при обходе традиционных средств защиты.'
  }
]

const pricing = [
  {
    name: 'Free',
    price: '0 ₽',
    period: '',
    hosts: 50,
    sensors: 1,
    featured: false,
    features: ['Карта сети', 'Базовые алерты', 'Telegram-уведомления', 'Community-поддержка'],
    cta: 'Начать бесплатно'
  },
  {
    name: 'Pro S',
    price: '70 000 ₽',
    period: '/мес',
    hosts: 200,
    sensors: 2,
    featured: false,
    features: ['Всё из Free', 'AI-аналитика', 'Граф-аналитика', 'Комплаенс-отчёты', 'Email-поддержка'],
    cta: 'Выбрать Pro S'
  },
  {
    name: 'Pro M',
    price: '130 000 ₽',
    period: '/мес',
    hosts: 500,
    sensors: 3,
    featured: true,
    features: ['Всё из Pro S', 'AD-интеграция', 'Расширенный ML', 'SIEM-интеграция', 'Приоритетная поддержка'],
    cta: 'Выбрать Pro M'
  },
  {
    name: 'Enterprise',
    price: 'от 250 000 ₽',
    period: '/мес',
    hosts: '∞',
    sensors: '∞',
    featured: false,
    features: ['Всё из Pro M', 'Кастомные правила', 'On-premise AI', 'Выделенный инженер', 'SLA 99.9%'],
    cta: 'Обсудить'
  }
]

const faqItems = [
  {
    question: 'Чем WoneNDR отличается от антивируса и файрвола?',
    answer: 'Антивирус защищает отдельные устройства, файрвол фильтрует трафик на периметре. NDR анализирует весь внутренний трафик сети и обнаруживает угрозы, которые уже прошли периметр — lateral movement, C2-каналы, инсайдерские угрозы, DNS-туннели.'
  },
  {
    question: 'Нужен ли выделенный SOC для работы с WoneNDR?',
    answer: 'Нет. WoneNDR спроектирован для компаний с 1-2 ИБ-специалистами. AI объясняет каждый инцидент на русском языке и даёт конкретные рекомендации по реагированию. Вам не нужна команда аналитиков.'
  },
  {
    question: 'Какие данные отправляются в облако?',
    answer: 'Только метаданные: IP-адреса, порты, имена протоколов, структура. НИКОГДА не отправляются содержимое файлов, пароли или персональные данные. Можно использовать полностью локальный AI (Ollama) — тогда данные вообще не покидают вашу инфраструктуру.'
  },
  {
    question: 'Как WoneNDR соотносится с требованиями 187-ФЗ?',
    answer: 'WoneNDR автоматически генерирует отчёты для 187-ФЗ (КИИ) и ГОСТ 57580. Ежедневный расчёт оценки сегментации сети (0-100 баллов). ФСТЭК-сертификация запланирована на v2.0.'
  },
  {
    question: 'Сколько времени занимает внедрение?',
    answer: 'Установка сенсора — 30 минут (одна команда в терминале). Через 24 часа у вас полная карта сети и baseline нормального поведения. Не нужен интегратор и сложный проект внедрения.'
  },
  {
    question: 'Может ли WoneNDR работать в закрытой сети без интернета?',
    answer: 'Да. Все компоненты работают on-premise. Для AI-аналитики можно использовать локальную модель (Docker + Ollama). Данные не покидают вашу инфраструктуру.'
  },
  {
    question: 'Чем WoneNDR лучше PT NAD?',
    answer: 'PT NAD — отличное enterprise-решение для крупных компаний с SOC. WoneNDR — для среднего бизнеса: в 5-10 раз дешевле, не требует SOC, имеет уникальную граф-аналитику (пути атак, радиус поражения), AI-объяснения. PT NAD этих возможностей не предоставляет.'
  },
  {
    question: 'Есть ли бесплатная версия?',
    answer: 'Да. Тариф Free поддерживает до 50 хостов и 1 сенсор — достаточно для оценки продукта и небольших офисов. Также мы предлагаем бесплатный 48-часовой аудит безопасности с PDF-отчётом.'
  }
]
</script>

<style scoped>
/* Hero */
.hero {
  position: relative;
  min-height: 600px;
  display: flex;
  align-items: center;
  padding: var(--spacing-5xl) 0;
  overflow: hidden;
  background: var(--gradient-hero);
}

.hero-bg {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  overflow: hidden;
  pointer-events: none;
}

.hero-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.4;
}

.hero-glow-1 {
  top: -20%; right: -10%;
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(239, 63, 41, 0.3) 0%, transparent 70%);
}

.hero-glow-2 {
  bottom: -30%; left: -15%;
  width: 700px; height: 700px;
  background: radial-gradient(circle, rgba(128, 47, 185, 0.2) 0%, transparent 70%);
}

.grid-lines {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image:
    linear-gradient(rgba(239, 63, 41, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(239, 63, 41, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.5;
}

.hero-content {
  position: relative; z-index: 1;
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
}

.hero-badge {
  display: inline-block;
  background: var(--color-primary-ultra-light);
  color: var(--color-primary);
  padding: var(--spacing-xs) var(--spacing-lg);
  border-radius: var(--radius-full);
  font-size: var(--font-size-small);
  font-weight: var(--font-weight-semibold);
  margin-bottom: var(--spacing-lg);
}

.hero-title {
  font-size: var(--font-size-h1);
  margin-bottom: var(--spacing-lg);
}

.hero-subtitle {
  font-size: var(--font-size-large);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-2xl);
  line-height: var(--line-height-relaxed);
}

.hero-cta {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: var(--spacing-3xl);
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: var(--spacing-3xl);
  padding-top: var(--spacing-2xl);
  border-top: 1px solid var(--color-bg-tertiary);
}

.hero-stat {
  text-align: center;
}

.hero-stat strong {
  display: block;
  font-size: var(--font-size-h4);
  color: var(--color-primary);
  font-weight: var(--font-weight-bold);
}

.hero-stat span {
  font-size: var(--font-size-small);
  color: var(--color-text-tertiary);
}

/* Problem Grid */
.problem-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-2xl);
}

.problem-card {
  padding: var(--spacing-2xl);
  text-align: center;
}

.problem-card-hero {
  border: 2px solid var(--color-primary);
  position: relative;
}

.problem-price {
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-tertiary);
  margin: var(--spacing-md) 0 var(--spacing-lg);
}

.problem-price.highlight {
  color: var(--color-primary);
}

.problem-list {
  list-style: none;
  text-align: left;
}

.problem-list li {
  padding: var(--spacing-sm) 0;
  padding-left: var(--spacing-xl);
  position: relative;
  font-size: var(--font-size-small);
}

.problem-list li.negative::before {
  content: '✗'; position: absolute; left: 0;
  color: var(--color-error); font-weight: var(--font-weight-bold);
}

.problem-list li.positive::before {
  content: '✓'; position: absolute; left: 0;
  color: var(--color-success); font-weight: var(--font-weight-bold);
}

/* Features */
.feature-card {
  padding: var(--spacing-2xl);
  text-align: center;
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
}

.feature-card h3 {
  margin-bottom: var(--spacing-sm);
}

.feature-card p {
  color: var(--color-text-tertiary);
  font-size: var(--font-size-small);
  line-height: var(--line-height-relaxed);
  margin: 0;
}

/* Steps */
.steps {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  max-width: 700px;
  margin: var(--spacing-2xl) auto 0;
}

.step {
  display: flex;
  gap: var(--spacing-xl);
  align-items: flex-start;
}

.step-number {
  width: 48px; height: 48px;
  background: var(--gradient-accent);
  color: var(--color-text-inverse);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-bold);
  flex-shrink: 0;
}

.step-content h3 { margin-bottom: var(--spacing-sm); }

.step-content p {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-sm);
}

.step-time {
  display: inline-block;
  background: var(--color-primary-ultra-light);
  color: var(--color-primary);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
}

/* Scenarios */
.scenarios-list {
  max-width: 800px;
  margin: var(--spacing-2xl) auto 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.scenario-item {
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-base);
}

.scenario-item.expanded {
  border-color: var(--color-primary);
}

.scenario-header {
  width: 100%;
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding: var(--spacing-lg) var(--spacing-xl);
  background: none;
  border: none;
  cursor: pointer;
  color: var(--color-text-inverse);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  text-align: left;
  font-family: var(--font-family-primary);
}

.scenario-icon { font-size: 1.5rem; }

.scenario-title { flex: 1; }

.scenario-chevron {
  color: var(--color-primary);
  transition: transform var(--transition-base);
  flex-shrink: 0;
}

.scenario-body {
  padding: 0 var(--spacing-xl) var(--spacing-lg);
  padding-left: calc(var(--spacing-xl) + 1.5rem + var(--spacing-md));
}

.scenario-body p {
  color: var(--color-text-tertiary);
  line-height: var(--line-height-relaxed);
}

.scenario-detection {
  background: rgba(239, 63, 41, 0.1);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  border-left: 3px solid var(--color-primary);
  font-size: var(--font-size-small);
  color: var(--color-text-tertiary);
}

.scenario-detection strong {
  color: var(--color-primary-light);
}

/* Pricing */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-2xl);
}

.pricing-card {
  background: var(--color-bg-primary);
  border: 2px solid var(--color-bg-tertiary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-2xl);
  text-align: center;
  position: relative;
  transition: all var(--transition-base);
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.pricing-card.featured {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-primary);
}

.pricing-badge {
  position: absolute;
  top: -12px; left: 50%;
  transform: translateX(-50%);
  background: var(--gradient-accent);
  color: var(--color-text-inverse);
  padding: var(--spacing-xs) var(--spacing-lg);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  white-space: nowrap;
}

.pricing-card h3 {
  margin-bottom: var(--spacing-md);
}

.pricing-price {
  margin-bottom: var(--spacing-lg);
}

.price-amount {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
}

.price-period {
  font-size: var(--font-size-small);
  color: var(--color-text-tertiary);
}

.pricing-details {
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--color-bg-tertiary);
}

.pricing-detail {
  font-size: var(--font-size-small);
  color: var(--color-text-secondary);
}

.pricing-features {
  list-style: none;
  text-align: left;
  margin-bottom: var(--spacing-xl);
}

.pricing-features li {
  padding: var(--spacing-xs) 0;
  padding-left: var(--spacing-lg);
  position: relative;
  font-size: var(--font-size-small);
  color: var(--color-text-secondary);
}

.pricing-features li::before {
  content: '✓'; position: absolute; left: 0;
  color: var(--color-success); font-weight: var(--font-weight-bold);
}

.pricing-card .btn {
  width: 100%;
}

/* CTA */
.cta-box {
  text-align: center;
  padding: var(--spacing-4xl);
  max-width: 800px;
  margin: 0 auto;
}

.cta-box h2 { margin-bottom: var(--spacing-md); }

.cta-box p {
  font-size: var(--font-size-large);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
}

.btn-lg {
  padding: var(--spacing-lg) var(--spacing-2xl);
  font-size: var(--font-size-large);
}

/* Expand transition */
.expand-enter-active, .expand-leave-active {
  transition: all 0.3s ease;
}
.expand-enter-from, .expand-leave-to {
  opacity: 0; max-height: 0;
}
.expand-enter-to, .expand-leave-from {
  opacity: 1; max-height: 500px;
}

/* Responsive */
@media (max-width: 768px) {
  .hero { min-height: 500px; padding: var(--spacing-4xl) 0; }
  .hero-title { font-size: var(--font-size-h2); }
  .hero-stats { flex-direction: column; gap: var(--spacing-lg); }
  .hero-cta { flex-direction: column; }
  .hero-cta .btn { width: 100%; }
  .step { flex-direction: column; text-align: center; align-items: center; }
  .scenario-body { padding-left: var(--spacing-xl); }
}
</style>
