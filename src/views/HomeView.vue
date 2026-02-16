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
          <div class="hero-badge">Практика заказной разработки WONE IT</div>
          <h1 class="hero-title animate-slide-up">
            Продукты и разработка для <span class="text-gradient">цифровой трансформации</span>
          </h1>
          <p class="hero-subtitle animate-slide-up">
            Собственные продукты WoneScale и WoneNDR. Полный цикл заказной разработки. 18 лет опыта, 500+ проектов.
          </p>
          <div class="hero-cta animate-slide-up">
            <RouterLink to="/products/wonendr" class="btn btn-primary">
              WoneNDR — безопасность сети
            </RouterLink>
            <RouterLink to="/products/wonescale" class="btn btn-outline">
              WoneScale — платформа
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section class="section">
      <div class="container">
        <h2 class="section-title text-center">Наши продукты</h2>
        <p class="section-subtitle text-center">
          Готовые решения, которые закрывают ключевые потребности бизнеса
        </p>

        <div class="products-grid">
          <RouterLink to="/products/wonendr" class="product-card card">
            <div class="product-badge product-badge-new">Новинка</div>
            <div class="product-icon">🛡️</div>
            <h3>WoneNDR</h3>
            <p class="product-tagline">Network Detection & Response</p>
            <p class="product-desc">Сетевая безопасность для среднего бизнеса. Автоматическая карта сети за 24 часа, обнаружение угроз с AI-аналитикой. В 5-10x дешевле enterprise-решений.</p>
            <ul class="product-highlights">
              <li>Установка за 30 минут</li>
              <li>Не требует SOC</li>
              <li>Есть бесплатный тариф</li>
            </ul>
            <span class="product-link">Подробнее о WoneNDR →</span>
          </RouterLink>

          <RouterLink to="/products/wonescale" class="product-card card">
            <div class="product-icon">⚡</div>
            <h3>WoneScale</h3>
            <p class="product-tagline">Платформа быстрой разработки</p>
            <p class="product-desc">Модульная платформа для создания веб-систем любой сложности. 14 готовых компонентов: от графовой БД до BPM. Прототип за дни, масштабирование без переписывания.</p>
            <ul class="product-highlights">
              <li>Архитектура «ЛЕГО»</li>
              <li>Изменения схемы без остановки</li>
              <li>Полиглот-микросервисы</li>
            </ul>
            <span class="product-link">Подробнее о WoneScale →</span>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="section section-dark">
      <div class="container">
        <h2 class="section-title text-center">Услуги разработки</h2>
        <p class="section-subtitle text-center">
          Полный цикл: от аналитики до DevOps и поддержки
        </p>

        <div class="services-grid mt-4">
          <div class="service-card card-glass">
            <div class="service-number">01</div>
            <h3>Аналитика и консалтинг</h3>
            <p>Анализ процессов, ROI-расчёты, дорожная карта цифровизации</p>
          </div>
          <div class="service-card card-glass">
            <div class="service-number">02</div>
            <h3>UX/UI дизайн</h3>
            <p>Пользовательские сценарии, прототипы, Design System</p>
          </div>
          <div class="service-card card-glass">
            <div class="service-number">03</div>
            <h3>Frontend + Backend</h3>
            <p>React, Vue, Angular, Node.js, Python, Java. REST, GraphQL, микросервисы</p>
          </div>
          <div class="service-card card-glass">
            <div class="service-number">04</div>
            <h3>Тестирование и DevOps</h3>
            <p>QA, автотесты, CI/CD, Docker, Kubernetes, мониторинг</p>
          </div>
          <div class="service-card card-glass">
            <div class="service-number">05</div>
            <h3>Поддержка 24/7</h3>
            <p>Мониторинг, обновления, развитие, SLA до 99.99%</p>
          </div>
          <div class="service-card card-glass">
            <div class="service-number">06</div>
            <h3>Кастомизация продуктов</h3>
            <p>Адаптация WoneScale и WoneNDR под специфику вашего бизнеса</p>
          </div>
        </div>

        <div class="text-center mt-4">
          <RouterLink to="/services" class="btn btn-primary">Все услуги →</RouterLink>
        </div>
      </div>
    </section>

    <!-- Social Proof -->
    <section class="section">
      <div class="container">
        <h2 class="section-title text-center">Опыт и результаты</h2>
        <div class="stats-grid">
          <div class="stat-item">
            <div class="stat-value">18+</div>
            <div class="stat-label">лет опыта</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">500+</div>
            <div class="stat-label">проектов</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">4</div>
            <div class="stat-label">офиса в России</div>
          </div>
          <div class="stat-item">
            <div class="stat-value">ISO 27001</div>
            <div class="stat-label">сертификация</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content card-glass">
          <h2>Готовы обсудить ваш проект?</h2>
          <p>Бесплатная консультация: подберём продукт или спроектируем решение под ваши задачи</p>
          <div class="cta-buttons">
            <RouterLink to="/contact" class="btn btn-primary btn-lg">Обсудить проект →</RouterLink>
            <RouterLink to="/products/wonendr" class="btn btn-outline">Бесплатный аудит сети</RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.hero {
  position: relative; min-height: 600px; display: flex; align-items: center;
  padding: var(--spacing-5xl) 0; overflow: hidden; background: var(--gradient-hero);
}

.hero-bg { position: absolute; top: 0; left: 0; right: 0; bottom: 0; overflow: hidden; pointer-events: none; }

.hero-glow { position: absolute; border-radius: 50%; filter: blur(80px); opacity: 0.4; }

.hero-glow-1 {
  top: -20%; right: -10%; width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(239, 63, 41, 0.3) 0%, transparent 70%);
}

.hero-glow-2 {
  bottom: -30%; left: -15%; width: 700px; height: 700px;
  background: radial-gradient(circle, rgba(128, 47, 185, 0.2) 0%, transparent 70%);
}

.grid-lines {
  position: absolute; top: 0; left: 0; right: 0; bottom: 0;
  background-image:
    linear-gradient(rgba(239, 63, 41, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(239, 63, 41, 0.05) 1px, transparent 1px);
  background-size: 50px 50px; opacity: 0.5;
}

.hero-content {
  position: relative; z-index: 1;
  max-width: 800px; text-align: center; margin: 0 auto;
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

.hero-title { font-size: var(--font-size-h1); margin-bottom: var(--spacing-lg); }

.hero-subtitle {
  font-size: var(--font-size-large); color: var(--color-text-secondary);
  margin-bottom: var(--spacing-2xl); line-height: var(--line-height-relaxed);
}

.hero-cta { display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap; }

.section-title { font-size: var(--font-size-h2); margin-bottom: var(--spacing-md); }
.section-subtitle {
  font-size: var(--font-size-large); color: var(--color-text-secondary);
  max-width: 700px; margin: 0 auto var(--spacing-2xl);
}
.section-dark .section-subtitle { color: var(--color-text-tertiary); }

/* Products */
.products-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: var(--spacing-xl); margin-top: var(--spacing-2xl);
}

.product-card {
  padding: var(--spacing-2xl); text-decoration: none; color: inherit;
  position: relative; display: flex; flex-direction: column;
}

.product-badge {
  position: absolute; top: var(--spacing-lg); right: var(--spacing-lg);
  padding: var(--spacing-xs) var(--spacing-md); border-radius: var(--radius-full);
  font-size: var(--font-size-xs); font-weight: var(--font-weight-semibold);
}

.product-badge-new { background: var(--gradient-accent); color: var(--color-text-inverse); }
.product-icon { font-size: 3rem; margin-bottom: var(--spacing-md); }
.product-card h3 { margin-bottom: var(--spacing-xs); }
.product-tagline {
  color: var(--color-primary); font-size: var(--font-size-small);
  font-weight: var(--font-weight-medium); margin-bottom: var(--spacing-lg);
}
.product-desc {
  color: var(--color-text-secondary); line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-lg); flex: 1;
}

.product-highlights { list-style: none; margin-bottom: var(--spacing-lg); }
.product-highlights li {
  padding: var(--spacing-xs) 0; padding-left: var(--spacing-lg);
  position: relative; font-size: var(--font-size-small); color: var(--color-text-secondary);
}
.product-highlights li::before {
  content: '✓'; position: absolute; left: 0;
  color: var(--color-success); font-weight: var(--font-weight-bold);
}

.product-link { color: var(--color-primary); font-weight: var(--font-weight-semibold); }

/* Services */
.services-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg); margin-bottom: var(--spacing-2xl);
}

.service-card {
  position: relative; padding: var(--spacing-2xl); padding-top: var(--spacing-3xl);
}

.service-number {
  position: absolute; top: var(--spacing-lg); right: var(--spacing-lg);
  font-size: var(--font-size-h2); font-weight: var(--font-weight-bold);
  color: rgba(255, 255, 255, 0.1); font-family: var(--font-family-heading);
}

.service-card h3 { margin-bottom: var(--spacing-md); }
.service-card p { color: var(--color-text-tertiary); margin-bottom: 0; }

/* Stats */
.stats-grid {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: var(--spacing-xl); margin-top: var(--spacing-2xl);
}

.stat-item { text-align: center; }
.stat-value {
  font-size: var(--font-size-h2); font-weight: var(--font-weight-bold);
  color: var(--color-primary); font-family: var(--font-family-heading);
}
.stat-label {
  font-size: var(--font-size-small); color: var(--color-text-tertiary);
  margin-top: var(--spacing-xs);
}

/* CTA Section */
.cta-section {
  padding: var(--spacing-5xl) 0; position: relative; overflow: hidden;
}

.cta-section::before {
  content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
  background: var(--gradient-hero); opacity: 0.5; pointer-events: none;
}

.cta-content {
  position: relative; text-align: center; padding: var(--spacing-4xl);
  max-width: 700px; margin: 0 auto;
}
.cta-content h2 { margin-bottom: var(--spacing-md); }
.cta-content p {
  font-size: var(--font-size-large); color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
}

.cta-buttons { display: flex; gap: var(--spacing-md); justify-content: center; flex-wrap: wrap; }

.btn-lg { padding: var(--spacing-lg) var(--spacing-2xl); font-size: var(--font-size-large); }

@media (max-width: 768px) {
  .hero { min-height: 500px; padding: var(--spacing-4xl) 0; }
  .hero-title { font-size: var(--font-size-h2); }
  .hero-cta, .cta-buttons { flex-direction: column; }
  .hero-cta .btn, .cta-buttons .btn { width: 100%; }
  .products-grid { grid-template-columns: 1fr; }
}
</style>
