<template>
  <div class="ds-page">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-glow hero-glow-1"></div>
        <div class="hero-glow hero-glow-2"></div>
        <div class="grid-lines"></div>
      </div>
      <div class="container">
        <div class="hero-content">
          <div class="hero-badge">Data Showcase Platform</div>
          <h1 class="hero-title animate-slide-up">
            <span class="text-gradient">Data Showcase</span> — цифровая витрина данных
          </h1>
          <p class="hero-subtitle animate-slide-up">
            Единая платформа для публикации, управления и безопасного доступа к корпоративным данным. Личные кабинеты, ролевая безопасность на уровне БД, готовность к масштабированию.
          </p>
          <div class="hero-cta animate-slide-up">
            <RouterLink to="/contact" class="btn btn-primary">
              Запросить демонстрацию
            </RouterLink>
            <a href="#use-cases" class="btn btn-outline">Сценарии применения</a>
          </div>
          <div class="hero-stats">
            <div class="hero-stat">
              <strong>RLS + FLS</strong>
              <span>безопасность на уровне БД</span>
            </div>
            <div class="hero-stat">
              <strong>3 модели</strong>
              <span>SaaS / On-Premise / Cloud</span>
            </div>
            <div class="hero-stat">
              <strong>2-4 мес</strong>
              <span>до первого релиза</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem -->
    <section class="section">
      <div class="container">
        <h2 class="section-title text-center">Проблема: данные есть, доступа к ним нет</h2>
        <p class="section-subtitle text-center">
          Компании накапливают терабайты данных, но предоставить к ним удобный и безопасный доступ — отдельная инженерная задача.
        </p>
        <div class="problem-grid">
          <div class="problem-card card">
            <div class="problem-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="12" fill="rgba(239,63,41,0.1)"/>
                <path d="M16 20h16M16 24h16M16 28h10" stroke="#EF3F29" stroke-width="2" stroke-linecap="round"/>
                <rect x="12" y="14" width="24" height="20" rx="3" stroke="#EF3F29" stroke-width="2" fill="none"/>
              </svg>
            </div>
            <h3>Разрозненные источники</h3>
            <p>Данные в десятках систем: ERP, CRM, Excel-файлы, внутренние БД. Нет единой точки доступа для клиентов и сотрудников.</p>
          </div>
          <div class="problem-card card">
            <div class="problem-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="12" fill="rgba(239,63,41,0.1)"/>
                <circle cx="24" cy="24" r="8" stroke="#EF3F29" stroke-width="2" fill="none"/>
                <path d="M24 20v4l3 3" stroke="#EF3F29" stroke-width="2" stroke-linecap="round"/>
                <path d="M15 15l-2-2M33 15l2-2M15 33l-2 2M33 33l2 2" stroke="#EF3F29" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <h3>Долгая разработка с нуля</h3>
            <p>Каждый раз — проектирование с нуля: авторизация, роли, фильтрация, экспорт. Месяцы работы команды на типовые задачи.</p>
          </div>
          <div class="problem-card card">
            <div class="problem-icon">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <rect width="48" height="48" rx="12" fill="rgba(239,63,41,0.1)"/>
                <path d="M20 18l-4 6h8l-4 6" stroke="#EF3F29" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <rect x="26" y="16" width="8" height="16" rx="2" stroke="#EF3F29" stroke-width="2" fill="none"/>
                <path d="M28 22h4M28 26h4" stroke="#EF3F29" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <h3>Безопасность «на уровне кода»</h3>
            <p>Проверки доступа разбросаны по коду приложения. Одна ошибка — и данные утекли. Нет гарантий на уровне БД.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- What is Data Showcase -->
    <section class="section section-dark">
      <div class="container">
        <h2 class="section-title text-center">Что такое Data Showcase</h2>
        <p class="section-subtitle text-center">
          Платформа-конструктор для создания корпоративных витрин данных с встроенной безопасностью
        </p>
        <div class="grid grid-3 mt-4">
          <div class="feature-card card-glass">
            <div class="feature-icon-wrap">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect x="4" y="8" width="32" height="24" rx="4" stroke="var(--color-primary)" stroke-width="2" fill="none"/>
                <rect x="8" y="12" width="10" height="6" rx="1" fill="rgba(10,132,255,0.2)" stroke="var(--color-primary)" stroke-width="1.5"/>
                <rect x="22" y="12" width="10" height="6" rx="1" fill="rgba(10,132,255,0.2)" stroke="var(--color-primary)" stroke-width="1.5"/>
                <rect x="8" y="22" width="24" height="6" rx="1" fill="rgba(10,132,255,0.2)" stroke="var(--color-primary)" stroke-width="1.5"/>
              </svg>
            </div>
            <h3>Единая точка доступа</h3>
            <p>Веб-портал с каталогом данных. Таблицы, карточки, карты, графики — всё в одном месте с поиском и фильтрацией.</p>
          </div>
          <div class="feature-card card-glass">
            <div class="feature-icon-wrap">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="16" r="6" stroke="var(--color-primary)" stroke-width="2" fill="none"/>
                <path d="M10 34c0-5.523 4.477-10 10-10s10 4.477 10 10" stroke="var(--color-primary)" stroke-width="2" fill="none"/>
                <rect x="26" y="8" width="10" height="10" rx="5" fill="rgba(10,132,255,0.15)" stroke="var(--color-primary)" stroke-width="1.5"/>
                <path d="M31 11v4M29 13h4" stroke="var(--color-primary)" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </div>
            <h3>Личный кабинет</h3>
            <p>Каждый пользователь видит только свои данные. Избранное, история просмотров, настраиваемые дашборды и экспорт.</p>
          </div>
          <div class="feature-card card-glass">
            <div class="feature-icon-wrap">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect x="6" y="6" width="28" height="28" rx="4" stroke="var(--color-primary)" stroke-width="2" fill="none"/>
                <path d="M6 14h28M14 14v20M26 14v20" stroke="var(--color-primary)" stroke-width="1.5" opacity="0.5"/>
                <circle cx="20" cy="24" r="4" fill="rgba(10,132,255,0.2)" stroke="var(--color-primary)" stroke-width="1.5"/>
                <path d="M18.5 24l1 1 2-2" stroke="var(--color-primary)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>Админ-панель</h3>
            <p>Управление разделами, пользователями и правами доступа через удобный интерфейс. Без кода и без разработчиков.</p>
          </div>
          <div class="feature-card card-glass">
            <div class="feature-icon-wrap">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect x="8" y="6" width="24" height="28" rx="3" stroke="var(--color-primary)" stroke-width="2" fill="none"/>
                <path d="M14 14h12M14 20h8M14 26h10" stroke="var(--color-primary)" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>
                <circle cx="30" cy="30" r="8" fill="var(--color-bg-primary)" stroke="var(--color-primary)" stroke-width="2"/>
                <path d="M28 30l1.5 1.5 3-3" stroke="var(--color-primary)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>RLS — Row Level Security</h3>
            <p>Безопасность на уровне PostgreSQL. Политики фильтруют строки автоматически — даже если код забыл проверку.</p>
          </div>
          <div class="feature-card card-glass">
            <div class="feature-icon-wrap">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <rect x="8" y="6" width="24" height="28" rx="3" stroke="var(--color-primary)" stroke-width="2" fill="none"/>
                <path d="M14 14h12" stroke="var(--color-primary)" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M14 20h5" stroke="var(--color-primary)" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M22 20h4" stroke="var(--color-primary)" stroke-width="1.5" stroke-linecap="round" opacity="0.3"/>
                <path d="M14 26h8" stroke="var(--color-primary)" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M25 26h1" stroke="var(--color-primary)" stroke-width="1.5" stroke-linecap="round" opacity="0.3"/>
                <circle cx="30" cy="30" r="8" fill="var(--color-bg-primary)" stroke="var(--color-primary)" stroke-width="2"/>
                <path d="M27 30h6M30 27v6" stroke="var(--color-primary)" stroke-width="1.5" stroke-linecap="round" opacity="0.4"/>
                <path d="M30 30" stroke="var(--color-primary)" stroke-width="3" stroke-linecap="round"/>
              </svg>
            </div>
            <h3>FLS — Field Level Security</h3>
            <p>Управление видимостью полей по ролям. HR видит зарплаты, руководитель — только ФИО. Настраивается в админ-панели.</p>
          </div>
          <div class="feature-card card-glass">
            <div class="feature-icon-wrap">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <circle cx="20" cy="20" r="14" stroke="var(--color-primary)" stroke-width="2" fill="none"/>
                <ellipse cx="20" cy="20" rx="6" ry="14" stroke="var(--color-primary)" stroke-width="1.5" fill="none" opacity="0.5"/>
                <path d="M6 20h28" stroke="var(--color-primary)" stroke-width="1.5" opacity="0.5"/>
                <circle cx="20" cy="20" r="3" fill="rgba(10,132,255,0.3)" stroke="var(--color-primary)" stroke-width="1.5"/>
              </svg>
            </div>
            <h3>Геоданные и карты</h3>
            <p>Встроенная поддержка PostGIS. Объекты на карте, геофильтрация, кластеризация. Идеально для недвижимости, логистики, инфраструктуры.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Architecture -->
    <section class="section">
      <div class="container">
        <h2 class="section-title text-center">Архитектура платформы</h2>
        <p class="section-subtitle text-center">
          Современный стек, проверенный на production-нагрузках
        </p>
        <div class="arch-diagram">
          <div class="arch-layer">
            <div class="arch-label">Frontend</div>
            <div class="arch-items">
              <div class="arch-item card-glass">
                <strong>Angular 18</strong>
                <span>Standalone components</span>
              </div>
              <div class="arch-item card-glass">
                <strong>PrimeNG</strong>
                <span>UI-компоненты</span>
              </div>
              <div class="arch-item card-glass">
                <strong>NgRx</strong>
                <span>State management</span>
              </div>
            </div>
          </div>
          <div class="arch-connector">
            <svg width="24" height="40" viewBox="0 0 24 40">
              <path d="M12 0v40" stroke="var(--color-primary)" stroke-width="2" stroke-dasharray="4 4"/>
              <path d="M6 34l6 6 6-6" stroke="var(--color-primary)" stroke-width="2" fill="none" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="arch-layer">
            <div class="arch-label">Backend</div>
            <div class="arch-items">
              <div class="arch-item card-glass">
                <strong>Node.js</strong>
                <span>API Gateway</span>
              </div>
              <div class="arch-item card-glass">
                <strong>Moleculer.js</strong>
                <span>Микросервисы</span>
              </div>
              <div class="arch-item card-glass">
                <strong>JWT + RBAC</strong>
                <span>Авторизация</span>
              </div>
            </div>
          </div>
          <div class="arch-connector">
            <svg width="24" height="40" viewBox="0 0 24 40">
              <path d="M12 0v40" stroke="var(--color-primary)" stroke-width="2" stroke-dasharray="4 4"/>
              <path d="M6 34l6 6 6-6" stroke="var(--color-primary)" stroke-width="2" fill="none" stroke-linecap="round"/>
            </svg>
          </div>
          <div class="arch-layer">
            <div class="arch-label">Data Layer</div>
            <div class="arch-items">
              <div class="arch-item card-glass">
                <strong>PostgreSQL</strong>
                <span>RLS + FLS</span>
              </div>
              <div class="arch-item card-glass">
                <strong>PostGIS</strong>
                <span>Геоданные</span>
              </div>
              <div class="arch-item card-glass">
                <strong>Docker</strong>
                <span>K8s-ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Security -->
    <section class="section section-dark">
      <div class="container">
        <h2 class="section-title text-center">Трёхуровневая безопасность</h2>
        <p class="section-subtitle text-center">
          Каждый уровень работает независимо — даже если один пробит, остальные защищают данные
        </p>
        <div class="security-levels">
          <div class="security-level">
            <div class="level-number">1</div>
            <div class="level-content card-glass">
              <h3>Разделы</h3>
              <p>Какие модули и каталоги доступны компании. Настраивается в админ-панели для каждого тенанта.</p>
              <div class="level-example">
                <span class="level-tag">Компания A</span> видит: Каталог продукции, Аналитика
              </div>
            </div>
          </div>
          <div class="security-level">
            <div class="level-number">2</div>
            <div class="level-content card-glass">
              <h3>Сущности (RLS)</h3>
              <p>Какие записи видит пользователь. PostgreSQL автоматически фильтрует строки на основе JWT-контекста.</p>
              <div class="level-example">
                <span class="level-tag">Менеджер</span> видит только заказы своего региона
              </div>
            </div>
          </div>
          <div class="security-level">
            <div class="level-number">3</div>
            <div class="level-content card-glass">
              <h3>Атрибуты (FLS)</h3>
              <p>Какие поля отображаются для роли. Чувствительные данные скрыты на уровне запросов к БД.</p>
              <div class="level-example">
                <span class="level-tag">HR</span> видит зарплаты, <span class="level-tag">Руководитель</span> — только ФИО
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="section" id="use-cases">
      <div class="container">
        <h2 class="section-title text-center">Сценарии применения</h2>
        <p class="section-subtitle text-center">
          Data Showcase адаптируется под задачи любой отрасли
        </p>
        <div class="use-cases-grid">
          <div v-for="(uc, index) in useCases" :key="index" class="use-case-card" :style="{ borderTopColor: uc.color }">
            <div class="use-case-icon" :style="{ background: uc.color + '15' }">
              <span>{{ uc.icon }}</span>
            </div>
            <h3>{{ uc.title }}</h3>
            <p>{{ uc.description }}</p>
            <ul class="use-case-features">
              <li v-for="(feat, idx) in uc.features" :key="idx">{{ feat }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Delivery Models -->
    <section class="section section-dark">
      <div class="container">
        <h2 class="section-title text-center">Модели поставки</h2>
        <p class="section-subtitle text-center">
          Выберите модель, которая подходит вашей инфраструктуре и политике безопасности
        </p>
        <div class="delivery-grid">
          <div v-for="(model, index) in deliveryModels" :key="index" class="delivery-card card-glass" :class="{ featured: model.featured }">
            <div v-if="model.featured" class="delivery-badge">Рекомендуем</div>
            <h3>{{ model.name }}</h3>
            <p class="delivery-desc">{{ model.description }}</p>
            <ul class="delivery-features">
              <li v-for="(feat, idx) in model.features" :key="idx">{{ feat }}</li>
            </ul>
            <div class="delivery-timeline">
              <strong>{{ model.timeline }}</strong>
              <span>до запуска</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Implementation Phases -->
    <section class="section">
      <div class="container">
        <h2 class="section-title text-center">Этапы внедрения</h2>
        <div class="phases">
          <div v-for="(phase, index) in phases" :key="index" class="phase">
            <div class="phase-number">{{ index + 1 }}</div>
            <div class="phase-content">
              <div class="phase-header">
                <h3>{{ phase.title }}</h3>
                <span class="phase-duration">{{ phase.duration }}</span>
              </div>
              <p>{{ phase.description }}</p>
              <div class="phase-deliverables">
                <span v-for="(d, idx) in phase.deliverables" :key="idx" class="phase-tag">{{ d }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <FaqSection
      title="Частые вопросы о Data Showcase"
      subtitle="Ответы на главные вопросы о платформе"
      :items="faqItems"
      :dark="true"
    />

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="cta-box card-glass">
          <h2>Готовы обсудить вашу витрину данных?</h2>
          <p>Расскажите о ваших данных и задачах — мы подготовим демонстрацию и оценку проекта за 3 рабочих дня.</p>
          <div class="cta-buttons">
            <RouterLink to="/contact" class="btn btn-primary btn-lg">Запросить демонстрацию</RouterLink>
            <RouterLink to="/knowledge/rls-fls-data-security" class="btn btn-outline">Подробнее о RLS/FLS</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import FaqSection from '@/components/FaqSection.vue'

const useCases = [
  {
    icon: '🏢',
    title: 'Страхование',
    color: '#0A84FF',
    description: 'Витрина страховых продуктов для агентов и клиентов с персонализированными тарифами.',
    features: ['Калькулятор тарифов по ролям', 'История полисов в личном кабинете', 'RLS по филиалам и агентам']
  },
  {
    icon: '🏗️',
    title: 'Недвижимость',
    color: '#34C759',
    description: 'Каталог объектов с картой, фильтрацией по параметрам и геолокацией.',
    features: ['PostGIS для гео-поиска', 'Карточки объектов с фото', 'Избранное и сравнение']
  },
  {
    icon: '🏭',
    title: 'Производство',
    color: '#FF9F0A',
    description: 'Каталог продукции с техническими характеристиками, ценами и наличием на складах.',
    features: ['Разные цены для дилеров/розницы', 'Экспорт спецификаций', 'Интеграция с ERP']
  },
  {
    icon: '💰',
    title: 'Финансы',
    color: '#AF52DE',
    description: 'Витрина финансовых инструментов и аналитических отчётов с разграничением по клиентам.',
    features: ['FLS для чувствительных данных', 'Аналитические дашборды', 'Аудит-лог доступа']
  },
  {
    icon: '🚛',
    title: 'Логистика',
    color: '#FF375F',
    description: 'Отслеживание грузов, маршрутов и складских остатков на карте в реальном времени.',
    features: ['Трекинг на карте (PostGIS)', 'Уведомления о статусе', 'API для интеграций']
  },
  {
    icon: '🏛️',
    title: 'Госсектор',
    color: '#5AC8FA',
    description: 'Публичные реестры и каталоги с открытыми данными и защищённой служебной частью.',
    features: ['Публичная витрина + закрытый раздел', 'Соответствие 152-ФЗ', 'On-premise развёртывание']
  }
]

const deliveryModels = [
  {
    name: 'SaaS',
    description: 'Облачная версия с быстрым стартом. Мы управляем инфраструктурой, вы — данными и пользователями.',
    featured: false,
    features: ['Запуск за 2-4 недели', 'Автоматические обновления', 'Бэкапы и мониторинг включены', 'Оплата по подписке'],
    timeline: '2-4 недели'
  },
  {
    name: 'On-Premise',
    description: 'Развёртывание на вашей инфраструктуре. Полный контроль, соответствие требованиям ИБ.',
    featured: true,
    features: ['Docker + Kubernetes', 'Данные не покидают контур', 'Интеграция с AD/LDAP', 'Поддержка и обновления по SLA'],
    timeline: '2-3 месяца'
  },
  {
    name: 'Managed Private Cloud',
    description: 'Выделенное облако под вашу компанию. Изоляция данных + удобство облака.',
    featured: false,
    features: ['Выделенный кластер', 'Гибкое масштабирование', 'SLA 99.9%', 'Управляемая инфраструктура'],
    timeline: '1-2 месяца'
  }
]

const phases = [
  {
    title: 'Аналитика и проектирование',
    duration: '2-3 недели',
    description: 'Исследуем ваши данные, источники, роли пользователей. Проектируем структуру витрины, модель безопасности и UX.',
    deliverables: ['Карта данных', 'Модель ролей', 'Прототип UI', 'Архитектура']
  },
  {
    title: 'Настройка платформы',
    duration: '3-4 недели',
    description: 'Разворачиваем платформу, настраиваем подключение к источникам данных, конфигурируем RLS/FLS-политики.',
    deliverables: ['Развёрнутая среда', 'ETL-процессы', 'RLS-политики', 'Базовый UI']
  },
  {
    title: 'Кастомизация и интеграция',
    duration: '3-6 недель',
    description: 'Адаптируем интерфейс под ваш бренд, подключаем внешние системы, настраиваем уведомления и экспорт.',
    deliverables: ['Брендированный UI', 'API-интеграции', 'Экспорт данных', 'Уведомления']
  },
  {
    title: 'Тестирование и запуск',
    duration: '2-3 недели',
    description: 'Нагрузочное тестирование, тестирование безопасности (пентест RLS-политик), обучение пользователей, запуск.',
    deliverables: ['Пентест-отчёт', 'Документация', 'Обучение', 'Production-запуск']
  }
]

const faqItems = [
  {
    question: 'Что такое «витрина данных» и чем она отличается от BI?',
    answer: 'Витрина данных — это веб-портал для конечных пользователей (клиентов, партнёров, сотрудников), где они работают с данными: ищут, фильтруют, просматривают карточки, экспортируют. BI-инструменты (Power BI, Tableau) — для аналитиков. Витрина — для бизнес-пользователей, которым нужен простой и безопасный доступ, а не построение отчётов.'
  },
  {
    question: 'Как работает безопасность на уровне БД?',
    answer: 'При аутентификации JWT-токен содержит роль и ID компании пользователя. API Gateway устанавливает контекст в PostgreSQL через SET LOCAL. RLS-политики автоматически фильтруют строки — пользователь физически не может получить чужие данные, даже через прямой SQL-запрос. FLS скрывает чувствительные поля на основе роли.'
  },
  {
    question: 'Можно ли подключить наши существующие базы данных?',
    answer: 'Да. Data Showcase поддерживает подключение к PostgreSQL, MySQL, MS SQL, Oracle, MongoDB, REST API и файловым источникам (CSV, Excel). Для каждого источника настраивается ETL-процесс с расписанием синхронизации.'
  },
  {
    question: 'Какие требования к инфраструктуре для On-Premise?',
    answer: 'Минимально: 4 CPU, 16 GB RAM, 100 GB SSD, Docker Engine. Для production-нагрузок рекомендуем Kubernetes-кластер из 3+ нод. Поддерживаем Linux (Ubuntu, RHEL, CentOS) и Windows Server с WSL2.'
  },
  {
    question: 'Как масштабируется платформа?',
    answer: 'Архитектура на базе Moleculer.js позволяет горизонтально масштабировать каждый сервис независимо. PostgreSQL поддерживает партиционирование и read-реплики. На текущих проектах платформа обслуживает 50 000+ пользователей и 10+ млн записей.'
  },
  {
    question: 'Сколько стоит Data Showcase?',
    answer: 'Стоимость зависит от модели поставки, объёма данных и уровня кастомизации. SaaS — от 150 000 ₽/мес. On-Premise — проектная оценка. Мы предоставим детальную оценку после анализа ваших требований. Первая консультация и демонстрация — бесплатно.'
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
  background: radial-gradient(circle, rgba(10, 132, 255, 0.3) 0%, transparent 70%);
}

.hero-glow-2 {
  bottom: -30%; left: -15%;
  width: 700px; height: 700px;
  background: radial-gradient(circle, rgba(0, 217, 255, 0.2) 0%, transparent 70%);
}

.grid-lines {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background-image:
    linear-gradient(rgba(10, 132, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(10, 132, 255, 0.05) 1px, transparent 1px);
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

.problem-icon {
  margin-bottom: var(--spacing-md);
}

.problem-card h3 {
  margin-bottom: var(--spacing-sm);
}

.problem-card p {
  color: var(--color-text-tertiary);
  font-size: var(--font-size-small);
  line-height: var(--line-height-relaxed);
  margin: 0;
}

/* Features */
.feature-card {
  padding: var(--spacing-2xl);
  text-align: center;
}

.feature-icon-wrap {
  display: flex;
  justify-content: center;
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

/* Architecture Diagram */
.arch-diagram {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  margin-top: var(--spacing-2xl);
}

.arch-layer {
  width: 100%;
  max-width: 800px;
}

.arch-label {
  text-align: center;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
  color: var(--color-primary);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: var(--spacing-sm);
}

.arch-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-md);
}

.arch-item {
  padding: var(--spacing-lg);
  text-align: center;
}

.arch-item strong {
  display: block;
  color: var(--color-text-primary);
  margin-bottom: 4px;
}

.arch-item span {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
}

.arch-connector {
  display: flex;
  justify-content: center;
  padding: var(--spacing-sm) 0;
}

/* Security Levels */
.security-levels {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  max-width: 700px;
  margin: var(--spacing-2xl) auto 0;
}

.security-level {
  display: flex;
  gap: var(--spacing-xl);
  align-items: flex-start;
}

.level-number {
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

.level-content {
  flex: 1;
  padding: var(--spacing-xl);
}

.level-content h3 {
  margin-bottom: var(--spacing-sm);
}

.level-content p {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: var(--line-height-relaxed);
}

.level-example {
  font-size: var(--font-size-small);
  color: var(--color-text-tertiary);
  background: rgba(10, 132, 255, 0.08);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  border-left: 3px solid var(--color-primary);
}

.level-tag {
  display: inline-block;
  background: var(--color-primary-ultra-light);
  color: var(--color-primary);
  padding: 2px var(--spacing-sm);
  border-radius: var(--radius-sm);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-xs);
}

/* Use Cases */
.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-2xl);
}

.use-case-card {
  background: var(--color-bg-primary);
  border: 1px solid var(--color-bg-tertiary);
  border-top: 3px solid;
  border-radius: var(--radius-lg);
  padding: var(--spacing-2xl);
  transition: all var(--transition-base);
}

.use-case-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.use-case-icon {
  width: 56px; height: 56px;
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: var(--spacing-md);
}

.use-case-card h3 {
  margin-bottom: var(--spacing-sm);
}

.use-case-card > p {
  color: var(--color-text-secondary);
  font-size: var(--font-size-small);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-md);
}

.use-case-features {
  list-style: none;
}

.use-case-features li {
  padding: var(--spacing-xs) 0;
  padding-left: var(--spacing-lg);
  position: relative;
  font-size: var(--font-size-small);
  color: var(--color-text-tertiary);
}

.use-case-features li::before {
  content: ''; position: absolute; left: 0; top: 50%;
  transform: translateY(-50%);
  width: 6px; height: 6px;
  background: var(--color-primary);
  border-radius: 50%;
}

/* Delivery Models */
.delivery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-2xl);
}

.delivery-card {
  padding: var(--spacing-2xl);
  position: relative;
  transition: all var(--transition-base);
}

.delivery-card:hover {
  transform: translateY(-4px);
}

.delivery-card.featured {
  border: 2px solid var(--color-primary);
  box-shadow: var(--shadow-primary);
}

.delivery-badge {
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

.delivery-card h3 {
  margin-bottom: var(--spacing-sm);
  text-align: center;
}

.delivery-desc {
  color: var(--color-text-secondary);
  font-size: var(--font-size-small);
  line-height: var(--line-height-relaxed);
  text-align: center;
  margin-bottom: var(--spacing-lg);
}

.delivery-features {
  list-style: none;
  margin-bottom: var(--spacing-lg);
}

.delivery-features li {
  padding: var(--spacing-xs) 0;
  padding-left: var(--spacing-xl);
  position: relative;
  font-size: var(--font-size-small);
  color: var(--color-text-tertiary);
}

.delivery-features li::before {
  content: '\2713'; position: absolute; left: 0;
  color: var(--color-success); font-weight: var(--font-weight-bold);
}

.delivery-timeline {
  text-align: center;
  padding-top: var(--spacing-md);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.delivery-timeline strong {
  display: block;
  color: var(--color-primary-light);
  font-size: var(--font-size-h4);
}

.delivery-timeline span {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
}

/* Phases */
.phases {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
  max-width: 800px;
  margin: var(--spacing-2xl) auto 0;
}

.phase {
  display: flex;
  gap: var(--spacing-xl);
  align-items: flex-start;
}

.phase-number {
  width: 48px; height: 48px;
  background: var(--color-primary-ultra-light);
  color: var(--color-primary);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-bold);
  flex-shrink: 0;
  border: 2px solid var(--color-primary);
}

.phase-content {
  flex: 1;
}

.phase-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-sm);
}

.phase-header h3 {
  margin: 0;
}

.phase-duration {
  display: inline-block;
  background: var(--color-primary-ultra-light);
  color: var(--color-primary);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-semibold);
}

.phase-content > p {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: var(--line-height-relaxed);
}

.phase-deliverables {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.phase-tag {
  background: var(--color-bg-secondary);
  color: var(--color-text-secondary);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-sm);
  font-size: var(--font-size-xs);
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

.cta-buttons {
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
}

.btn-lg {
  padding: var(--spacing-lg) var(--spacing-2xl);
  font-size: var(--font-size-large);
}

/* Responsive */
@media (max-width: 768px) {
  .hero { min-height: 500px; padding: var(--spacing-4xl) 0; }
  .hero-title { font-size: var(--font-size-h2); }
  .hero-stats { flex-direction: column; gap: var(--spacing-lg); }
  .hero-cta { flex-direction: column; }
  .hero-cta .btn { width: 100%; }
  .arch-items { grid-template-columns: 1fr; }
  .security-level { flex-direction: column; text-align: center; align-items: center; }
  .phase { flex-direction: column; text-align: center; align-items: center; }
  .phase-header { flex-direction: column; gap: var(--spacing-sm); }
  .phase-deliverables { justify-content: center; }
  .cta-buttons { flex-direction: column; }
  .cta-buttons .btn { width: 100%; }
}
</style>
