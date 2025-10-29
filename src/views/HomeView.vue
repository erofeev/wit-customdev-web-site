<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-bg">
        <div class="hero-glow hero-glow-1"></div>
        <div class="hero-glow hero-glow-2"></div>
        <div class="grid-lines"></div>
      </div>

      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title animate-slide-up">
            Создаем веб-системы, которые <span class="text-gradient">решают ваши задачи</span>
          </h1>
          <p class="hero-subtitle animate-slide-up">
            От аналитики до поддержки. Настраиваем технологии под ваш бизнес, а не наоборот.
          </p>
          <div class="hero-cta animate-slide-up">
            <RouterLink to="/services" class="btn btn-primary">
              Выбрать решение →
            </RouterLink>
            <RouterLink to="/contact" class="btn btn-outline">
              Обсудить проект
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem Section -->
    <section class="section">
      <div class="container">
        <h2 class="section-title text-center">Проблема вендорских решений</h2>
        <div class="comparison">
          <div class="comparison-card comparison-bad">
            <div class="comparison-header">
              <h3>Коробочное решение</h3>
            </div>
            <ul class="comparison-list">
              <li class="negative">Невозможно изменить под свои процессы</li>
              <li class="negative">Не масштабируется эффективно</li>
              <li class="negative">Привязка к разработчику</li>
              <li class="negative">Платите за то, чем не пользуетесь</li>
              <li class="negative">Дорогие лицензии</li>
            </ul>
            <div class="comparison-price">$$$$</div>
          </div>

          <div class="comparison-vs">VS</div>

          <div class="comparison-card comparison-good card-glass">
            <div class="comparison-header">
              <h3>Кастомная разработка</h3>
            </div>
            <ul class="comparison-list">
              <li class="positive">Точно под ваши процессы</li>
              <li class="positive">Масштабируется по мере роста</li>
              <li class="positive">Полный контроль над системой</li>
              <li class="positive">Оплачиваете только нужный функционал</li>
              <li class="positive">Технологии под ваши требования</li>
            </ul>
            <div class="comparison-price">$$</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Levels -->
    <section class="section section-dark">
      <div class="container">
        <h2 class="section-title text-center">Технологии под каждый уровень бизнеса</h2>
        <p class="section-subtitle text-center">
          Мы не используем "одно решение для всех". Каждому бизнесу — свой оптимальный стек.
        </p>

        <div class="grid grid-3 mt-4">
          <div class="tech-card card-glass">
            <div class="tech-icon">🚀</div>
            <h3>Малый бизнес</h3>
            <p>Быстро, надежно, доступно</p>
            <ul class="tech-list">
              <li>Монолитная архитектура</li>
              <li>PostgreSQL</li>
              <li>Node.js + React</li>
              <li>MVP за 2-4 недели</li>
            </ul>
            <RouterLink to="/technologies" class="tech-link">Подробнее →</RouterLink>
          </div>

          <div class="tech-card card-glass">
            <div class="tech-icon">📈</div>
            <h3>Средний бизнес</h3>
            <p>Готовность к росту</p>
            <ul class="tech-list">
              <li>Модульная архитектура</li>
              <li>PostgreSQL + Redis</li>
              <li>Микросервисы</li>
              <li>Горизонтальное масштабирование</li>
            </ul>
            <RouterLink to="/technologies" class="tech-link">Подробнее →</RouterLink>
          </div>

          <div class="tech-card card-glass">
            <div class="tech-icon">🏢</div>
            <h3>Enterprise</h3>
            <p>Максимальная производительность</p>
            <ul class="tech-list">
              <li>Микросервисная архитектура</li>
              <li>Графовые БД + SQL + NoSQL</li>
              <li>Kubernetes</li>
              <li>99.99% SLA</li>
            </ul>
            <RouterLink to="/technologies" class="tech-link">Подробнее →</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="section">
      <div class="container">
        <h2 class="section-title text-center">Полный спектр услуг</h2>
        <div class="services-grid">
          <div class="service-card card">
            <div class="service-number">01</div>
            <h3>Аналитика и консалтинг</h3>
            <p>Анализ бизнес-процессов, поиск узких мест, ROI-расчеты</p>
          </div>

          <div class="service-card card">
            <div class="service-number">02</div>
            <h3>Проектирование UX/UI</h3>
            <p>Пользовательские сценарии, интерфейсы, прототипирование</p>
          </div>

          <div class="service-card card">
            <div class="service-number">03</div>
            <h3>Frontend разработка</h3>
            <p>React, Vue, Angular. Адаптивная верстка, PWA</p>
          </div>

          <div class="service-card card">
            <div class="service-number">04</div>
            <h3>Backend разработка</h3>
            <p>API, базы данных, бизнес-логика, интеграции</p>
          </div>

          <div class="service-card card">
            <div class="service-number">05</div>
            <h3>Тестирование</h3>
            <p>Unit, интеграционное, нагрузочное, безопасность</p>
          </div>

          <div class="service-card card">
            <div class="service-number">06</div>
            <h3>DevOps</h3>
            <p>CI/CD, контейнеризация, мониторинг, оркестрация</p>
          </div>
        </div>

        <div class="text-center mt-4">
          <RouterLink to="/services" class="btn btn-primary">
            Все услуги →
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content card-glass">
          <h2>Готовы обсудить ваш проект?</h2>
          <p>Мы подберем оптимальный подход и технологический стек именно для вас</p>
          <RouterLink to="/contact" class="btn btn-primary btn-lg">
            Обсудить проект →
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Hero Section */
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
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
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
  top: -20%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(circle, rgba(10, 132, 255, 0.3) 0%, transparent 70%);
}

.hero-glow-2 {
  bottom: -30%;
  left: -15%;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(0, 217, 255, 0.2) 0%, transparent 70%);
}

.grid-lines {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    linear-gradient(rgba(10, 132, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(10, 132, 255, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.5;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
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
}

/* Section Title */
.section-title {
  font-size: var(--font-size-h2);
  margin-bottom: var(--spacing-md);
}

.section-subtitle {
  font-size: var(--font-size-large);
  color: var(--color-text-secondary);
  max-width: 700px;
  margin: 0 auto var(--spacing-2xl);
}

.section-dark .section-subtitle {
  color: var(--color-text-tertiary);
}

/* Comparison Cards */
.comparison {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: var(--spacing-xl);
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
}

.comparison-card {
  padding: var(--spacing-2xl);
  border-radius: var(--radius-lg);
}

.comparison-bad {
  background: var(--color-bg-secondary);
  border: 2px solid rgba(239, 68, 68, 0.2);
}

.comparison-header h3 {
  margin-bottom: var(--spacing-lg);
}

.comparison-list {
  list-style: none;
  margin-bottom: var(--spacing-lg);
}

.comparison-list li {
  padding: var(--spacing-sm) 0;
  padding-left: var(--spacing-xl);
  position: relative;
  line-height: var(--line-height-relaxed);
}

.comparison-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.comparison-list li.negative::before {
  content: '✗';
  background: rgba(239, 68, 68, 0.1);
  color: var(--color-error);
  line-height: 20px;
  text-align: center;
}

.comparison-list li.positive::before {
  content: '✓';
  background: rgba(16, 185, 129, 0.1);
  color: var(--color-success);
  line-height: 20px;
  text-align: center;
}

.comparison-price {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-bold);
  text-align: center;
  color: var(--color-text-tertiary);
}

.comparison-vs {
  font-size: var(--font-size-h3);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  text-align: center;
}

/* Tech Cards */
.tech-card {
  padding: var(--spacing-2xl);
  text-align: center;
  transition: all var(--transition-base);
}

.tech-icon {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
}

.tech-card h3 {
  margin-bottom: var(--spacing-sm);
}

.tech-card p {
  color: var(--color-text-tertiary);
  margin-bottom: var(--spacing-lg);
}

.tech-list {
  list-style: none;
  text-align: left;
  margin-bottom: var(--spacing-lg);
}

.tech-list li {
  padding: var(--spacing-xs) 0;
  color: var(--color-text-secondary);
  font-size: var(--font-size-small);
}

.tech-list li::before {
  content: '→ ';
  color: var(--color-accent);
}

.tech-link {
  color: var(--color-primary);
  font-weight: var(--font-weight-medium);
  transition: color var(--transition-fast);
}

.tech-link:hover {
  color: var(--color-accent);
}

/* Services */
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-2xl);
}

.service-card {
  position: relative;
  padding: var(--spacing-2xl);
  padding-top: var(--spacing-3xl);
}

.service-number {
  position: absolute;
  top: var(--spacing-lg);
  right: var(--spacing-lg);
  font-size: var(--font-size-h2);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary-ultra-light);
  font-family: var(--font-family-heading);
}

.service-card h3 {
  margin-bottom: var(--spacing-md);
}

.service-card p {
  color: var(--color-text-secondary);
  margin-bottom: 0;
}

/* CTA Section */
.cta-section {
  padding: var(--spacing-5xl) 0;
  position: relative;
  overflow: hidden;
}

.cta-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--gradient-hero);
  opacity: 0.5;
  pointer-events: none;
}

.cta-content {
  position: relative;
  text-align: center;
  padding: var(--spacing-4xl);
  max-width: 700px;
  margin: 0 auto;
}

.cta-content h2 {
  margin-bottom: var(--spacing-md);
}

.cta-content p {
  font-size: var(--font-size-large);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
}

.btn-lg {
  padding: var(--spacing-lg) var(--spacing-2xl);
  font-size: var(--font-size-large);
}

/* Responsive */
@media (max-width: 768px) {
  .hero {
    min-height: 500px;
    padding: var(--spacing-4xl) 0;
  }

  .hero-title {
    font-size: var(--font-size-h2);
  }

  .comparison {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }

  .comparison-vs {
    transform: rotate(90deg);
  }

  .hero-cta {
    flex-direction: column;
  }

  .hero-cta .btn {
    width: 100%;
  }
}
</style>
