# Дизайн-система: Хай-тек сити

## 🎨 Концепция дизайна

**Стиль:** Современный хай-тек сити
**Ключевые элементы:** Стекло, тени, градиенты, четкие линии
**Характер:** Деловой, четкий, технологичный, не пафосный
**Вдохновение:** Современная архитектура небоскребов, стеклянные фасады, минимализм

---

## 🎨 Цветовая палитра

### Основные цвета

```css
/* Primary - Технологичный синий */
--color-primary: #0A84FF;
--color-primary-dark: #0066CC;
--color-primary-light: #409CFF;
--color-primary-ultra-light: #E5F2FF;

/* Secondary - Холодный серый (стекло) */
--color-secondary: #2C3E50;
--color-secondary-dark: #1A252F;
--color-secondary-light: #475569;

/* Accent - Киберпанк акцент */
--color-accent: #00D9FF;
--color-accent-glow: rgba(0, 217, 255, 0.3);
```

### Нейтральные цвета (градации серого)

```css
/* Светлая тема */
--color-bg-primary: #FFFFFF;
--color-bg-secondary: #F8FAFC;
--color-bg-tertiary: #F1F5F9;

/* Темные поверхности (стекло) */
--color-glass-dark: rgba(15, 23, 42, 0.6);
--color-glass-light: rgba(255, 255, 255, 0.1);

/* Текст */
--color-text-primary: #0F172A;
--color-text-secondary: #475569;
--color-text-tertiary: #94A3B8;
--color-text-inverse: #FFFFFF;
```

### Семантические цвета

```css
--color-success: #10B981;
--color-warning: #F59E0B;
--color-error: #EF4444;
--color-info: #3B82F6;
```

---

## 📐 Типографика

### Шрифты

```css
/* Основной шрифт - современный sans-serif */
--font-family-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Заголовки - технологичный */
--font-family-heading: 'Space Grotesk', 'Inter', sans-serif;

/* Моноширинный - для кода и технических данных */
--font-family-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Размеры шрифтов

```css
/* Заголовки */
--font-size-h1: 3.5rem;    /* 56px */
--font-size-h2: 2.5rem;    /* 40px */
--font-size-h3: 2rem;      /* 32px */
--font-size-h4: 1.5rem;    /* 24px */
--font-size-h5: 1.25rem;   /* 20px */
--font-size-h6: 1rem;      /* 16px */

/* Текст */
--font-size-base: 1rem;        /* 16px */
--font-size-large: 1.125rem;   /* 18px */
--font-size-small: 0.875rem;   /* 14px */
--font-size-xs: 0.75rem;       /* 12px */

/* Вес */
--font-weight-light: 300;
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

### Межстрочный интервал

```css
--line-height-tight: 1.25;
--line-height-normal: 1.5;
--line-height-relaxed: 1.75;
```

---

## 🔲 Сетка и отступы

### Spacing система (8px grid)

```css
--spacing-xs: 0.25rem;   /* 4px */
--spacing-sm: 0.5rem;    /* 8px */
--spacing-md: 1rem;      /* 16px */
--spacing-lg: 1.5rem;    /* 24px */
--spacing-xl: 2rem;      /* 32px */
--spacing-2xl: 3rem;     /* 48px */
--spacing-3xl: 4rem;     /* 64px */
--spacing-4xl: 6rem;     /* 96px */
--spacing-5xl: 8rem;     /* 128px */
```

### Container

```css
--container-max-width: 1280px;
--container-padding: var(--spacing-xl);

/* Брейкпоинты */
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

### Grid система

```
12-колоночная сетка
Gap: 24px (--spacing-lg)
```

---

## 🎭 Тени и глубина (Стеклянный эффект)

### Shadows (многослойные тени для эффекта стекла)

```css
/* Легкие тени */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
             0 2px 4px -1px rgba(0, 0, 0, 0.06);

/* Средние тени (карточки) */
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
             0 4px 6px -2px rgba(0, 0, 0, 0.05);

/* Сильные тени (модалы, поп-аперы) */
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
             0 10px 10px -5px rgba(0, 0, 0, 0.04);

--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);

/* Стеклянный эффект (glassmorphism) */
--shadow-glass: 0 8px 32px 0 rgba(31, 38, 135, 0.15);

/* Внутренние тени */
--shadow-inner: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);

/* Цветные тени для акцентов */
--shadow-primary: 0 10px 30px -5px rgba(10, 132, 255, 0.3);
--shadow-accent: 0 10px 30px -5px rgba(0, 217, 255, 0.4);
```

### Z-index слои

```css
--z-dropdown: 1000;
--z-sticky: 1020;
--z-fixed: 1030;
--z-modal-backdrop: 1040;
--z-modal: 1050;
--z-popover: 1060;
--z-tooltip: 1070;
```

---

## 🌈 Эффекты и анимации

### Glassmorphism (Стеклянный эффект)

```css
.glass-effect {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: var(--shadow-glass);
}

.glass-effect-dark {
  background: rgba(15, 23, 42, 0.6);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Градиенты

```css
/* Hero градиент */
--gradient-hero: linear-gradient(
  135deg,
  rgba(10, 132, 255, 0.1) 0%,
  rgba(0, 217, 255, 0.05) 100%
);

/* Акцентный градиент */
--gradient-accent: linear-gradient(
  90deg,
  #0A84FF 0%,
  #00D9FF 100%
);

/* Темный градиент (футер, секции) */
--gradient-dark: linear-gradient(
  180deg,
  #0F172A 0%,
  #1E293B 100%
);

/* Стеклянный градиент */
--gradient-glass: linear-gradient(
  135deg,
  rgba(255, 255, 255, 0.1) 0%,
  rgba(255, 255, 255, 0.05) 100%
);
```

### Transitions

```css
--transition-fast: 150ms ease-in-out;
--transition-base: 250ms ease-in-out;
--transition-slow: 350ms ease-in-out;
--transition-slower: 500ms ease-in-out;

/* Конкретные свойства */
--transition-colors: color 150ms ease-in-out,
                     background-color 150ms ease-in-out,
                     border-color 150ms ease-in-out;

--transition-transform: transform 250ms ease-in-out;
--transition-all: all 250ms ease-in-out;
```

### Hover эффекты

```css
/* Карточки - поднятие */
.card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  transition: var(--transition-base);
}

/* Кнопки - свечение */
.button-primary:hover {
  box-shadow: var(--shadow-primary);
  transform: translateY(-2px);
}

/* Стекло - увеличение прозрачности */
.glass:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
}
```

### Анимации

```css
/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Slide up */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Glow pulse (для акцентов) */
@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(0, 217, 255, 0.4);
  }
  50% {
    box-shadow: 0 0 40px rgba(0, 217, 255, 0.8);
  }
}

/* Shimmer (загрузка) */
@keyframes shimmer {
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
}
```

---

## 🧩 Компоненты

### Кнопки

```css
/* Primary Button */
.btn-primary {
  background: var(--gradient-accent);
  color: var(--color-text-inverse);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: 8px;
  font-weight: var(--font-weight-semibold);
  box-shadow: var(--shadow-md);
  transition: var(--transition-base);
}

.btn-primary:hover {
  box-shadow: var(--shadow-primary);
  transform: translateY(-2px);
}

/* Secondary Button (Glass) */
.btn-secondary {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: var(--color-text-primary);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: 8px;
  transition: var(--transition-base);
}

/* Outline Button */
.btn-outline {
  background: transparent;
  border: 2px solid var(--color-primary);
  color: var(--color-primary);
  padding: var(--spacing-md) var(--spacing-xl);
  border-radius: 8px;
  transition: var(--transition-colors);
}

.btn-outline:hover {
  background: var(--color-primary);
  color: var(--color-text-inverse);
}
```

### Карточки

```css
/* Стеклянная карточка */
.card-glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-glass);
  transition: var(--transition-base);
}

.card-glass:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-xl);
  background: rgba(255, 255, 255, 0.15);
}

/* Белая карточка */
.card-white {
  background: var(--color-bg-primary);
  border-radius: 16px;
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-lg);
  transition: var(--transition-base);
}

/* Темная карточка с градиентом */
.card-dark {
  background: var(--gradient-dark);
  border-radius: 16px;
  padding: var(--spacing-2xl);
  color: var(--color-text-inverse);
  box-shadow: var(--shadow-2xl);
}
```

### Навигация

```css
/* Header с эффектом стекла */
.header {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: var(--z-sticky);
  box-shadow: var(--shadow-sm);
}

/* Навигационные ссылки */
.nav-link {
  color: var(--color-text-secondary);
  font-weight: var(--font-weight-medium);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: 6px;
  transition: var(--transition-colors);
  position: relative;
}

.nav-link:hover {
  color: var(--color-primary);
  background: var(--color-primary-ultra-light);
}

/* Активная ссылка - подчеркивание */
.nav-link.active::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--gradient-accent);
}
```

### Формы

```css
/* Input поле */
.input {
  background: var(--color-bg-primary);
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: var(--spacing-md);
  font-size: var(--font-size-base);
  transition: var(--transition-colors);
}

.input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(10, 132, 255, 0.1);
}

/* Glass input */
.input-glass {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: var(--spacing-md);
  color: var(--color-text-primary);
}
```

---

## 🎯 Секции и Layout

### Hero секция

```css
.hero {
  background: var(--gradient-hero);
  position: relative;
  overflow: hidden;
  padding: var(--spacing-5xl) 0;
}

/* Декоративные элементы (геометрия) */
.hero::before {
  content: '';
  position: absolute;
  top: -50%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(10, 132, 255, 0.1) 0%,
    transparent 70%
  );
  border-radius: 50%;
}
```

### Секции с разделителями

```css
/* Диагональный разделитель (скошенный) */
.section-angled {
  position: relative;
  padding: var(--spacing-4xl) 0;
}

.section-angled::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: var(--color-bg-primary);
  transform: skewY(-2deg);
  transform-origin: top left;
}

/* Градиентный фон секции */
.section-gradient {
  background: var(--gradient-dark);
  color: var(--color-text-inverse);
  padding: var(--spacing-4xl) 0;
}
```

---

## 🌟 Декоративные элементы

### Геометрические фигуры (хай-тек декор)

```css
/* Светящиеся круги */
.glow-circle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(0, 217, 255, 0.2) 0%,
    transparent 70%
  );
  filter: blur(40px);
  pointer-events: none;
}

/* Линии сетки (grid lines) */
.grid-lines {
  background-image:
    linear-gradient(rgba(10, 132, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(10, 132, 255, 0.05) 1px, transparent 1px);
  background-size: 40px 40px;
}

/* Диагональные линии */
.diagonal-lines {
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(10, 132, 255, 0.03) 10px,
    rgba(10, 132, 255, 0.03) 20px
  );
}
```

### Иконки и графика

```
- Использовать outline icons (не filled)
- Размеры: 16px, 20px, 24px, 32px, 48px
- Стиль: минималистичный, геометрический
- Библиотека: Heroicons, Lucide, или Phosphor Icons
```

---

## 📱 Адаптивность

### Мобильные устройства

```css
/* Уменьшенные отступы */
@media (max-width: 768px) {
  :root {
    --spacing-3xl: 3rem;
    --spacing-4xl: 4rem;
    --spacing-5xl: 5rem;
  }

  /* Меньшие размеры шрифтов */
  --font-size-h1: 2.5rem;
  --font-size-h2: 2rem;
  --font-size-h3: 1.5rem;
}

/* Упрощение glassmorphism на мобильных */
@media (max-width: 768px) {
  .glass-effect {
    backdrop-filter: blur(5px);
    background: rgba(255, 255, 255, 0.15);
  }
}
```

---

## ♿ Доступность

### Контрастность

```
- Текст на светлом фоне: минимум 4.5:1
- Крупный текст (18px+): минимум 3:1
- Интерактивные элементы: четко видимый focus state
```

### Focus states

```css
/* Кастомный focus ring */
*:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* Focus для кнопок */
.btn:focus-visible {
  outline: 2px solid var(--color-primary);
  outline-offset: 4px;
}
```

---

## 🎬 Принципы анимаций

1. **Subtle, not flashy** - анимации должны быть плавными и ненавязчивыми
2. **Performance first** - использовать transform и opacity вместо других свойств
3. **Meaningful motion** - анимации должны помогать пользователю понять интерфейс
4. **Consistent timing** - использовать единую систему timing functions
5. **Respect prefers-reduced-motion**

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 📦 Ресурсы и инструменты

### Рекомендуемые библиотеки

- **Иконки:** Heroicons, Lucide Icons
- **Анимации:** GSAP, Framer Motion (React), Vue Motion
- **3D элементы (опционально):** Three.js для декоративных эффектов
- **Scroll анимации:** Intersection Observer API, ScrollTrigger

### Инспирация

- Awwwards - современные веб-дизайны
- Dribbble - UI/UX концепции
- Behance - дизайн-проекты
- Apple.com - минималистичный хай-тек
- Stripe.com - glassmorphism и градиенты

---

Эта дизайн-система обеспечивает:
- ✅ Современный хай-тек вид
- ✅ Эффект стекла и глубины
- ✅ Четкость и профессионализм
- ✅ Консистентность во всех компонентах
- ✅ Адаптивность и доступность
