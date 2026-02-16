<template>
  <section class="faq-section" :class="{ 'section-dark': dark }">
    <div class="container">
      <h2 class="section-title text-center">{{ title }}</h2>
      <p v-if="subtitle" class="section-subtitle text-center">{{ subtitle }}</p>

      <div class="faq-list">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="faq-item"
          :class="{ expanded: openIndex === index }"
        >
          <button class="faq-question" @click="toggle(index)">
            <span>{{ item.question }}</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              class="faq-chevron"
              :style="{ transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)' }"
            >
              <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <transition name="faq-expand">
            <div v-if="openIndex === index" class="faq-answer">
              <p>{{ item.answer }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  title: string
  subtitle?: string
  items: Array<{ question: string; answer: string }>
  dark?: boolean
}>()

const openIndex = ref<number | null>(null)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<style scoped>
.faq-section {
  padding: var(--spacing-4xl) 0;
}

.faq-list {
  max-width: 800px;
  margin: var(--spacing-2xl) auto 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.faq-item {
  border: 2px solid var(--color-bg-tertiary);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-base);
}

.section-dark .faq-item {
  border-color: rgba(255, 255, 255, 0.1);
}

.faq-item.expanded {
  border-color: var(--color-primary);
  box-shadow: var(--shadow-md);
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
  padding: var(--spacing-lg) var(--spacing-xl);
  background: none;
  border: none;
  cursor: pointer;
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  color: var(--color-text-primary);
  text-align: left;
  font-family: var(--font-family-primary);
  transition: background var(--transition-fast);
}

.section-dark .faq-question {
  color: var(--color-text-inverse);
}

.faq-question:hover {
  background: var(--color-bg-secondary);
}

.section-dark .faq-question:hover {
  background: rgba(255, 255, 255, 0.05);
}

.faq-chevron {
  flex-shrink: 0;
  color: var(--color-primary);
  transition: transform var(--transition-base);
}

.faq-answer {
  padding: 0 var(--spacing-xl) var(--spacing-lg);
}

.faq-answer p {
  color: var(--color-text-secondary);
  line-height: var(--line-height-relaxed);
  margin: 0;
}

.section-dark .faq-answer p {
  color: var(--color-text-tertiary);
}

.faq-expand-enter-active,
.faq-expand-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.faq-expand-enter-from,
.faq-expand-leave-to {
  opacity: 0;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.faq-expand-enter-to,
.faq-expand-leave-from {
  opacity: 1;
  max-height: 500px;
}
</style>
