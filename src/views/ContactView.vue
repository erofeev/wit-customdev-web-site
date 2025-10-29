<template>
  <div class="contact-page">
    <section class="hero hero-small">
      <div class="container">
        <h1 class="hero-title">Обсудим ваш проект?</h1>
        <p class="hero-subtitle">Расскажите о вашей задаче — мы найдем решение</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Form -->
          <div class="contact-form-wrapper card">
            <h2>Отправьте заявку</h2>
            <form @submit.prevent="handleSubmit" class="contact-form">
              <div class="form-group">
                <label for="name">Имя *</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  required
                  class="form-input"
                  placeholder="Иван Петров"
                />
              </div>

              <div class="form-group">
                <label for="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  required
                  class="form-input"
                  placeholder="ivan@company.ru"
                />
              </div>

              <div class="form-group">
                <label for="phone">Телефон</label>
                <input
                  type="tel"
                  id="phone"
                  v-model="form.phone"
                  class="form-input"
                  placeholder="+7 (900) 123-45-67"
                />
              </div>

              <div class="form-group">
                <label for="company">Компания</label>
                <input
                  type="text"
                  id="company"
                  v-model="form.company"
                  class="form-input"
                  placeholder="ООО Рога и Копыта"
                />
              </div>

              <div class="form-group">
                <label for="service">Интересующая услуга</label>
                <select id="service" v-model="form.service" class="form-select">
                  <option value="">Выберите услугу</option>
                  <option value="analytics">Аналитика и консалтинг</option>
                  <option value="design">Проектирование и дизайн</option>
                  <option value="frontend">Frontend разработка</option>
                  <option value="backend">Backend разработка</option>
                  <option value="fullstack">Полный цикл разработки</option>
                  <option value="platform">Лицензирование платформы</option>
                  <option value="support">Поддержка</option>
                </select>
              </div>

              <div class="form-group">
                <label for="budget">Бюджет</label>
                <select id="budget" v-model="form.budget" class="form-select">
                  <option value="">Выберите бюджет</option>
                  <option value="small">До 500 тыс ₽</option>
                  <option value="medium">500 тыс - 2 млн ₽</option>
                  <option value="large">2 млн - 5 млн ₽</option>
                  <option value="enterprise">Более 5 млн ₽</option>
                </select>
              </div>

              <div class="form-group">
                <label for="message">Описание задачи *</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  class="form-textarea"
                  rows="5"
                  placeholder="Расскажите о вашем проекте..."
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-block">
                Отправить заявку
              </button>
            </form>

            <p class="form-note">
              * Обязательные поля. Мы свяжемся с вами в течение 24 часов.
            </p>
          </div>

          <!-- Contact Info -->
          <div class="contact-info">
            <div class="info-card card-glass">
              <h3>Контакты</h3>
              <div class="info-items">
                <div class="info-item">
                  <div class="info-icon">📞</div>
                  <div>
                    <div class="info-label">Телефон</div>
                    <div class="info-value">+7 (495) 123-45-67</div>
                  </div>
                </div>

                <div class="info-item">
                  <div class="info-icon">✉️</div>
                  <div>
                    <div class="info-label">Email</div>
                    <div class="info-value">info@yourcompany.ru</div>
                  </div>
                </div>

                <div class="info-item">
                  <div class="info-icon">📍</div>
                  <div>
                    <div class="info-label">Адрес</div>
                    <div class="info-value">
                      Москва, ул. Примерная, д. 1<br>
                      БЦ "Технопарк", офис 101
                    </div>
                  </div>
                </div>

                <div class="info-item">
                  <div class="info-icon">⏰</div>
                  <div>
                    <div class="info-label">Время работы</div>
                    <div class="info-value">
                      Пн-Пт: 9:00 - 18:00<br>
                      Сб-Вс: Выходной
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="info-card card-glass">
              <h3>Социальные сети</h3>
              <div class="social-links">
                <a href="#" class="social-button">
                  <span>Telegram</span>
                </a>
                <a href="#" class="social-button">
                  <span>LinkedIn</span>
                </a>
                <a href="#" class="social-button">
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  budget: '',
  message: ''
})

const handleSubmit = () => {
  // TODO: Implement form submission
  console.log('Form submitted:', form)
  alert('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.')

  // Reset form
  Object.keys(form).forEach(key => {
    form[key as keyof typeof form] = ''
  })
}
</script>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-2xl);
  align-items: start;
}

.contact-form-wrapper {
  padding: var(--spacing-2xl);
}

.contact-form-wrapper h2 {
  margin-bottom: var(--spacing-xl);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.form-group label {
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  font-size: var(--font-size-small);
}

.form-input,
.form-select,
.form-textarea {
  padding: var(--spacing-md);
  border: 2px solid var(--color-bg-tertiary);
  border-radius: var(--radius-md);
  font-size: var(--font-size-base);
  font-family: var(--font-family-primary);
  transition: border-color var(--transition-fast);
  background: var(--color-bg-primary);
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(10, 132, 255, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 120px;
}

.btn-block {
  width: 100%;
  padding: var(--spacing-lg);
  font-size: var(--font-size-large);
}

.form-note {
  margin-top: var(--spacing-lg);
  font-size: var(--font-size-small);
  color: var(--color-text-tertiary);
  text-align: center;
}

/* Contact Info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  position: sticky;
  top: 100px;
}

.info-card {
  padding: var(--spacing-2xl);
}

.info-card h3 {
  margin-bottom: var(--spacing-lg);
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.info-item {
  display: flex;
  gap: var(--spacing-md);
  align-items: flex-start;
}

.info-icon {
  font-size: 1.5rem;
  flex-shrink: 0;
}

.info-label {
  font-size: var(--font-size-xs);
  color: var(--color-text-tertiary);
  margin-bottom: var(--spacing-xs);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.info-value {
  color: var(--color-text-primary);
  font-weight: var(--font-weight-medium);
  line-height: var(--line-height-relaxed);
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.social-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-md);
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-md);
  color: var(--color-text-primary);
  font-weight: var(--font-weight-medium);
  transition: all var(--transition-base);
  text-decoration: none;
}

.social-button:hover {
  background: var(--color-primary);
  color: var(--color-text-inverse);
  transform: translateX(4px);
}

@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
  }

  .contact-info {
    position: static;
  }
}
</style>
