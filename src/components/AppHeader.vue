<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="container">
      <nav class="nav">
        <RouterLink to="/" class="logo">
          <span class="logo-text">TechSolutions</span>
        </RouterLink>

        <button class="mobile-menu-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul class="nav-links" :class="{ 'nav-links-open': mobileMenuOpen }">
          <li>
            <RouterLink to="/" class="nav-link" @click="closeMobileMenu">Главная</RouterLink>
          </li>
          <li>
            <RouterLink to="/services" class="nav-link" @click="closeMobileMenu">Услуги</RouterLink>
          </li>
          <li>
            <RouterLink to="/technologies" class="nav-link" @click="closeMobileMenu">Технологии</RouterLink>
          </li>
          <li>
            <RouterLink to="/platform" class="nav-link" @click="closeMobileMenu">Платформа</RouterLink>
          </li>
          <li>
            <RouterLink to="/cooperation" class="nav-link" @click="closeMobileMenu">Сотрудничество</RouterLink>
          </li>
          <li>
            <RouterLink to="/cases" class="nav-link" @click="closeMobileMenu">Кейсы</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="btn btn-primary nav-cta" @click="closeMobileMenu">
              Обсудить проект
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

const isScrolled = ref(false)
const mobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
}

.header-scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: var(--shadow-md);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-lg) 0;
  gap: var(--spacing-lg);
}

.logo {
  display: flex;
  align-items: center;
  text-decoration: none;
}

.logo-text {
  font-family: var(--font-family-heading);
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  background: var(--gradient-accent);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.mobile-menu-toggle {
  display: none;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-sm);
}

.mobile-menu-toggle span {
  width: 24px;
  height: 2px;
  background: var(--color-text-primary);
  transition: all var(--transition-base);
}

.nav-links {
  display: flex;
  align-items: center;
  list-style: none;
  gap: var(--spacing-lg);
}

.nav-link {
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-small);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
  position: relative;
  text-decoration: none;
}

.nav-link:hover {
  color: var(--color-primary);
  background: var(--color-primary-ultra-light);
}

.nav-link.router-link-active {
  color: var(--color-primary);
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: var(--spacing-md);
  right: var(--spacing-md);
  height: 2px;
  background: var(--gradient-accent);
  border-radius: var(--radius-full);
}

.nav-cta {
  margin-left: var(--spacing-md);
  padding: var(--spacing-sm) var(--spacing-lg);
}

/* Mobile styles */
@media (max-width: 768px) {
  .mobile-menu-toggle {
    display: flex;
  }

  .nav-links {
    position: fixed;
    top: 70px;
    right: 0;
    width: 100%;
    max-width: 320px;
    height: calc(100vh - 70px);
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    flex-direction: column;
    align-items: stretch;
    padding: var(--spacing-xl);
    box-shadow: var(--shadow-2xl);
    transform: translateX(100%);
    transition: transform var(--transition-base);
    gap: var(--spacing-sm);
  }

  .nav-links-open {
    transform: translateX(0);
  }

  .nav-link {
    padding: var(--spacing-md);
    font-size: var(--font-size-base);
    text-align: center;
  }

  .nav-link.router-link-active::after {
    bottom: 0;
  }

  .nav-cta {
    margin-left: 0;
    margin-top: var(--spacing-md);
  }
}
</style>
