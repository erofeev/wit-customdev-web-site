<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="container">
        <div class="footer-grid">
          <!-- Company Info -->
          <div class="footer-column">
            <h3 class="footer-title">TechSolutions</h3>
            <p class="footer-description">
              Создаем веб-системы, которые решают ваши задачи. От аналитики до поддержки.
            </p>
            <div class="footer-social">
              <a href="#" class="social-link" aria-label="Telegram">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm4.88 6.73l-1.6 7.54c-.12.54-.44.67-.89.42l-2.47-1.82-1.19 1.14c-.13.13-.24.24-.49.24l.17-2.46 4.47-4.04c.19-.17-.04-.27-.3-.1l-5.52 3.48-2.38-.75c-.52-.16-.53-.52.11-.77l9.3-3.58c.43-.16.81.1.67.77z"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.165 20 14.418 20 10c0-5.523-4.477-10-10-10z" clip-rule="evenodd"/>
                </svg>
              </a>
              <a href="#" class="social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M18.5 0h-17A1.5 1.5 0 000 1.5v17A1.5 1.5 0 001.5 20h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0018.5 0zM6 17H3V8h3v9zM4.5 6.3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8 1.8.8 1.8 1.8-.8 1.8-1.8 1.8zM17 17h-3v-4.5c0-1.1-.4-1.9-1.3-1.9-.7 0-1.1.5-1.3 1-.1.2-.1.4-.1.6V17H9V8h2.9v1.2c.4-.6 1.1-1.4 2.6-1.4 1.9 0 3.4 1.2 3.4 3.9V17z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Services -->
          <div class="footer-column">
            <h4 class="footer-heading">Услуги</h4>
            <ul class="footer-links">
              <li><RouterLink to="/services">Аналитика</RouterLink></li>
              <li><RouterLink to="/services">Дизайн</RouterLink></li>
              <li><RouterLink to="/services">Разработка</RouterLink></li>
              <li><RouterLink to="/services">Тестирование</RouterLink></li>
              <li><RouterLink to="/services">DevOps</RouterLink></li>
              <li><RouterLink to="/services">Поддержка</RouterLink></li>
            </ul>
          </div>

          <!-- Technologies -->
          <div class="footer-column">
            <h4 class="footer-heading">Технологии</h4>
            <ul class="footer-links">
              <li><RouterLink to="/technologies">Малый бизнес</RouterLink></li>
              <li><RouterLink to="/technologies">Средний бизнес</RouterLink></li>
              <li><RouterLink to="/technologies">Enterprise</RouterLink></li>
              <li><RouterLink to="/platform">Платформа</RouterLink></li>
            </ul>
          </div>

          <!-- Company -->
          <div class="footer-column">
            <h4 class="footer-heading">Компания</h4>
            <ul class="footer-links">
              <li><RouterLink to="/cases">Кейсы</RouterLink></li>
              <li><RouterLink to="/cooperation">Сотрудничество</RouterLink></li>
              <li><RouterLink to="/contact">Контакты</RouterLink></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p class="footer-copyright">
            &copy; {{ currentYear }} TechSolutions. Все права защищены.
          </p>
          <div class="footer-legal">
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Условия использования</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.footer {
  background: var(--gradient-dark);
  color: var(--color-text-inverse);
  margin-top: auto;
}

.footer-content {
  padding: var(--spacing-4xl) 0 var(--spacing-xl);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr repeat(3, 1fr);
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-3xl);
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.footer-title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-bold);
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0;
}

.footer-description {
  color: var(--color-text-tertiary);
  line-height: var(--line-height-relaxed);
  margin-bottom: var(--spacing-md);
}

.footer-social {
  display: flex;
  gap: var(--spacing-md);
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-md);
  color: var(--color-text-inverse);
  transition: all var(--transition-base);
}

.social-link:hover {
  background: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: var(--shadow-primary);
}

.footer-heading {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-text-inverse);
  margin-bottom: var(--spacing-sm);
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.footer-links a {
  color: var(--color-text-tertiary);
  font-size: var(--font-size-small);
  transition: color var(--transition-fast);
}

.footer-links a:hover {
  color: var(--color-primary-light);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--spacing-xl);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-copyright {
  color: var(--color-text-tertiary);
  font-size: var(--font-size-small);
  margin-bottom: 0;
}

.footer-legal {
  display: flex;
  gap: var(--spacing-xl);
}

.footer-legal a {
  color: var(--color-text-tertiary);
  font-size: var(--font-size-small);
  transition: color var(--transition-fast);
}

.footer-legal a:hover {
  color: var(--color-primary-light);
}

/* Mobile responsive */
@media (max-width: 968px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-xl);
  }
}

@media (max-width: 640px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }

  .footer-bottom {
    flex-direction: column;
    gap: var(--spacing-md);
    text-align: center;
  }

  .footer-legal {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
}
</style>
