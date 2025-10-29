<template>
  <div class="architecture-diagram">
    <div class="diagram-container">
      <svg
        viewBox="0 0 1600 1200"
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

          <!-- Градиент для микросервисов -->
          <linearGradient id="microserviceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#F59E0B;stop-opacity:0.2" />
            <stop offset="100%" style="stop-color:#EF4444;stop-opacity:0.1" />
          </linearGradient>

          <!-- Фильтр свечения -->
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          <!-- Тень для контейнеров -->
          <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" flood-opacity="0.3"/>
          </filter>
        </defs>

        <!-- Контейнер инфраструктуры (серый фон) -->
        <rect x="100" y="200" width="1400" height="780" rx="12"
              fill="rgba(15, 23, 42, 0.3)"
              stroke="rgba(148, 163, 184, 0.3)"
              stroke-width="2"
              stroke-dasharray="10,5"/>

        <!-- Линии связей (рисуем сначала, чтобы были под кубиками) -->
        <!-- Internet -> Traefik -->
        <g class="connection">
          <line x1="800" y1="80" x2="800" y2="150" stroke="#00D9FF" stroke-width="2" opacity="0.4"/>
          <circle class="pulse" r="4" fill="#00D9FF">
            <animateMotion dur="2s" repeatCount="indefinite" path="M800,80 L800,150" />
          </circle>
        </g>

        <!-- Traefik -> Nginx #1 -->
        <g class="connection">
          <line x1="700" y1="200" x2="230" y2="260" stroke="#10B981" stroke-width="2" opacity="0.3"/>
          <circle class="pulse" r="4" fill="url(#pulseGradient)">
            <animateMotion dur="2.5s" repeatCount="indefinite" path="M700,200 L230,260" />
          </circle>
        </g>

        <!-- Traefik -> Nginx #2 -->
        <g class="connection">
          <line x1="720" y1="210" x2="230" y2="365" stroke="#10B981" stroke-width="2" opacity="0.3"/>
          <circle class="pulse" r="4" fill="url(#pulseGradient)">
            <animateMotion dur="2.7s" repeatCount="indefinite" path="M720,210 L230,365" />
          </circle>
        </g>

        <!-- Traefik -> API Gateway -->
        <g class="connection">
          <line x1="800" y1="210" x2="800" y2="350" stroke="#10B981" stroke-width="2" opacity="0.3"/>
          <circle class="pulse" r="4" fill="url(#pulseGradient)">
            <animateMotion dur="2s" repeatCount="indefinite" path="M800,210 L800,350" />
          </circle>
        </g>

        <!-- NATS connections to microservices -->
        <g class="connection">
          <line x1="400" y1="420" x2="350" y2="500" stroke="#3B82F6" stroke-width="1.5" opacity="0.3" stroke-dasharray="5,5"/>
          <circle class="pulse" r="3" fill="#3B82F6">
            <animateMotion dur="1.8s" repeatCount="indefinite" path="M400,420 L350,500" />
          </circle>
        </g>
        <g class="connection">
          <line x1="400" y1="420" x2="650" y2="500" stroke="#3B82F6" stroke-width="1.5" opacity="0.3" stroke-dasharray="5,5"/>
          <circle class="pulse" r="3" fill="#3B82F6">
            <animateMotion dur="1.9s" repeatCount="indefinite" path="M400,420 L650,500" />
          </circle>
        </g>
        <g class="connection">
          <line x1="400" y1="420" x2="950" y2="500" stroke="#3B82F6" stroke-width="1.5" opacity="0.3" stroke-dasharray="5,5"/>
          <circle class="pulse" r="3" fill="#3B82F6">
            <animateMotion dur="2.1s" repeatCount="indefinite" path="M400,420 L950,500" />
          </circle>
        </g>
        <g class="connection">
          <line x1="400" y1="420" x2="1250" y2="500" stroke="#3B82F6" stroke-width="1.5" opacity="0.3" stroke-dasharray="5,5"/>
          <circle class="pulse" r="3" fill="#3B82F6">
            <animateMotion dur="2.3s" repeatCount="indefinite" path="M400,420 L1250,500" />
          </circle>
        </g>
        <g class="connection">
          <line x1="410" y1="430" x2="1380" y2="530" stroke="#3B82F6" stroke-width="1.5" opacity="0.3" stroke-dasharray="5,5"/>
          <circle class="pulse" r="3" fill="#3B82F6">
            <animateMotion dur="2.4s" repeatCount="indefinite" path="M410,430 L1380,530" />
          </circle>
        </g>

        <!-- API Gateway -> Microservices -->
        <g class="connection">
          <line x1="750" y1="420" x2="350" y2="500" stroke="#F59E0B" stroke-width="2" opacity="0.3"/>
          <circle class="pulse" r="4" fill="#F59E0B">
            <animateMotion dur="1.6s" repeatCount="indefinite" path="M750,420 L350,500" />
          </circle>
        </g>
        <g class="connection">
          <line x1="800" y1="420" x2="650" y2="500" stroke="#F59E0B" stroke-width="2" opacity="0.3"/>
          <circle class="pulse" r="4" fill="#F59E0B">
            <animateMotion dur="1.5s" repeatCount="indefinite" path="M800,420 L650,500" />
          </circle>
        </g>
        <g class="connection">
          <line x1="820" y1="420" x2="950" y2="500" stroke="#F59E0B" stroke-width="2" opacity="0.3"/>
          <circle class="pulse" r="4" fill="#F59E0B">
            <animateMotion dur="1.7s" repeatCount="indefinite" path="M820,420 L950,500" />
          </circle>
        </g>
        <g class="connection">
          <line x1="850" y1="420" x2="1250" y2="500" stroke="#F59E0B" stroke-width="2" opacity="0.3"/>
          <circle class="pulse" r="4" fill="#F59E0B">
            <animateMotion dur="1.8s" repeatCount="indefinite" path="M850,420 L1250,500" />
          </circle>
        </g>
        <g class="connection">
          <line x1="870" y1="420" x2="1380" y2="530" stroke="#F59E0B" stroke-width="2" opacity="0.3"/>
          <circle class="pulse" r="4" fill="#F59E0B">
            <animateMotion dur="1.9s" repeatCount="indefinite" path="M870,420 L1380,530" />
          </circle>
        </g>

        <!-- Microservices -> Dgraph -->
        <g class="connection">
          <line x1="350" y1="620" x2="950" y2="750" stroke="#8B5CF6" stroke-width="2" opacity="0.3"/>
          <circle class="pulse" r="4" fill="#8B5CF6">
            <animateMotion dur="2s" repeatCount="indefinite" path="M350,620 L950,750" />
          </circle>
        </g>
        <g class="connection">
          <line x1="650" y1="620" x2="950" y2="750" stroke="#8B5CF6" stroke-width="2" opacity="0.3"/>
          <circle class="pulse" r="4" fill="#8B5CF6">
            <animateMotion dur="1.8s" repeatCount="indefinite" path="M650,620 L950,750" />
          </circle>
        </g>
        <g class="connection">
          <line x1="950" y1="620" x2="950" y2="750" stroke="#8B5CF6" stroke-width="2" opacity="0.3"/>
          <circle class="pulse" r="4" fill="#8B5CF6">
            <animateMotion dur="1.5s" repeatCount="indefinite" path="M950,620 L950,750" />
          </circle>
        </g>
        <g class="connection">
          <line x1="1250" y1="620" x2="1100" y2="750" stroke="#8B5CF6" stroke-width="2" opacity="0.3"/>
          <circle class="pulse" r="4" fill="#8B5CF6">
            <animateMotion dur="1.7s" repeatCount="indefinite" path="M1250,620 L1100,750" />
          </circle>
        </g>
        <g class="connection">
          <line x1="1380" y1="630" x2="1100" y2="760" stroke="#8B5CF6" stroke-width="2" opacity="0.3"/>
          <circle class="pulse" r="4" fill="#8B5CF6">
            <animateMotion dur="1.9s" repeatCount="indefinite" path="M1380,630 L1100,760" />
          </circle>
        </g>

        <!-- Dgraph Zero <-> Alpha -->
        <g class="connection">
          <line x1="1020" y1="800" x2="1120" y2="800" stroke="#8B5CF6" stroke-width="2" opacity="0.4" stroke-dasharray="5,5"/>
          <circle class="pulse" r="4" fill="#8B5CF6">
            <animateMotion dur="1.2s" repeatCount="indefinite" path="M1020,800 L1120,800" />
          </circle>
          <text x="1070" y="790" fill="#8B5CF6" font-size="10" text-anchor="middle">replication</text>
        </g>

        <!-- Infrastructure connections (dashed, lighter) -->
        <g class="connection">
          <line x1="350" y1="620" x2="250" y2="1000" stroke="#94A3B8" stroke-width="1" opacity="0.2" stroke-dasharray="3,3"/>
          <line x1="650" y1="620" x2="450" y2="1000" stroke="#94A3B8" stroke-width="1" opacity="0.2" stroke-dasharray="3,3"/>
          <line x1="950" y1="620" x2="650" y2="1000" stroke="#94A3B8" stroke-width="1" opacity="0.2" stroke-dasharray="3,3"/>
        </g>

        <!-- Сервисы (кубики) -->

        <!-- Internet / User -->
        <g class="service-node">
          <circle cx="800" cy="50" r="30" fill="rgba(0, 217, 255, 0.15)" stroke="#00D9FF" stroke-width="2"/>
          <text x="800" y="30" text-anchor="middle" fill="#00D9FF" font-size="12">👤</text>
          <text x="800" y="55" text-anchor="middle" fill="#00D9FF" font-weight="600" font-size="14">Internet</text>
          <text x="800" y="95" text-anchor="middle" fill="#94A3B8" font-size="10">User Devices</text>
        </g>

        <!-- Traefik (On-premise Gateway) -->
        <g
          class="service-node"
          :class="{ active: activeNode === 'traefik', hoverable: true }"
          @mouseenter="activeNode = 'traefik'"
          @mouseleave="activeNode = null"
        >
          <rect x="650" y="150" width="300" height="70" rx="8"
                fill="rgba(236, 72, 153, 0.15)"
                stroke="#EC4899"
                stroke-width="2"
                filter="url(#glow)"/>
          <text x="800" y="178" text-anchor="middle" fill="#EC4899" font-weight="700" font-size="16">Traefik</text>
          <text x="800" y="198" text-anchor="middle" fill="#94A3B8" font-size="12">On-premise Gateway / Reverse Proxy</text>
        </g>

        <!-- Nginx + Frontend - Instance 1 -->
        <g
          class="service-node"
          :class="{ active: activeNode === 'nginx1', hoverable: true }"
          @mouseenter="activeNode = 'nginx1'"
          @mouseleave="activeNode = null"
        >
          <rect x="130" y="240" width="120" height="90" rx="8"
                fill="rgba(34, 197, 94, 0.15)"
                stroke="#22C55E"
                stroke-width="2"
                filter="url(#glow)"/>
          <text x="190" y="262" text-anchor="middle" fill="#22C55E" font-weight="600" font-size="13">Nginx #1</text>
          <line x1="138" y1="270" x2="242" y2="270" stroke="#22C55E" stroke-width="1" opacity="0.3"/>
          <!-- Frontend внутри -->
          <rect x="142" y="278" width="96" height="42" rx="5"
                fill="rgba(10, 132, 255, 0.2)"
                stroke="#0A84FF"
                stroke-width="1.5"/>
          <text x="190" y="297" text-anchor="middle" fill="#0A84FF" font-weight="600" font-size="12">Frontend</text>
          <text x="190" y="311" text-anchor="middle" fill="#94A3B8" font-size="9">Vue/React</text>
        </g>

        <!-- Nginx + Frontend - Instance 2 -->
        <g
          class="service-node"
          :class="{ active: activeNode === 'nginx2', hoverable: true }"
          @mouseenter="activeNode = 'nginx2'"
          @mouseleave="activeNode = null"
        >
          <rect x="130" y="345" width="120" height="90" rx="8"
                fill="rgba(34, 197, 94, 0.15)"
                stroke="#22C55E"
                stroke-width="2"
                filter="url(#glow)"/>
          <text x="190" y="367" text-anchor="middle" fill="#22C55E" font-weight="600" font-size="13">Nginx #2</text>
          <line x1="138" y1="375" x2="242" y2="375" stroke="#22C55E" stroke-width="1" opacity="0.3"/>
          <!-- Frontend внутри -->
          <rect x="142" y="383" width="96" height="42" rx="5"
                fill="rgba(10, 132, 255, 0.2)"
                stroke="#0A84FF"
                stroke-width="1.5"/>
          <text x="190" y="402" text-anchor="middle" fill="#0A84FF" font-weight="600" font-size="12">Frontend</text>
          <text x="190" y="416" text-anchor="middle" fill="#94A3B8" font-size="9">Vue/React</text>
        </g>

        <!-- Scaling indicator -->
        <text x="190" y="455" text-anchor="middle" fill="#22C55E" font-size="11" font-weight="600">⬍ Scalable ⬍</text>
        <text x="190" y="468" text-anchor="middle" fill="#94A3B8" font-size="9">Load Balanced</text>

        <!-- NATS Message Broker (круг) -->
        <g
          class="service-node"
          :class="{ active: activeNode === 'nats', hoverable: true }"
          @mouseenter="activeNode = 'nats'"
          @mouseleave="activeNode = null"
        >
          <circle cx="400" cy="390" r="50" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="3" filter="url(#glow)"/>
          <text x="400" y="385" text-anchor="middle" fill="#3B82F6" font-weight="700" font-size="16">NATS</text>
          <text x="400" y="405" text-anchor="middle" fill="#94A3B8" font-size="11">High-speed</text>
          <text x="400" y="420" text-anchor="middle" fill="#94A3B8" font-size="11">Message Broker</text>
        </g>

        <!-- API Gateway Service (микросервис) -->
        <g
          class="service-node microservice"
          :class="{ active: activeNode === 'gateway', hoverable: true }"
          @mouseenter="activeNode = 'gateway'"
          @mouseleave="activeNode = null"
        >
          <rect x="650" y="350" width="300" height="80" rx="10"
                fill="url(#microserviceGradient)"
                stroke="#F59E0B"
                stroke-width="2.5"
                filter="url(#shadow)"/>
          <text x="800" y="375" text-anchor="middle" fill="#F59E0B" font-weight="700" font-size="15">Microservices</text>
          <line x1="660" y1="385" x2="940" y2="385" stroke="#F59E0B" stroke-width="1" opacity="0.3"/>

          <!-- Внутренние компоненты -->
          <rect x="665" y="395" width="80" height="25" rx="4" fill="rgba(59, 130, 246, 0.3)" stroke="#3B82F6" stroke-width="1"/>
          <text x="705" y="411" text-anchor="middle" fill="#3B82F6" font-size="10" font-weight="600">API gateway</text>

          <rect x="755" y="395" width="80" height="25" rx="4" fill="rgba(59, 130, 246, 0.3)" stroke="#3B82F6" stroke-width="1"/>
          <text x="795" y="405" text-anchor="middle" fill="#3B82F6" font-size="8">WWW Dev UI</text>
          <text x="795" y="415" text-anchor="middle" fill="#3B82F6" font-size="8">Dashboard</text>

          <rect x="845" y="395" width="85" height="25" rx="4" fill="rgba(59, 130, 246, 0.3)" stroke="#3B82F6" stroke-width="1"/>
          <text x="887" y="411" text-anchor="middle" fill="#3B82F6" font-size="10" font-weight="600">node broker</text>
        </g>

        <!-- User & Auth Service -->
        <g
          class="service-node microservice"
          :class="{ active: activeNode === 'user-auth', hoverable: true }"
          @mouseenter="activeNode = 'user-auth'"
          @mouseleave="activeNode = null"
        >
          <rect x="200" y="500" width="300" height="130" rx="10"
                fill="url(#microserviceGradient)"
                stroke="#F59E0B"
                stroke-width="2.5"
                filter="url(#shadow)"/>
          <text x="350" y="525" text-anchor="middle" fill="#F59E0B" font-weight="700" font-size="15">Microservices</text>
          <line x1="210" y1="535" x2="490" y2="535" stroke="#F59E0B" stroke-width="1" opacity="0.3"/>

          <rect x="215" y="545" width="55" height="25" rx="4" fill="rgba(34, 197, 94, 0.3)" stroke="#22C55E" stroke-width="1"/>
          <text x="242" y="561" text-anchor="middle" fill="#22C55E" font-size="10" font-weight="600">User</text>

          <rect x="280" y="545" width="55" height="25" rx="4" fill="rgba(236, 72, 153, 0.3)" stroke="#EC4899" stroke-width="1"/>
          <text x="307" y="561" text-anchor="middle" fill="#EC4899" font-size="10" font-weight="600">Auth</text>

          <rect x="345" y="545" width="65" height="25" rx="4" fill="rgba(139, 92, 246, 0.3)" stroke="#8B5CF6" stroke-width="1"/>
          <text x="377" y="557" text-anchor="middle" fill="#8B5CF6" font-size="8">Dgraph</text>
          <text x="377" y="566" text-anchor="middle" fill="#8B5CF6" font-size="8">mixin</text>

          <rect x="215" y="578" width="90" height="25" rx="4" fill="rgba(34, 197, 94, 0.3)" stroke="#22C55E" stroke-width="1"/>
          <text x="260" y="586" text-anchor="middle" fill="#22C55E" font-size="8">Roles &</text>
          <text x="260" y="596" text-anchor="middle" fill="#22C55E" font-size="8">Permissions</text>

          <rect x="315" y="578" width="90" height="25" rx="4" fill="rgba(34, 197, 94, 0.3)" stroke="#22C55E" stroke-width="1"/>
          <text x="360" y="586" text-anchor="middle" fill="#22C55E" font-size="8">Access</text>
          <text x="360" y="596" text-anchor="middle" fill="#22C55E" font-size="8">Groups</text>

          <rect x="420" y="545" width="65" height="58" rx="4" fill="rgba(59, 130, 246, 0.3)" stroke="#3B82F6" stroke-width="1"/>
          <text x="452" y="557" text-anchor="middle" fill="#3B82F6" font-size="8">node</text>
          <text x="452" y="566" text-anchor="middle" fill="#3B82F6" font-size="8">broker</text>
        </g>

        <!-- House Service -->
        <g
          class="service-node microservice"
          :class="{ active: activeNode === 'house', hoverable: true }"
          @mouseenter="activeNode = 'house'"
          @mouseleave="activeNode = null"
        >
          <rect x="550" y="500" width="250" height="130" rx="10"
                fill="url(#microserviceGradient)"
                stroke="#F59E0B"
                stroke-width="2.5"
                filter="url(#shadow)"/>
          <text x="675" y="525" text-anchor="middle" fill="#F59E0B" font-weight="700" font-size="15">Microservices</text>
          <line x1="560" y1="535" x2="790" y2="535" stroke="#F59E0B" stroke-width="1" opacity="0.3"/>

          <rect x="565" y="545" width="65" height="25" rx="4" fill="rgba(139, 92, 246, 0.3)" stroke="#8B5CF6" stroke-width="1"/>
          <text x="597" y="561" text-anchor="middle" fill="#8B5CF6" font-size="10" font-weight="600">House</text>

          <rect x="640" y="545" width="65" height="25" rx="4" fill="rgba(139, 92, 246, 0.3)" stroke="#8B5CF6" stroke-width="1"/>
          <text x="672" y="557" text-anchor="middle" fill="#8B5CF6" font-size="8">Dgraph</text>
          <text x="672" y="566" text-anchor="middle" fill="#8B5CF6" font-size="8">mixin</text>

          <rect x="715" y="545" width="65" height="58" rx="4" fill="rgba(59, 130, 246, 0.3)" stroke="#3B82F6" stroke-width="1"/>
          <text x="747" y="557" text-anchor="middle" fill="#3B82F6" font-size="8">node</text>
          <text x="747" y="566" text-anchor="middle" fill="#3B82F6" font-size="8">broker</text>
        </g>

        <!-- Dictionaries Service -->
        <g
          class="service-node microservice"
          :class="{ active: activeNode === 'dictionaries', hoverable: true }"
          @mouseenter="activeNode = 'dictionaries'"
          @mouseleave="activeNode = null"
        >
          <rect x="850" y="500" width="250" height="130" rx="10"
                fill="url(#microserviceGradient)"
                stroke="#F59E0B"
                stroke-width="2.5"
                filter="url(#shadow)"/>
          <text x="975" y="525" text-anchor="middle" fill="#F59E0B" font-weight="700" font-size="15">Microservices</text>
          <line x1="860" y1="535" x2="1090" y2="535" stroke="#F59E0B" stroke-width="1" opacity="0.3"/>

          <rect x="865" y="545" width="80" height="25" rx="4" fill="rgba(168, 85, 247, 0.3)" stroke="#A855F7" stroke-width="1"/>
          <text x="905" y="561" text-anchor="middle" fill="#A855F7" font-size="10" font-weight="600">Dictionaries</text>

          <rect x="955" y="545" width="65" height="25" rx="4" fill="rgba(139, 92, 246, 0.3)" stroke="#8B5CF6" stroke-width="1"/>
          <text x="987" y="557" text-anchor="middle" fill="#8B5CF6" font-size="8">Dgraph</text>
          <text x="987" y="566" text-anchor="middle" fill="#8B5CF6" font-size="8">mixin</text>

          <rect x="1030" y="545" width="55" height="58" rx="4" fill="rgba(59, 130, 246, 0.3)" stroke="#3B82F6" stroke-width="1"/>
          <text x="1057" y="557" text-anchor="middle" fill="#3B82F6" font-size="8">node</text>
          <text x="1057" y="566" text-anchor="middle" fill="#3B82F6" font-size="8">broker</text>
        </g>

        <!-- Events/Notifications Service -->
        <g
          class="service-node microservice"
          :class="{ active: activeNode === 'events', hoverable: true }"
          @mouseenter="activeNode = 'events'"
          @mouseleave="activeNode = null"
        >
          <rect x="1150" y="500" width="280" height="140" rx="10"
                fill="url(#microserviceGradient)"
                stroke="#F59E0B"
                stroke-width="2.5"
                filter="url(#shadow)"/>
          <text x="1290" y="525" text-anchor="middle" fill="#F59E0B" font-weight="700" font-size="15">Microservices</text>
          <line x1="1160" y1="535" x2="1420" y2="535" stroke="#F59E0B" stroke-width="1" opacity="0.3"/>

          <rect x="1165" y="545" width="65" height="25" rx="4" fill="rgba(245, 158, 11, 0.3)" stroke="#F59E0B" stroke-width="1"/>
          <text x="1197" y="561" text-anchor="middle" fill="#F59E0B" font-size="10" font-weight="600">Events</text>

          <rect x="1240" y="545" width="75" height="25" rx="4" fill="rgba(236, 72, 153, 0.3)" stroke="#EC4899" stroke-width="1"/>
          <text x="1277" y="561" text-anchor="middle" fill="#EC4899" font-size="10" font-weight="600">Notifications</text>

          <rect x="1325" y="545" width="65" height="25" rx="4" fill="rgba(139, 92, 246, 0.3)" stroke="#8B5CF6" stroke-width="1"/>
          <text x="1357" y="557" text-anchor="middle" fill="#8B5CF6" font-size="8">Dgraph</text>
          <text x="1357" y="566" text-anchor="middle" fill="#8B5CF6" font-size="8">mixin</text>

          <rect x="1165" y="578" width="100" height="25" rx="4" fill="rgba(52, 211, 153, 0.3)" stroke="#34D399" stroke-width="1"/>
          <text x="1215" y="594" text-anchor="middle" fill="#34D399" font-size="10" font-weight="600">Email Queue</text>

          <rect x="1275" y="578" width="50" height="25" rx="4" fill="rgba(251, 146, 60, 0.3)" stroke="#FB923C" stroke-width="1"/>
          <text x="1300" y="594" text-anchor="middle" fill="#FB923C" font-size="10" font-weight="600">Push</text>

          <rect x="1335" y="578" width="55" height="58" rx="4" fill="rgba(59, 130, 246, 0.3)" stroke="#3B82F6" stroke-width="1"/>
          <text x="1362" y="590" text-anchor="middle" fill="#3B82F6" font-size="8">node</text>
          <text x="1362" y="599" text-anchor="middle" fill="#3B82F6" font-size="8">broker</text>
        </g>

        <!-- Dgraph Zero (Database) -->
        <g
          class="service-node database"
          :class="{ active: activeNode === 'dgraph-zero', hoverable: true }"
          @mouseenter="activeNode = 'dgraph-zero'"
          @mouseleave="activeNode = null"
        >
          <rect x="850" y="750" width="160" height="90" rx="10"
                fill="rgba(139, 92, 246, 0.2)"
                stroke="#8B5CF6"
                stroke-width="2.5"
                filter="url(#shadow)"/>
          <text x="930" y="775" text-anchor="middle" fill="#8B5CF6" font-weight="700" font-size="14">DB</text>
          <line x1="860" y1="785" x2="1000" y2="785" stroke="#8B5CF6" stroke-width="1" opacity="0.3"/>
          <text x="930" y="805" text-anchor="middle" fill="#8B5CF6" font-weight="600" font-size="13">Dgraph Zero</text>
          <text x="930" y="825" text-anchor="middle" fill="#94A3B8" font-size="10">Cluster Manager</text>
        </g>

        <!-- Dgraph Alpha (Database) -->
        <g
          class="service-node database"
          :class="{ active: activeNode === 'dgraph-alpha', hoverable: true }"
          @mouseenter="activeNode = 'dgraph-alpha'"
          @mouseleave="activeNode = null"
        >
          <rect x="1030" y="750" width="160" height="90" rx="10"
                fill="rgba(139, 92, 246, 0.2)"
                stroke="#8B5CF6"
                stroke-width="2.5"
                filter="url(#shadow)"/>
          <text x="1110" y="775" text-anchor="middle" fill="#8B5CF6" font-weight="700" font-size="14">DB</text>
          <line x1="1040" y1="785" x2="1180" y2="785" stroke="#8B5CF6" stroke-width="1" opacity="0.3"/>
          <text x="1110" y="805" text-anchor="middle" fill="#8B5CF6" font-weight="600" font-size="13">Dgraph Alpha</text>
          <text x="1110" y="825" text-anchor="middle" fill="#94A3B8" font-size="10">Data Storage</text>
        </g>

        <!-- Другие БД (примеры) - показываем возможность подключения -->
        <g class="service-node database" opacity="0.5">
          <rect x="1220" y="750" width="120" height="40" rx="6"
                fill="rgba(239, 68, 68, 0.1)"
                stroke="#EF4444"
                stroke-width="1.5"
                stroke-dasharray="5,5"/>
          <text x="1280" y="775" text-anchor="middle" fill="#EF4444" font-size="11" font-weight="600">PostgreSQL</text>
        </g>

        <g class="service-node database" opacity="0.5">
          <rect x="1220" y="800" width="120" height="40" rx="6"
                fill="rgba(234, 179, 8, 0.1)"
                stroke="#EAB308"
                stroke-width="1.5"
                stroke-dasharray="5,5"/>
          <text x="1280" y="825" text-anchor="middle" fill="#EAB308" font-size="11" font-weight="600">MongoDB</text>
        </g>

        <text x="1280" y="860" text-anchor="middle" fill="#94A3B8" font-size="9" opacity="0.7">+ другие БД...</text>

        <!-- ========= INFRASTRUCTURE LAYER ========= -->
        <text x="800" y="920" text-anchor="middle" fill="#94A3B8" font-size="13" font-weight="600" opacity="0.6">
          ─── Infrastructure & Observability ───
        </text>

        <!-- Log Storage (Elasticsearch) -->
        <g class="service-node infra-service">
          <rect x="150" y="950" width="130" height="70" rx="8"
                fill="rgba(147, 51, 234, 0.15)"
                stroke="#9333EA"
                stroke-width="2"/>
          <text x="215" y="975" text-anchor="middle" fill="#9333EA" font-weight="600" font-size="12">Log Storage</text>
          <text x="215" y="995" text-anchor="middle" fill="#94A3B8" font-size="10">(Elasticsearch)</text>
        </g>

        <!-- Log Analytic (Kibana) -->
        <g class="service-node infra-service">
          <rect x="300" y="950" width="130" height="70" rx="8"
                fill="rgba(236, 72, 153, 0.15)"
                stroke="#EC4899"
                stroke-width="2"/>
          <text x="365" y="975" text-anchor="middle" fill="#EC4899" font-weight="600" font-size="12">Log Analytic</text>
          <text x="365" y="995" text-anchor="middle" fill="#94A3B8" font-size="10">(Kibana)</text>
        </g>

        <!-- Log Storage (PostgreSQL) -->
        <g class="service-node infra-service">
          <rect x="450" y="950" width="130" height="70" rx="8"
                fill="rgba(59, 130, 246, 0.15)"
                stroke="#3B82F6"
                stroke-width="2"/>
          <text x="515" y="975" text-anchor="middle" fill="#3B82F6" font-weight="600" font-size="12">Log Storage</text>
          <text x="515" y="995" text-anchor="middle" fill="#94A3B8" font-size="10">(PostgreSQL)</text>
        </g>

        <!-- Monitoring (Dozzle) -->
        <g class="service-node infra-service">
          <rect x="600" y="950" width="130" height="70" rx="8"
                fill="rgba(245, 158, 11, 0.15)"
                stroke="#F59E0B"
                stroke-width="2"/>
          <text x="665" y="975" text-anchor="middle" fill="#F59E0B" font-weight="600" font-size="12">Monitoring</text>
          <text x="665" y="990" text-anchor="middle" fill="#94A3B8" font-size="10">(Dozzle)</text>
          <text x="665" y="1005" text-anchor="middle" fill="#94A3B8" font-size="9">Docker logs</text>
        </g>

        <!-- Metrics (Grafana) -->
        <g class="service-node infra-service">
          <rect x="750" y="950" width="130" height="70" rx="8"
                fill="rgba(234, 88, 12, 0.15)"
                stroke="#EA580C"
                stroke-width="2"/>
          <text x="815" y="975" text-anchor="middle" fill="#EA580C" font-weight="600" font-size="12">Metrics</text>
          <text x="815" y="995" text-anchor="middle" fill="#94A3B8" font-size="10">(Grafana)</text>
        </g>

        <!-- Traces (Jaeger) -->
        <g class="service-node infra-service">
          <rect x="900" y="950" width="130" height="70" rx="8"
                fill="rgba(134, 239, 172, 0.15)"
                stroke="#86EFAC"
                stroke-width="2"/>
          <text x="965" y="975" text-anchor="middle" fill="#86EFAC" font-weight="600" font-size="12">Traces</text>
          <text x="965" y="995" text-anchor="middle" fill="#94A3B8" font-size="10">(Jaeger)</text>
        </g>

        <!-- UI Admin for Database -->
        <g class="service-node infra-service">
          <rect x="1050" y="950" width="140" height="70" rx="8"
                fill="rgba(168, 85, 247, 0.15)"
                stroke="#A855F7"
                stroke-width="2"/>
          <text x="1120" y="975" text-anchor="middle" fill="#A855F7" font-weight="600" font-size="12">UI Admin</text>
          <text x="1120" y="995" text-anchor="middle" fill="#94A3B8" font-size="10">for Database</text>
        </g>

        <!-- Легенда -->
        <g class="legend" transform="translate(120, 1070)">
          <text x="0" y="0" fill="#94A3B8" font-size="12" font-weight="600">Типы связей:</text>

          <line x1="0" y1="20" x2="35" y2="20" stroke="#00D9FF" stroke-width="2"/>
          <text x="42" y="24" fill="#94A3B8" font-size="11">Internet</text>

          <line x1="110" y1="20" x2="145" y2="20" stroke="#10B981" stroke-width="2"/>
          <text x="152" y="24" fill="#94A3B8" font-size="11">HTTP/Gateway</text>

          <line x1="260" y1="20" x2="295" y2="20" stroke="#F59E0B" stroke-width="2"/>
          <text x="302" y="24" fill="#94A3B8" font-size="11">Microservices</text>

          <line x1="420" y1="20" x2="455" y2="20" stroke="#3B82F6" stroke-width="2" stroke-dasharray="5,5"/>
          <text x="462" y="24" fill="#94A3B8" font-size="11">Message Broker</text>

          <line x1="600" y1="20" x2="635" y2="20" stroke="#8B5CF6" stroke-width="2"/>
          <text x="642" y="24" fill="#94A3B8" font-size="11">Database</text>

          <line x1="730" y1="20" x2="765" y2="20" stroke="#94A3B8" stroke-width="1" stroke-dasharray="3,3" opacity="0.4"/>
          <text x="772" y="24" fill="#94A3B8" font-size="11">Observability</text>

          <rect x="880" y="12" width="16" height="16" rx="3" fill="none" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="3,3"/>
          <text x="903" y="24" fill="#94A3B8" font-size="11">Опционально</text>
        </g>
      </svg>
    </div>

    <div class="diagram-info">
      <p class="info-text">
        Полная архитектура микросервисной платформы с инфраструктурой наблюдения и мониторинга
      </p>
      <p class="info-subtext">
        Наведите на компоненты для интерактивного взаимодействия
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

/* Микросервисы */
.microservice rect {
  transition: all var(--transition-base);
}

.microservice:hover rect,
.microservice.active rect {
  filter: drop-shadow(0 4px 16px rgba(245, 158, 11, 0.4));
}

/* Базы данных */
.database rect {
  transition: all var(--transition-base);
}

.database:hover rect,
.database.active rect {
  filter: drop-shadow(0 4px 16px rgba(139, 92, 246, 0.4));
}

/* Инфраструктурные сервисы */
.infra-service {
  opacity: 0.85;
  transition: all var(--transition-base);
}

.infra-service:hover {
  opacity: 1;
  transform: translateY(-2px);
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
  color: var(--color-text-secondary);
  font-size: var(--font-size-base);
  margin: 0 0 var(--spacing-sm) 0;
  font-weight: var(--font-weight-medium);
}

.info-subtext {
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
