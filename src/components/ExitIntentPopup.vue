<template>
  <Teleport to="body">
    <Transition name="popup">
      <div v-if="visible" class="popup-overlay" @click.self="close">
        <div class="popup-card">
          <button class="popup-close" @click="close" aria-label="Закрыть">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>

          <div class="popup-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" stroke="currentColor" stroke-width="1.5"/>
              <path d="M12 8v4M12 16h.01" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>

          <h3 class="popup-title">Уже уходите?</h3>
          <p class="popup-text">
            Получите бесплатный аудит вашей IT-инфраструктуры или консультацию по проекту от наших экспертов
          </p>

          <div class="popup-offers">
            <RouterLink to="/products/wonendr" class="popup-offer" @click="close">
              <div class="offer-icon offer-icon-shield">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div>
                <div class="offer-title">Аудит сетевой безопасности</div>
                <div class="offer-desc">Бесплатно за 48 часов</div>
              </div>
            </RouterLink>

            <RouterLink to="/contact" class="popup-offer" @click="close">
              <div class="offer-icon offer-icon-chat">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="currentColor" stroke-width="1.5"/></svg>
              </div>
              <div>
                <div class="offer-title">Консультация по проекту</div>
                <div class="offer-desc">Разберём задачу за 30 минут</div>
              </div>
            </RouterLink>
          </div>

          <button class="popup-skip" @click="close">Нет, спасибо</button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const visible = ref(false)
const shown = ref(false)

const close = () => {
  visible.value = false
  sessionStorage.setItem('exitPopupShown', '1')
}

const handleMouseLeave = (e: MouseEvent) => {
  if (shown.value) return
  if (sessionStorage.getItem('exitPopupShown')) return
  if (e.clientY <= 5 && e.relatedTarget === null) {
    visible.value = true
    shown.value = true
  }
}

onMounted(() => {
  if (!sessionStorage.getItem('exitPopupShown')) {
    document.addEventListener('mouseleave', handleMouseLeave)
  }
})

onUnmounted(() => {
  document.removeEventListener('mouseleave', handleMouseLeave)
})
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  inset: 0;
  z-index: 10000;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.popup-card {
  background: #fff;
  border-radius: 16px;
  padding: 40px 32px 32px;
  max-width: 440px;
  width: 100%;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
  text-align: center;
}

.popup-close {
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: color 0.2s;
}

.popup-close:hover {
  color: #0f172a;
}

.popup-icon {
  color: var(--color-primary, #ef3f29);
  margin-bottom: 16px;
}

.popup-title {
  font-size: 22px;
  font-weight: 700;
  color: #0f172a;
  margin-bottom: 8px;
}

.popup-text {
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 24px;
}

.popup-offers {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 16px;
}

.popup-offer {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 10px;
  border: 1px solid #e2e8f0;
  text-decoration: none;
  transition: all 0.2s;
  text-align: left;
}

.popup-offer:hover {
  border-color: var(--color-primary, #ef3f29);
  background: #fef2f0;
}

.offer-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.offer-icon-shield {
  background: rgba(239, 63, 41, 0.1);
  color: #ef3f29;
}

.offer-icon-chat {
  background: rgba(128, 47, 185, 0.1);
  color: #802fb9;
}

.offer-title {
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
}

.offer-desc {
  font-size: 12px;
  color: #94a3b8;
  margin-top: 2px;
}

.popup-skip {
  background: none;
  border: none;
  color: #94a3b8;
  font-size: 13px;
  cursor: pointer;
  padding: 8px 16px;
  transition: color 0.2s;
}

.popup-skip:hover {
  color: #64748b;
}

/* Animation */
.popup-enter-active {
  transition: opacity 0.3s ease;
}
.popup-enter-active .popup-card {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.popup-leave-active {
  transition: opacity 0.2s ease;
}
.popup-leave-active .popup-card {
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.popup-enter-from {
  opacity: 0;
}
.popup-enter-from .popup-card {
  transform: scale(0.95) translateY(10px);
  opacity: 0;
}

.popup-leave-to {
  opacity: 0;
}
.popup-leave-to .popup-card {
  transform: scale(0.95);
  opacity: 0;
}

@media (max-width: 480px) {
  .popup-card {
    padding: 32px 20px 24px;
  }
}
</style>
