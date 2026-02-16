<template>
  <Transition name="sticky-slide">
    <div v-if="visible" class="sticky-cta">
      <div class="sticky-cta-inner">
        <div class="sticky-cta-text">
          <strong>{{ title }}</strong>
          <span class="sticky-cta-desc">{{ description }}</span>
        </div>
        <div class="sticky-cta-actions">
          <RouterLink :to="ctaLink" class="sticky-cta-btn">{{ ctaText }}</RouterLink>
          <button class="sticky-cta-close" @click="dismiss" aria-label="Закрыть">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
const visible = ref(false)
const dismissed = ref(false)

const title = 'Бесплатная консультация'
const description = 'Обсудим ваш проект и подберём решение'
const ctaText = 'Оставить заявку'
const ctaLink = '/contact'

const handleScroll = () => {
  if (dismissed.value) return
  if (route.path === '/contact') {
    visible.value = false
    return
  }
  visible.value = window.scrollY > 600
}

const dismiss = () => {
  dismissed.value = true
  visible.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.sticky-cta {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 900;
  background: rgba(15, 23, 42, 0.95);
  backdrop-filter: blur(12px);
  border-top: 1px solid rgba(239, 63, 41, 0.2);
  padding: 12px 0;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
}

.sticky-cta-inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.sticky-cta-text {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #fff;
  font-size: 14px;
}

.sticky-cta-text strong {
  white-space: nowrap;
}

.sticky-cta-desc {
  color: rgba(148, 163, 184, 0.8);
  font-size: 13px;
}

.sticky-cta-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.sticky-cta-btn {
  display: inline-block;
  background: var(--gradient-accent);
  color: #fff;
  padding: 8px 20px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
  transition: opacity 0.2s;
}

.sticky-cta-btn:hover {
  opacity: 0.9;
}

.sticky-cta-close {
  background: none;
  border: none;
  color: rgba(148, 163, 184, 0.5);
  cursor: pointer;
  padding: 4px;
  display: flex;
  transition: color 0.2s;
}

.sticky-cta-close:hover {
  color: #fff;
}

/* Animation */
.sticky-slide-enter-active,
.sticky-slide-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.sticky-slide-enter-from,
.sticky-slide-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

@media (max-width: 640px) {
  .sticky-cta-inner {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }

  .sticky-cta-text {
    flex-direction: column;
    gap: 2px;
  }

  .sticky-cta-btn {
    width: 100%;
    text-align: center;
  }
}
</style>
