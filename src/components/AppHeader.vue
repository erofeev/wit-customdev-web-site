<template>
  <header class="header" :class="{ 'header-scrolled': isScrolled }">
    <div class="container">
      <nav class="nav">
        <RouterLink to="/" class="logo">
          <span class="logo-text">WONE</span><span class="logo-suffix">IT</span>
          <span class="logo-divider">|</span>
          <span class="logo-practice">Разработка</span>
        </RouterLink>

        <button class="mobile-menu-toggle" @click="toggleMobileMenu" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul class="nav-links" :class="{ 'nav-links-open': mobileMenuOpen }">
          <li class="nav-dropdown" @mouseenter="openDropdown" @mouseleave="closeDropdown">
            <button class="nav-link nav-dropdown-trigger" @click="toggleDropdown">
              Продукты
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" class="dropdown-chevron" :class="{ open: dropdownOpen }">
                <path d="M3 5L6 8L9 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
            </button>
            <ul class="nav-dropdown-menu" :class="{ 'nav-dropdown-open': dropdownOpen }">
              <li>
                <RouterLink to="/products/wonescale" class="dropdown-link" @click="closeAll">
                  <strong>WoneScale</strong>
                  <span>Платформа быстрой разработки</span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/products/wonendr" class="dropdown-link" @click="closeAll">
                  <strong>WoneNDR</strong>
                  <span>Сетевая безопасность (NDR)</span>
                </RouterLink>
              </li>
              <li>
                <RouterLink to="/products/data-showcase" class="dropdown-link" @click="closeAll">
                  <strong>B2B Витрина данных</strong>
                  <span>Корпоративный портал данных</span>
                </RouterLink>
              </li>
            </ul>
          </li>
          <li>
            <RouterLink to="/services" class="nav-link" @click="closeAll">Услуги</RouterLink>
          </li>
          <li>
            <RouterLink to="/technologies" class="nav-link" @click="closeAll">Технологии</RouterLink>
          </li>
          <li>
            <RouterLink to="/cases" class="nav-link" @click="closeAll">Кейсы</RouterLink>
          </li>
          <li>
            <RouterLink to="/cooperation" class="nav-link" @click="closeAll">Сотрудничество</RouterLink>
          </li>
          <li>
            <RouterLink to="/knowledge" class="nav-link" @click="closeAll">База знаний</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" class="btn btn-primary nav-cta" @click="closeAll">
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
const dropdownOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (!mobileMenuOpen.value) dropdownOpen.value = false
}

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value
}

const openDropdown = () => {
  if (window.innerWidth > 768) dropdownOpen.value = true
}

const closeDropdown = () => {
  if (window.innerWidth > 768) dropdownOpen.value = false
}

const closeAll = () => {
  mobileMenuOpen.value = false
  dropdownOpen.value = false
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
  gap: var(--spacing-xs);
  text-decoration: none;
}

.logo-text {
  font-family: var(--font-family-heading);
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
}

.logo-suffix {
  font-family: var(--font-family-heading);
  font-size: 1.5rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-accent);
}

.logo-divider {
  color: var(--color-text-tertiary);
  font-weight: var(--font-weight-light);
  margin: 0 var(--spacing-xs);
}

.logo-practice {
  font-family: var(--font-family-heading);
  font-size: 0.875rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-text-secondary);
  letter-spacing: 0.5px;
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
  background: none;
  border: none;
  cursor: pointer;
  font-family: var(--font-family-primary);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
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

/* Dropdown */
.nav-dropdown {
  position: relative;
}

.dropdown-chevron {
  transition: transform var(--transition-fast);
}

.dropdown-chevron.open {
  transform: rotate(180deg);
}

.nav-dropdown-menu {
  display: none;
  position: absolute;
  top: calc(100% + var(--spacing-sm));
  left: 0;
  min-width: 280px;
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-xl);
  border: 1px solid var(--color-bg-tertiary);
  padding: var(--spacing-sm);
  list-style: none;
  z-index: var(--z-dropdown);
}

.nav-dropdown-open {
  display: block;
}

.dropdown-link {
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  text-decoration: none;
  transition: background var(--transition-fast);
}

.dropdown-link:hover {
  background: var(--color-primary-ultra-light);
}

.dropdown-link strong {
  color: var(--color-text-primary);
  font-size: var(--font-size-base);
}

.dropdown-link span {
  color: var(--color-text-tertiary);
  font-size: var(--font-size-xs);
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
    justify-content: center;
  }

  .nav-link.router-link-active::after {
    bottom: 0;
  }

  .nav-cta {
    margin-left: 0;
    margin-top: var(--spacing-md);
  }

  .nav-dropdown-menu {
    position: static;
    box-shadow: none;
    border: none;
    min-width: auto;
    padding: 0;
    background: var(--color-bg-secondary);
    border-radius: var(--radius-md);
    margin-top: var(--spacing-sm);
  }

  .dropdown-link {
    text-align: center;
    align-items: center;
  }
}
</style>
