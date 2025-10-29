<template>
  <div class="architecture-diagram">
    <div class="diagram-container">
      <svg
        viewBox="0 0 1000 800"
        xmlns="http://www.w3.org/2000/svg"
        class="diagram-svg"
      >
        <!-- Определения для градиентов и эффектов -->
        <defs>
          <!-- Градиент для пульсации -->
          <linearGradient id="pulseGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#00D9FF;stop-opacity:0" />
            <stop offset="50%" style="stop-color:#00D9FF;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#00D9FF;stop-opacity:0" />
          </linearGradient>

          <!-- Фильтр свечения -->
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <!-- Линии связей (рисуем сначала, чтобы были под кубиками) -->
        <!-- Frontend -> API Gateway -->
        <g class="connection" :class="{ active: activeNode === 'frontend' || activeNode === 'gateway' }">
          <line x1="500" y1="120" x2="500" y2="220" stroke="#0A84FF" stroke-width="2" opacity="0.3"/>
          <circle class="pulse" r="4" fill="url(#pulseGradient)">
            <animateMotion dur="2s" repeatCount="indefinite" path="M500,120 L500,220" />
          </circle>
        </g>

        <!-- API Gateway -> Assets Service -->
        <g class="connection" :class="{ active: activeNode === 'gateway' || activeNode === 'assets' }">
          <line x1="450" y1="280" x2="300" y2="380" stroke="#10B981" stroke-width="2" opacity="0.3"/>
          <circle class="pulse" r="4" fill="url(#pulseGradient)">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M450,280 L300,380" />
          </circle>
        </g>

        <!-- API Gateway -> BPM Hub -->
        <g class="connection" :class="{ active: activeNode === 'gateway' || activeNode === 'bpm' }">
          <line x1="550" y1="280" x2="700" y2="380" stroke="#10B981" stroke-width="2" opacity="0.3"/>
          <circle class="pulse" r="4" fill="url(#pulseGradient)">
            <animateMotion dur="2.2s" repeatCount="indefinite" path="M550,280 L700,380" />
          </circle>
        </g>

        <!-- Assets -> Microservices -->
        <g class="connection" :class="{ active: activeNode === 'assets' || activeNode === 'microservices' }">
          <line x1="300" y1="440" x2="400" y2="520" stroke="#F59E0B" stroke-width="2" opacity="0.3"/>
          <circle class="pulse" r="4" fill="url(#pulseGradient)">
            <animateMotion dur="1.8s" repeatCount="indefinite" path="M300,440 L400,520" />
          </circle>
        </g>

        <!-- BPM -> Microservices -->
        <g class="connection" :class="{ active: activeNode === 'bpm' || activeNode === 'microservices' }">
          <line x1="700" y1="440" x2="600" y2="520" stroke="#F59E0B" stroke-width="2" opacity="0.3"/>
          <circle class="pulse" r="4" fill="url(#pulseGradient)">
            <animateMotion dur="2.1s" repeatCount="indefinite" path="M700,440 L600,520" />
          </circle>
        </g>

        <!-- Microservices -> DGraph -->
        <g class="connection" :class="{ active: activeNode === 'microservices' || activeNode === 'dgraph' }">
          <line x1="500" y1="580" x2="500" y2="660" stroke="#8B5CF6" stroke-width="2" opacity="0.3"/>
          <circle class="pulse" r="4" fill="url(#pulseGradient)">
            <animateMotion dur="1.5s" repeatCount="indefinite" path="M500,580 L500,660" />
          </circle>
        </g>

        <!-- Microservices -> Redis (cache) -->
        <g class="connection" :class="{ active: activeNode === 'microservices' || activeNode === 'redis' }">
          <line x1="450" y1="550" x2="200" y2="550" stroke="#EF4444" stroke-width="2" opacity="0.3" stroke-dasharray="5,5"/>
          <circle class="pulse" r="4" fill="url(#pulseGradient)">
            <animateMotion dur="1.3s" repeatCount="indefinite" path="M450,550 L200,550" />
          </circle>
        </g>

        <!-- Microservices -> Elasticsearch (search) -->
        <g class="connection" :class="{ active: activeNode === 'microservices' || activeNode === 'elasticsearch' }">
          <line x1="550" y1="550" x2="800" y2="550" stroke="#3B82F6" stroke-width="2" opacity="0.3" stroke-dasharray="5,5"/>
          <circle class="pulse" r="4" fill="url(#pulseGradient)">
            <animateMotion dur="1.7s" repeatCount="indefinite" path="M550,550 L800,550" />
          </circle>
        </g>

        <!-- Сервисы (кубики) -->

        <!-- Frontend -->
        <g
          class="service-node"
          :class="{ active: activeNode === 'frontend', hoverable: true }"
          @mouseenter="activeNode = 'frontend'"
          @mouseleave="activeNode = null"
        >
          <rect x="400" y="50" width="200" height="70" rx="8"
                fill="rgba(10, 132, 255, 0.1)"
                stroke="#0A84FF"
                stroke-width="2"
                filter="url(#glow)"/>
          <text x="500" y="78" text-anchor="middle" fill="#0A84FF" font-weight="600" font-size="16">Frontend</text>
          <text x="500" y="98" text-anchor="middle" fill="#94A3B8" font-size="12">Angular / React / Vue</text>
        </g>

        <!-- API Gateway -->
        <g
          class="service-node"
          :class="{ active: activeNode === 'gateway', hoverable: true }"
          @mouseenter="activeNode = 'gateway'"
          @mouseleave="activeNode = null"
        >
          <rect x="400" y="220" width="200" height="70" rx="8"
                fill="rgba(16, 185, 129, 0.1)"
                stroke="#10B981"
                stroke-width="2"
                filter="url(#glow)"/>
          <text x="500" y="248" text-anchor="middle" fill="#10B981" font-weight="600" font-size="16">API Gateway</text>
          <text x="500" y="268" text-anchor="middle" fill="#94A3B8" font-size="12">REST API + Auth</text>
        </g>

        <!-- Assets Service -->
        <g
          class="service-node"
          :class="{ active: activeNode === 'assets', hoverable: true }"
          @mouseenter="activeNode = 'assets'"
          @mouseleave="activeNode = null"
        >
          <rect x="200" y="380" width="200" height="70" rx="8"
                fill="rgba(245, 158, 11, 0.1)"
                stroke="#F59E0B"
                stroke-width="2"
                filter="url(#glow)"/>
          <text x="300" y="408" text-anchor="middle" fill="#F59E0B" font-weight="600" font-size="16">Assets Service</text>
          <text x="300" y="428" text-anchor="middle" fill="#94A3B8" font-size="12">Управление сущностями</text>
        </g>

        <!-- BPM Hub -->
        <g
          class="service-node"
          :class="{ active: activeNode === 'bpm', hoverable: true }"
          @mouseenter="activeNode = 'bpm'"
          @mouseleave="activeNode = null"
        >
          <rect x="600" y="380" width="200" height="70" rx="8"
                fill="rgba(139, 92, 246, 0.1)"
                stroke="#8B5CF6"
                stroke-width="2"
                filter="url(#glow)"/>
          <text x="700" y="408" text-anchor="middle" fill="#8B5CF6" font-weight="600" font-size="16">BPM Hub</text>
          <text x="700" y="428" text-anchor="middle" fill="#94A3B8" font-size="12">Бизнес-процессы</text>
        </g>

        <!-- Microservices Framework -->
        <g
          class="service-node"
          :class="{ active: activeNode === 'microservices', hoverable: true }"
          @mouseenter="activeNode = 'microservices'"
          @mouseleave="activeNode = null"
        >
          <rect x="350" y="520" width="300" height="70" rx="8"
                fill="rgba(0, 217, 255, 0.1)"
                stroke="#00D9FF"
                stroke-width="2"
                filter="url(#glow)"/>
          <text x="500" y="548" text-anchor="middle" fill="#00D9FF" font-weight="600" font-size="16">Микросервисный фреймворк</text>
          <text x="500" y="568" text-anchor="middle" fill="#94A3B8" font-size="12">Discovery • Load Balancing • Circuit Breaker</text>
        </g>

        <!-- DGraph Database -->
        <g
          class="service-node"
          :class="{ active: activeNode === 'dgraph', hoverable: true }"
          @mouseenter="activeNode = 'dgraph'"
          @mouseleave="activeNode = null"
        >
          <rect x="350" y="660" width="300" height="70" rx="8"
                fill="rgba(139, 92, 246, 0.1)"
                stroke="#8B5CF6"
                stroke-width="2"
                filter="url(#glow)"/>
          <text x="500" y="688" text-anchor="middle" fill="#8B5CF6" font-weight="600" font-size="16">Графовая БД (DGraph)</text>
          <text x="500" y="708" text-anchor="middle" fill="#94A3B8" font-size="12">Сложные связи • Runtime schema</text>
        </g>

        <!-- Redis (side) -->
        <g
          class="service-node side-service"
          :class="{ active: activeNode === 'redis', hoverable: true }"
          @mouseenter="activeNode = 'redis'"
          @mouseleave="activeNode = null"
        >
          <rect x="50" y="520" width="150" height="60" rx="8"
                fill="rgba(239, 68, 68, 0.1)"
                stroke="#EF4444"
                stroke-width="2"
                filter="url(#glow)"/>
          <text x="125" y="545" text-anchor="middle" fill="#EF4444" font-weight="600" font-size="14">Redis</text>
          <text x="125" y="563" text-anchor="middle" fill="#94A3B8" font-size="11">Cache</text>
        </g>

        <!-- Elasticsearch (side) -->
        <g
          class="service-node side-service"
          :class="{ active: activeNode === 'elasticsearch', hoverable: true }"
          @mouseenter="activeNode = 'elasticsearch'"
          @mouseleave="activeNode = null"
        >
          <rect x="800" y="520" width="150" height="60" rx="8"
                fill="rgba(59, 130, 246, 0.1)"
                stroke="#3B82F6"
                stroke-width="2"
                filter="url(#glow)"/>
          <text x="875" y="545" text-anchor="middle" fill="#3B82F6" font-weight="600" font-size="14">Elasticsearch</text>
          <text x="875" y="563" text-anchor="middle" fill="#94A3B8" font-size="11">Search</text>
        </g>

        <!-- Легенда -->
        <g class="legend" transform="translate(50, 20)">
          <text x="0" y="0" fill="#94A3B8" font-size="12" font-weight="600">Типы связей:</text>
          <line x1="0" y1="15" x2="30" y2="15" stroke="#0A84FF" stroke-width="2"/>
          <text x="35" y="18" fill="#94A3B8" font-size="11">REST API</text>

          <line x1="0" y1="30" x2="30" y2="30" stroke="#10B981" stroke-width="2"/>
          <text x="35" y="33" fill="#94A3B8" font-size="11">Events</text>

          <line x1="0" y1="45" x2="30" y2="45" stroke="#8B5CF6" stroke-width="2"/>
          <text x="35" y="48" fill="#94A3B8" font-size="11">Database</text>

          <line x1="0" y1="60" x2="30" y2="60" stroke="#EF4444" stroke-width="2" stroke-dasharray="5,5"/>
          <text x="35" y="63" fill="#94A3B8" font-size="11">Cache/Search</text>
        </g>
      </svg>
    </div>

    <div class="diagram-info">
      <p class="info-text">
        Наведите на компонент, чтобы увидеть его связи
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeNode = ref<string | null>(null)
</script>

<style scoped>
.architecture-diagram {
  width: 100%;
  background: var(--gradient-dark);
  border-radius: var(--radius-lg);
  padding: var(--spacing-2xl);
  margin: var(--spacing-2xl) 0;
  position: relative;
  overflow: hidden;
}

.architecture-diagram::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    linear-gradient(rgba(10, 132, 255, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(10, 132, 255, 0.03) 1px, transparent 1px);
  background-size: 30px 30px;
  pointer-events: none;
  opacity: 0.5;
}

.diagram-container {
  position: relative;
  z-index: 1;
  background: rgba(15, 23, 42, 0.5);
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
  backdrop-filter: blur(10px);
}

.diagram-svg {
  width: 100%;
  height: auto;
  display: block;
}

/* Анимация пульсаций */
.connection .pulse {
  filter: drop-shadow(0 0 6px #00D9FF);
  opacity: 0.8;
}

.connection {
  transition: all var(--transition-base);
}

.connection line {
  transition: all var(--transition-base);
}

.connection.active line {
  opacity: 1 !important;
  stroke-width: 3;
  filter: drop-shadow(0 0 8px currentColor);
}

.connection.active .pulse {
  opacity: 1;
  filter: drop-shadow(0 0 12px #00D9FF);
}

/* Стили сервисов */
.service-node {
  cursor: pointer;
  transition: all var(--transition-base);
}

.service-node.hoverable:hover rect,
.service-node.active rect {
  fill-opacity: 0.3;
  stroke-width: 3;
  filter: drop-shadow(0 0 12px currentColor);
}

.service-node rect {
  transition: all var(--transition-base);
}

.service-node text {
  pointer-events: none;
  user-select: none;
}

.side-service {
  opacity: 0.8;
}

.side-service:hover,
.side-service.active {
  opacity: 1;
}

/* Легенда */
.legend text {
  font-family: var(--font-family-primary);
}

.legend line {
  opacity: 0.6;
}

/* Информация */
.diagram-info {
  text-align: center;
  margin-top: var(--spacing-lg);
  position: relative;
  z-index: 1;
}

.info-text {
  color: var(--color-text-tertiary);
  font-size: var(--font-size-small);
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .architecture-diagram {
    padding: var(--spacing-lg);
  }

  .diagram-container {
    padding: var(--spacing-sm);
  }

  .legend {
    transform: scale(0.8);
    transform-origin: left top;
  }
}

/* Дополнительная анимация свечения при наведении */
@keyframes nodeGlow {
  0%, 100% {
    filter: drop-shadow(0 0 8px currentColor);
  }
  50% {
    filter: drop-shadow(0 0 16px currentColor);
  }
}

.service-node.active rect {
  animation: nodeGlow 2s ease-in-out infinite;
}
</style>
