# Инструкция по запуску сайта

## Быстрый старт

### 1. Установка зависимостей

```bash
cd company-website-vue
npm install
```

### 2. Запуск dev-сервера

```bash
npm run dev
```

Сайт будет доступен по адресу: **http://localhost:3000**

### 3. Сборка для продакшена

```bash
npm run build
```

Результат сборки будет в папке `dist/`

### 4. Предпросмотр production билда

```bash
npm run preview
```

## Структура проекта

```
company-website-vue/
├── src/
│   ├── components/          # Компоненты
│   │   ├── AppHeader.vue    # Шапка сайта
│   │   └── AppFooter.vue    # Подвал сайта
│   ├── views/               # Страницы
│   │   ├── HomeView.vue     # Главная
│   │   ├── ServicesView.vue # Услуги
│   │   ├── TechnologiesView.vue # Технологии
│   │   ├── PlatformView.vue # Платформа
│   │   ├── CooperationView.vue # Модели сотрудничества
│   │   ├── CasesView.vue    # Кейсы
│   │   └── ContactView.vue  # Контакты
│   ├── router/              # Маршрутизация
│   │   └── index.ts
│   ├── styles/              # Стили
│   │   └── main.css         # Главные стили
│   ├── App.vue              # Корневой компонент
│   └── main.ts              # Точка входа
├── public/                  # Статические файлы
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
└── README.md
```

## Дизайн-система

Все стили находятся в файле `src/styles/main.css` и следуют дизайн-системе описанной в:
- [DESIGN-SYSTEM.md](../company-website/DESIGN-SYSTEM.md)

### Основные CSS переменные:

- **Цвета**: `--color-primary`, `--color-accent`, `--color-text-primary`
- **Типографика**: `--font-size-h1`, `--font-weight-bold`
- **Отступы**: `--spacing-sm`, `--spacing-md`, `--spacing-lg`
- **Тени**: `--shadow-md`, `--shadow-glass`
- **Переходы**: `--transition-base`

### Utility классы:

- `.glass` - эффект стекла (glassmorphism)
- `.card` - карточка
- `.btn-primary` - основная кнопка
- `.section` - секция страницы
- `.container` - контейнер с max-width

## Навигация

Сайт использует Vue Router для навигации между страницами:

- `/` - Главная
- `/services` - Услуги
- `/technologies` - Технологии
- `/platform` - Платформа
- `/cooperation` - Модели сотрудничества
- `/cases` - Кейсы
- `/contact` - Контакты

## Особенности

- ✅ Vue 3 Composition API
- ✅ TypeScript
- ✅ Vue Router
- ✅ Полностью адаптивный дизайн
- ✅ Glassmorphism эффекты
- ✅ Плавные анимации
- ✅ SEO-friendly (meta tags)
- ✅ Accessibility (WCAG 2.1)

## Кастомизация

### Изменение цветовой схемы

Отредактируйте CSS переменные в `src/styles/main.css`:

```css
:root {
  --color-primary: #0A84FF;
  --color-accent: #00D9FF;
  /* ... */
}
```

### Добавление новой страницы

1. Создайте компонент в `src/views/NewPageView.vue`
2. Добавьте маршрут в `src/router/index.ts`
3. Добавьте ссылку в `src/components/AppHeader.vue`

### Изменение контента

Весь контент находится прямо в компонентах. Просто отредактируйте нужный `.vue` файл.

## Развертывание

### Netlify / Vercel

1. Подключите GitHub репозиторий
2. Build command: `npm run build`
3. Publish directory: `dist`

### Традиционный хостинг

1. Запустите `npm run build`
2. Загрузите содержимое папки `dist/` на ваш хостинг
3. Настройте веб-сервер для SPA (редирект на index.html)

## Nginx конфигурация для SPA

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## Поддержка браузеров

- Chrome (последние 2 версии)
- Firefox (последние 2 версии)
- Safari (последние 2 версии)
- Edge (последние 2 версии)

## Лицензия

Этот проект создан для демонстрации возможностей.
