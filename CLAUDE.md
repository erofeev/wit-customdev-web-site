# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Modern corporate website built with Vue.js 3 and TypeScript, featuring a hi-tech city design aesthetic with glassmorphism effects. The site is in Russian language and targets business/enterprise clients.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview production build
npm run preview
```

## Architecture

### Tech Stack
- **Vue 3** with Composition API and `<script setup>` syntax
- **TypeScript** with strict mode enabled
- **Vue Router** for client-side routing with lazy-loaded routes
- **Pinia** for state management (installed but minimal usage currently)
- **Vite** as build tool with `@` alias pointing to `src/`

### Application Structure

**Core Layout**: [App.vue](src/App.vue) defines the app shell with:
- Persistent [AppHeader.vue](src/components/AppHeader.vue) and [AppFooter.vue](src/components/AppFooter.vue)
- `<RouterView>` with fade transitions between pages

**Routing**: All routes defined in [src/router/index.ts](src/router/index.ts) with:
- `beforeEach` hook that updates `document.title` from route meta
- Scroll behavior that smoothly scrolls to top on navigation
- Lazy loading for all routes except home page
- Route structure:
  - `/` - Home (hero section, key offerings)
  - `/services` - Service catalog
  - `/technologies` - Technology stack details
  - `/platform` - Platform capabilities
  - `/cooperation` - Collaboration models
  - `/cases` - Case studies/portfolio
  - `/contact` - Contact information

**Component Structure**:
- `src/components/` - Shared/reusable components (Header, Footer, etc.)
- `src/views/` - Page-level components (one per route)
- `src/styles/main.css` - Global styles with CSS variables

## Design System

The site uses a comprehensive design system documented in [docs/DESIGN-SYSTEM.md](docs/DESIGN-SYSTEM.md). Key aspects:

### Styling Approach
- **CSS Variables**: All design tokens defined in `:root` of [src/styles/main.css](src/styles/main.css)
- **Glassmorphism**: Heavy use of `backdrop-filter: blur()` with semi-transparent backgrounds
- **No CSS Framework**: Pure CSS with utility classes

### Key CSS Variables
```css
/* Primary blue: --color-primary (#0A84FF) */
/* Accent cyan: --color-accent (#00D9FF) */
/* Text hierarchy: --color-text-primary, --color-text-secondary, --color-text-tertiary */
/* Spacing: --spacing-sm through --spacing-5xl (8px grid system) */
/* Shadows: --shadow-glass, --shadow-primary, --shadow-accent */
```

### Common Utility Classes
- `.glass` - Glassmorphism effect with backdrop blur
- `.card` - Card component with appropriate shadows
- `.btn-primary`, `.btn-secondary` - Button styles with hover effects
- `.container` - Centered container with max-width: 1280px

### Design Principles
1. **Hi-tech city aesthetic** - Modern, professional, not flashy
2. **Glass and depth** - Layered transparent surfaces
3. **Smooth animations** - Subtle transitions using `transform` and `opacity`
4. **Responsive** - Mobile-first approach with simplified effects on smaller screens

## Important Notes

### Adding New Pages
1. Create view component in `src/views/[PageName]View.vue`
2. Add route to [src/router/index.ts](src/router/index.ts) with lazy import and meta title
3. Add navigation link to [src/components/AppHeader.vue](src/components/AppHeader.vue)

### Styling Guidelines
- Use existing CSS variables from design system rather than hardcoded values
- Match the glassmorphism aesthetic for new components
- Test backdrop-filter on multiple browsers (Safari requires `-webkit-` prefix)
- Use `.glass` class or create variants following established patterns in main.css

### TypeScript Configuration
- Path alias `@/*` resolves to `src/*` (configured in both [vite.config.ts](vite.config.ts) and [tsconfig.json](tsconfig.json))
- Strict mode enabled with `noUnusedLocals` and `noUnusedParameters`
- TypeScript compilation runs as part of build process via `vue-tsc`

### Router Behavior
- All page transitions use fade animation (defined in [App.vue](src/App.vue))
- Route titles automatically update document title via `beforeEach` hook
- Navigation preserves scroll position when using browser back/forward
- Deep links work correctly in SPA mode with proper server configuration

## Deployment Notes

**Build Output**: `dist/` directory contains compiled SPA

**Server Configuration Required**: Since this is an SPA, the web server must redirect all routes to `index.html`. Example Nginx config:
```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

**Supported Platforms**: Netlify, Vercel, traditional hosting (all require SPA routing support)
