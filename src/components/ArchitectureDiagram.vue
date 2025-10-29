<template>
  <div class="architecture-diagram">
    <div class="diagram-container">
      <svg
        viewBox="0 0 2000 1400"
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
        <rect x="80" y="180" width="1840" height="900" rx="16"
              fill="rgba(15, 23, 42, 0.3)"
              stroke="rgba(148, 163, 184, 0.3)"
              stroke-width="3"
              stroke-dasharray="15,8"/>
        <text x="1000" y="210" text-anchor="middle" fill="#94A3B8" font-size="16" font-weight="600" opacity="0.7">
          Infrastructure Container
        </text>

        <!-- ========== ЛИНИИ СВЯЗЕЙ ========== -->

        <!-- Internet -> Traefik -->
        <g class="connection">
          <line x1="1000" y1="90" x2="1000" y2="160" stroke="#00D9FF" stroke-width="3" opacity="0.5"/>
          <circle class="pulse" r="5" fill="#00D9FF">
            <animateMotion dur="2s" repeatCount="indefinite" path="M1000,90 L1000,160" />
          </circle>
        </g>

        <!-- Traefik -> Support Channel -->
        <g class="connection">
          <line x1="900" y1="240" x2="200" y2="300" stroke="#EC4899" stroke-width="2" opacity="0.4" stroke-dasharray="8,4"/>
          <circle class="pulse" r="4" fill="#EC4899">
            <animateMotion dur="2.8s" repeatCount="indefinite" path="M900,240 L200,300" />
          </circle>
        </g>

        <!-- Traefik -> Nginx instances -->
        <g class="connection">
          <line x1="900" y1="280" x2="250" y2="400" stroke="#22C55E" stroke-width="2.5" opacity="0.4"/>
          <circle class="pulse" r="4" fill="url(#pulseGradient)">
            <animateMotion dur="2.2s" repeatCount="indefinite" path="M900,280 L250,400" />
          </circle>
        </g>
        <g class="connection">
          <line x1="920" y1="290" x2="250" y2="520" stroke="#22C55E" stroke-width="2.5" opacity="0.4"/>
          <circle class="pulse" r="4" fill="url(#pulseGradient)">
            <animateMotion dur="2.4s" repeatCount="indefinite" path="M920,290 L250,520" />
          </circle>
        </g>

        <!-- Traefik -> API Gateways -->
        <g class="connection">
          <line x1="1000" y1="300" x2="700" y2="400" stroke="#F59E0B" stroke-width="2.5" opacity="0.4"/>
          <circle class="pulse" r="4" fill="#F59E0B">
            <animateMotion dur="2s" repeatCount="indefinite" path="M1000,300 L700,400" />
          </circle>
        </g>
        <g class="connection">
          <line x1="1020" y1="300" x2="1000" y2="400" stroke="#F59E0B" stroke-width="2.5" opacity="0.4"/>
          <circle class="pulse" r="4" fill="#F59E0B">
            <animateMotion dur="1.9s" repeatCount="indefinite" path="M1020,300 L1000,400" />
          </circle>
        </g>
        <g class="connection">
          <line x1="1040" y1="300" x2="1300" y2="400" stroke="#F59E0B" stroke-width="2.5" opacity="0.4"/>
          <circle class="pulse" r="4" fill="#F59E0B">
            <animateMotion dur="2.1s" repeatCount="indefinite" path="M1040,300 L1300,400" />
          </circle>
        </g>

        <!-- Cache System -> Microservices -->
        <g class="connection">
          <line x1="1650" y1="500" x2="700" y2="650" stroke="#EF4444" stroke-width="2" opacity="0.3" stroke-dasharray="6,4"/>
          <circle class="pulse" r="3" fill="#EF4444">
            <animateMotion dur="1.6s" repeatCount="indefinite" path="M1650,500 L700,650" />
          </circle>
        </g>
        <g class="connection">
          <line x1="1650" y1="510" x2="1200" y2="650" stroke="#EF4444" stroke-width="2" opacity="0.3" stroke-dasharray="6,4"/>
          <circle class="pulse" r="3" fill="#EF4444">
            <animateMotion dur="1.7s" repeatCount="indefinite" path="M1650,510 L1200,650" />
          </circle>
        </g>

        <!-- Kafka -> Microservices -->
        <g class="connection">
          <line x1="1650" y1="680" x2="700" y2="750" stroke="#0EA5E9" stroke-width="2" opacity="0.4" stroke-dasharray="6,4"/>
          <circle class="pulse" r="4" fill="#0EA5E9">
            <animateMotion dur="1.8s" repeatCount="indefinite" path="M1650,680 L700,750" />
          </circle>
        </g>
        <g class="connection">
          <line x1="1650" y1="690" x2="1200" y2="750" stroke="#0EA5E9" stroke-width="2" opacity="0.4" stroke-dasharray="6,4"/>
          <circle class="pulse" r="4" fill="#0EA5E9">
            <animateMotion dur="1.9s" repeatCount="indefinite" path="M1650,690 L1200,750" />
          </circle>
        </g>

        <!-- NATS -> Microservices -->
        <g class="connection">
          <line x1="1650" y1="850" x2="450" y2="730" stroke="#3B82F6" stroke-width="2" opacity="0.4" stroke-dasharray="6,4"/>
          <circle class="pulse" r="3" fill="#3B82F6">
            <animateMotion dur="2s" repeatCount="indefinite" path="M1650,850 L450,730" />
          </circle>
        </g>
        <g class="connection">
          <line x1="1650" y1="860" x2="700" y2="800" stroke="#3B82F6" stroke-width="2" opacity="0.4" stroke-dasharray="6,4"/>
          <circle class="pulse" r="3" fill="#3B82F6">
            <animateMotion dur="2.1s" repeatCount="indefinite" path="M1650,860 L700,800" />
          </circle>
        </g>
        <g class="connection">
          <line x1="1650" y1="870" x2="1000" y2="800" stroke="#3B82F6" stroke-width="2" opacity="0.4" stroke-dasharray="6,4"/>
          <circle class="pulse" r="3" fill="#3B82F6">
            <animateMotion dur="1.9s" repeatCount="indefinite" path="M1650,870 L1000,800" />
          </circle>
        </g>
        <g class="connection">
          <line x1="1650" y1="880" x2="1300" y2="800" stroke="#3B82F6" stroke-width="2" opacity="0.4" stroke-dasharray="6,4"/>
          <circle class="pulse" r="3" fill="#3B82F6">
            <animateMotion dur="2.2s" repeatCount="indefinite" path="M1650,880 L1300,800" />
          </circle>
        </g>

        <!-- Microservices -> Dgraph -->
        <g class="connection">
          <line x1="450" y1="850" x2="900" y2="1000" stroke="#8B5CF6" stroke-width="2.5" opacity="0.4"/>
          <circle class="pulse" r="4" fill="#8B5CF6">
            <animateMotion dur="1.7s" repeatCount="indefinite" path="M450,850 L900,1000" />
          </circle>
        </g>
        <g class="connection">
          <line x1="700" y1="900" x2="950" y2="1000" stroke="#8B5CF6" stroke-width="2.5" opacity="0.4"/>
          <circle class="pulse" r="4" fill="#8B5CF6">
            <animateMotion dur="1.6s" repeatCount="indefinite" path="M700,900 L950,1000" />
          </circle>
        </g>
        <g class="connection">
          <line x1="1000" y1="900" x2="1000" y2="1000" stroke="#8B5CF6" stroke-width="2.5" opacity="0.4"/>
          <circle class="pulse" r="4" fill="#8B5CF6">
            <animateMotion dur="1.5s" repeatCount="indefinite" path="M1000,900 L1000,1000" />
          </circle>
        </g>
        <g class="connection">
          <line x1="1300" y1="900" x2="1050" y2="1000" stroke="#8B5CF6" stroke-width="2.5" opacity="0.4"/>
          <circle class="pulse" r="4" fill="#8B5CF6">
            <animateMotion dur="1.8s" repeatCount="indefinite" path="M1300,900 L1050,1000" />
          </circle>
        </g>

        <!-- Dgraph -> CDC -->
        <g class="connection">
          <line x1="1100" y1="1050" x2="1650" y2="1000" stroke="#A855F7" stroke-width="2" opacity="0.4" stroke-dasharray="8,4"/>
          <circle class="pulse" r="4" fill="#A855F7">
            <animateMotion dur="1.9s" repeatCount="indefinite" path="M1100,1050 L1650,1000" />
          </circle>
        </g>

        <!-- Dgraph replication -->
        <g class="connection">
          <line x1="1020" y1="1050" x2="1120" y2="1050" stroke="#8B5CF6" stroke-width="2" opacity="0.5" stroke-dasharray="6,4"/>
          <circle class="pulse" r="4" fill="#8B5CF6">
            <animateMotion dur="1.2s" repeatCount="indefinite" path="M1020,1050 L1120,1050" />
          </circle>
          <text x="1070" y="1040" fill="#8B5CF6" font-size="11" text-anchor="middle">replication</text>
        </g>

        <!-- ========== СЕРВИСЫ ========== -->

        <!-- Internet -->
        <g class="service-node">
          <circle cx="1000" cy="60" r="35" fill="rgba(0, 217, 255, 0.15)" stroke="#00D9FF" stroke-width="2.5"/>
          <text x="1000" y="38" text-anchor="middle" fill="#00D9FF" font-size="16">👤</text>
          <text x="1000" y="65" text-anchor="middle" fill="#00D9FF" font-weight="700" font-size="16">Internet</text>
          <text x="1000" y="110" text-anchor="middle" fill="#94A3B8" font-size="12">User Devices / External Systems</text>
        </g>

        <!-- Traefik -->
        <g class="service-node" :class="{ active: activeNode === 'traefik' }" @mouseenter="activeNode = 'traefik'" @mouseleave="activeNode = null">
          <rect x="800" y="160" width="400" height="80" rx="10"
                fill="rgba(236, 72, 153, 0.18)"
                stroke="#EC4899"
                stroke-width="3"
                filter="url(#glow)"/>
          <text x="1000" y="192" text-anchor="middle" fill="#EC4899" font-weight="700" font-size="18">Traefik</text>
          <text x="1000" y="215" text-anchor="middle" fill="#94A3B8" font-size="13">On-premise Gateway / Reverse Proxy / Load Balancer</text>
        </g>

        <!-- Support Channel (Perimeter) -->
        <g class="service-node" :class="{ active: activeNode === 'support' }" @mouseenter="activeNode = 'support'" @mouseleave="activeNode = null">
          <rect x="120" y="280" width="180" height="90" rx="8"
                fill="rgba(236, 72, 153, 0.15)"
                stroke="#EC4899"
                stroke-width="2"
                stroke-dasharray="8,4"/>
          <text x="210" y="310" text-anchor="middle" fill="#EC4899" font-weight="600" font-size="14">Support Channel</text>
          <text x="210" y="330" text-anchor="middle" fill="#94A3B8" font-size="11">SSH / VPN</text>
          <text x="210" y="348" text-anchor="middle" fill="#94A3B8" font-size="11">Admin Access</text>
          <text x="210" y="365" text-anchor="middle" fill="#94A3B8" font-size="10" opacity="0.7">For Engineers</text>
        </g>

        <!-- Integration Channels (Perimeter) -->
        <g class="service-node" :class="{ active: activeNode === 'integration' }" @mouseenter="activeNode = 'integration'" @mouseleave="activeNode = null">
          <rect x="1650" y="280" width="220" height="110" rx="8"
                fill="rgba(16, 185, 129, 0.15)"
                stroke="#10B981"
                stroke-width="2"
                stroke-dasharray="8,4"/>
          <text x="1760" y="310" text-anchor="middle" fill="#10B981" font-weight="600" font-size="14">Integration Channels</text>
          <text x="1760" y="332" text-anchor="middle" fill="#94A3B8" font-size="11">REST / GraphQL / gRPC</text>
          <text x="1760" y="350" text-anchor="middle" fill="#94A3B8" font-size="11">SOAP / WebSockets</text>
          <text x="1760" y="368" text-anchor="middle" fill="#94A3B8" font-size="11">File Exchange (FTP/SFTP)</text>
          <text x="1760" y="385" text-anchor="middle" fill="#94A3B8" font-size="10" opacity="0.7">Client Systems Integration</text>
        </g>

        <!-- Microservices -> S3 Storage -->
        <g class="connection">
          <line x1="900" y1="680" x2="1600" y2="575" stroke="#F97316" stroke-width="2" opacity="0.3" stroke-dasharray="6,4"/>
          <circle class="pulse" r="3" fill="#F97316">
            <animateMotion dur="2s" repeatCount="indefinite" path="M900,680 L1600,575" />
          </circle>
        </g>

        <!-- Nginx + Frontend #1 -->
        <g class="service-node" :class="{ active: activeNode === 'nginx1' }" @mouseenter="activeNode = 'nginx1'" @mouseleave="activeNode = null">
          <rect x="140" y="390" width="140" height="100" rx="8"
                fill="rgba(34, 197, 94, 0.15)"
                stroke="#22C55E"
                stroke-width="2.5"/>
          <text x="210" y="415" text-anchor="middle" fill="#22C55E" font-weight="600" font-size="15">Nginx #1</text>
          <line x1="150" y1="425" x2="270" y2="425" stroke="#22C55E" stroke-width="1" opacity="0.3"/>
          <rect x="153" y="433" width="114" height="47" rx="5"
                fill="rgba(10, 132, 255, 0.2)"
                stroke="#0A84FF"
                stroke-width="1.5"/>
          <text x="210" y="453" text-anchor="middle" fill="#0A84FF" font-weight="600" font-size="13">Frontend</text>
          <text x="210" y="470" text-anchor="middle" fill="#94A3B8" font-size="10">Angular / Vue / React</text>
        </g>

        <!-- Nginx + Frontend #2 -->
        <g class="service-node" :class="{ active: activeNode === 'nginx2' }" @mouseenter="activeNode = 'nginx2'" @mouseleave="activeNode = null">
          <rect x="140" y="510" width="140" height="100" rx="8"
                fill="rgba(34, 197, 94, 0.15)"
                stroke="#22C55E"
                stroke-width="2.5"/>
          <text x="210" y="535" text-anchor="middle" fill="#22C55E" font-weight="600" font-size="15">Nginx #2</text>
          <line x1="150" y1="545" x2="270" y2="545" stroke="#22C55E" stroke-width="1" opacity="0.3"/>
          <rect x="153" y="553" width="114" height="47" rx="5"
                fill="rgba(10, 132, 255, 0.2)"
                stroke="#0A84FF"
                stroke-width="1.5"/>
          <text x="210" y="573" text-anchor="middle" fill="#0A84FF" font-weight="600" font-size="13">Frontend</text>
          <text x="210" y="590" text-anchor="middle" fill="#94A3B8" font-size="10">Angular / Vue / React</text>
        </g>

        <!-- Scaling indicator -->
        <text x="210" y="630" text-anchor="middle" fill="#22C55E" font-size="13" font-weight="600">⬍ Scalable ⬍</text>
        <text x="210" y="648" text-anchor="middle" fill="#94A3B8" font-size="11">Load Balanced</text>

        <!-- API Gateway #1 -->
        <g class="service-node" :class="{ active: activeNode === 'gw1' }" @mouseenter="activeNode = 'gw1'" @mouseleave="activeNode = null">
          <rect x="550" y="390" width="280" height="80" rx="10"
                fill="url(#microserviceGradient)"
                stroke="#F59E0B"
                stroke-width="2.5"/>
          <text x="690" y="418" text-anchor="middle" fill="#F59E0B" font-weight="700" font-size="16">API Gateway #1</text>
          <text x="690" y="440" text-anchor="middle" fill="#94A3B8" font-size="12">REST API • GraphQL • Auth</text>
          <text x="690" y="458" text-anchor="middle" fill="#94A3B8" font-size="11">Rate Limiting • Validation</text>
        </g>

        <!-- API Gateway #2 -->
        <g class="service-node" :class="{ active: activeNode === 'gw2' }" @mouseenter="activeNode = 'gw2'" @mouseleave="activeNode = null">
          <rect x="850" y="390" width="280" height="80" rx="10"
                fill="url(#microserviceGradient)"
                stroke="#F59E0B"
                stroke-width="2.5"/>
          <text x="990" y="418" text-anchor="middle" fill="#F59E0B" font-weight="700" font-size="16">API Gateway #2</text>
          <text x="990" y="440" text-anchor="middle" fill="#94A3B8" font-size="12">REST API • GraphQL • Auth</text>
          <text x="990" y="458" text-anchor="middle" fill="#94A3B8" font-size="11">Rate Limiting • Validation</text>
        </g>

        <!-- API Gateway #N -->
        <g class="service-node">
          <rect x="1150" y="390" width="280" height="80" rx="10"
                fill="url(#microserviceGradient)"
                stroke="#F59E0B"
                stroke-width="2.5"
                stroke-dasharray="8,4"
                opacity="0.5"/>
          <text x="1290" y="425" text-anchor="middle" fill="#F59E0B" font-weight="700" font-size="20">. . . #N</text>
          <text x="1290" y="448" text-anchor="middle" fill="#94A3B8" font-size="12" opacity="0.7">Scalable</text>
        </g>

        <!-- Cache System -->
        <g class="service-node" :class="{ active: activeNode === 'cache' }" @mouseenter="activeNode = 'cache'" @mouseleave="activeNode = null">
          <rect x="1600" y="450" width="180" height="80" rx="8"
                fill="rgba(239, 68, 68, 0.15)"
                stroke="#EF4444"
                stroke-width="2.5"/>
          <text x="1690" y="478" text-anchor="middle" fill="#EF4444" font-weight="700" font-size="15">Cache System</text>
          <text x="1690" y="498" text-anchor="middle" fill="#94A3B8" font-size="11">Redis / Dragonfly</text>
          <text x="1690" y="515" text-anchor="middle" fill="#94A3B8" font-size="10">In-Memory Caching</text>
        </g>

        <!-- S3 Storage -->
        <g class="service-node" :class="{ active: activeNode === 's3' }" @mouseenter="activeNode = 's3'" @mouseleave="activeNode = null">
          <rect x="1600" y="550" width="180" height="50" rx="8"
                fill="rgba(249, 115, 22, 0.15)"
                stroke="#F97316"
                stroke-width="2.5"/>
          <text x="1690" y="571" text-anchor="middle" fill="#F97316" font-weight="700" font-size="15">📦 S3 Storage</text>
          <text x="1690" y="590" text-anchor="middle" fill="#94A3B8" font-size="10">Object Storage</text>
        </g>

        <!-- Kafka -->
        <g class="service-node" :class="{ active: activeNode === 'kafka' }" @mouseenter="activeNode = 'kafka'" @mouseleave="activeNode = null">
          <rect x="1600" y="620" width="180" height="90" rx="8"
                fill="rgba(14, 165, 233, 0.15)"
                stroke="#0EA5E9"
                stroke-width="2.5"/>
          <text x="1690" y="650" text-anchor="middle" fill="#0EA5E9" font-weight="700" font-size="15">Kafka</text>
          <text x="1690" y="670" text-anchor="middle" fill="#94A3B8" font-size="11">Event Streaming</text>
          <text x="1690" y="687" text-anchor="middle" fill="#94A3B8" font-size="10">Distributed Log</text>
          <text x="1690" y="703" text-anchor="middle" fill="#94A3B8" font-size="10" opacity="0.7">High Throughput</text>
        </g>

        <!-- NATS -->
        <g class="service-node" :class="{ active: activeNode === 'nats' }" @mouseenter="activeNode = 'nats'" @mouseleave="activeNode = null">
          <rect x="1600" y="800" width="180" height="90" rx="8"
                fill="rgba(59, 130, 246, 0.15)"
                stroke="#3B82F6"
                stroke-width="2.5"/>
          <text x="1690" y="830" text-anchor="middle" fill="#3B82F6" font-weight="700" font-size="15">NATS</text>
          <text x="1690" y="850" text-anchor="middle" fill="#94A3B8" font-size="11">Message Broker</text>
          <text x="1690" y="867" text-anchor="middle" fill="#94A3B8" font-size="10">High-Speed Messaging</text>
          <text x="1690" y="883" text-anchor="middle" fill="#94A3B8" font-size="10" opacity="0.7">Pub/Sub • Req/Reply</text>
        </g>

        <!-- Microservice: Сервис сущностей (Assets) -->
        <g class="service-node" :class="{ active: activeNode === 'entities' }" @mouseenter="activeNode = 'entities'" @mouseleave="activeNode = null">
          <rect x="320" y="650" width="300" height="120" rx="10"
                fill="url(#microserviceGradient)"
                stroke="#F59E0B"
                stroke-width="2.5"/>
          <text x="470" y="680" text-anchor="middle" fill="#F59E0B" font-weight="700" font-size="15">Сервис сущностей</text>
          <line x1="330" y1="690" x2="610" y2="690" stroke="#F59E0B" stroke-width="1" opacity="0.3"/>

          <rect x="335" y="700" width="90" height="28" rx="4" fill="rgba(139, 92, 246, 0.3)" stroke="#8B5CF6" stroke-width="1"/>
          <text x="380" y="718" text-anchor="middle" fill="#8B5CF6" font-size="11" font-weight="600">Entities CRUD</text>

          <rect x="435" y="700" width="75" height="28" rx="4" fill="rgba(34, 197, 94, 0.3)" stroke="#22C55E" stroke-width="1"/>
          <text x="472" y="718" text-anchor="middle" fill="#22C55E" font-size="11" font-weight="600">Validation</text>

          <rect x="520" y="700" width="80" height="28" rx="4" fill="rgba(168, 85, 247, 0.3)" stroke="#A855F7" stroke-width="1"/>
          <text x="560" y="718" text-anchor="middle" fill="#A855F7" font-size="11" font-weight="600">Permissions</text>

          <!-- Broker layer -->
          <rect x="330" y="738" width="280" height="24" rx="4" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
          <text x="470" y="754" text-anchor="middle" fill="#3B82F6" font-size="10" font-weight="500">Broker (NATS / Kafka / Redis)</text>
        </g>

        <!-- Microservice: User & Auth -->
        <g class="service-node" :class="{ active: activeNode === 'user' }" @mouseenter="activeNode = 'user'" @mouseleave="activeNode = null">
          <rect x="650" y="710" width="320" height="120" rx="10"
                fill="url(#microserviceGradient)"
                stroke="#F59E0B"
                stroke-width="2.5"/>
          <text x="810" y="740" text-anchor="middle" fill="#F59E0B" font-weight="700" font-size="15">User & Auth Service</text>
          <line x1="660" y1="750" x2="960" y2="750" stroke="#F59E0B" stroke-width="1" opacity="0.3"/>

          <rect x="665" y="760" width="60" height="28" rx="4" fill="rgba(34, 197, 94, 0.3)" stroke="#22C55E" stroke-width="1"/>
          <text x="695" y="778" text-anchor="middle" fill="#22C55E" font-size="11" font-weight="600">User</text>

          <rect x="735" y="760" width="60" height="28" rx="4" fill="rgba(236, 72, 153, 0.3)" stroke="#EC4899" stroke-width="1"/>
          <text x="765" y="778" text-anchor="middle" fill="#EC4899" font-size="11" font-weight="600">Auth</text>

          <rect x="805" y="760" width="70" height="28" rx="4" fill="rgba(168, 85, 247, 0.3)" stroke="#A855F7" stroke-width="1"/>
          <text x="840" y="778" text-anchor="middle" fill="#A855F7" font-size="11" font-weight="600">Roles</text>

          <rect x="885" y="760" width="70" height="28" rx="4" fill="rgba(52, 211, 153, 0.3)" stroke="#34D399" stroke-width="1"/>
          <text x="920" y="778" text-anchor="middle" fill="#34D399" font-size="11" font-weight="600">Groups</text>

          <!-- Broker layer -->
          <rect x="660" y="798" width="300" height="24" rx="4" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
          <text x="810" y="814" text-anchor="middle" fill="#3B82F6" font-size="10" font-weight="500">Broker (NATS / Kafka / Redis)</text>
        </g>

        <!-- Microservice: Events -->
        <g class="service-node" :class="{ active: activeNode === 'events' }" @mouseenter="activeNode = 'events'" @mouseleave="activeNode = null">
          <rect x="1000" y="700" width="340" height="130" rx="10"
                fill="url(#microserviceGradient)"
                stroke="#F59E0B"
                stroke-width="2.5"/>
          <text x="1170" y="730" text-anchor="middle" fill="#F59E0B" font-weight="700" font-size="15">Events & Notifications</text>
          <line x1="1010" y1="740" x2="1330" y2="740" stroke="#F59E0B" stroke-width="1" opacity="0.3"/>

          <rect x="1015" y="750" width="75" height="28" rx="4" fill="rgba(245, 158, 11, 0.3)" stroke="#F59E0B" stroke-width="1"/>
          <text x="1052" y="768" text-anchor="middle" fill="#F59E0B" font-size="11" font-weight="600">Events</text>

          <rect x="1100" y="750" width="90" height="28" rx="4" fill="rgba(236, 72, 153, 0.3)" stroke="#EC4899" stroke-width="1"/>
          <text x="1145" y="768" text-anchor="middle" fill="#EC4899" font-size="11" font-weight="600">Notifications</text>

          <rect x="1200" y="750" width="120" height="28" rx="4" fill="rgba(52, 211, 153, 0.3)" stroke="#34D399" stroke-width="1"/>
          <text x="1260" y="768" text-anchor="middle" fill="#34D399" font-size="11" font-weight="600">Email Queue</text>

          <rect x="1015" y="788" width="60" height="28" rx="4" fill="rgba(251, 146, 60, 0.3)" stroke="#FB923C" stroke-width="1"/>
          <text x="1045" y="806" text-anchor="middle" fill="#FB923C" font-size="11" font-weight="600">Push</text>

          <rect x="1085" y="788" width="60" height="28" rx="4" fill="rgba(234, 179, 8, 0.3)" stroke="#EAB308" stroke-width="1"/>
          <text x="1115" y="806" text-anchor="middle" fill="#EAB308" font-size="11" font-weight="600">SMS</text>

          <rect x="1155" y="788" width="75" height="28" rx="4" fill="rgba(139, 92, 246, 0.3)" stroke="#8B5CF6" stroke-width="1"/>
          <text x="1192" y="806" text-anchor="middle" fill="#8B5CF6" font-size="11" font-weight="600">Webhooks</text>

          <rect x="1240" y="788" width="80" height="28" rx="4" fill="rgba(168, 85, 247, 0.3)" stroke="#A855F7" stroke-width="1"/>
          <text x="1280" y="806" text-anchor="middle" fill="#A855F7" font-size="11" font-weight="600">Templates</text>

          <!-- Broker layer -->
          <rect x="1010" y="826" width="320" height="24" rx="4" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
          <text x="1170" y="842" text-anchor="middle" fill="#3B82F6" font-size="10" font-weight="500">Broker (NATS / Kafka / Redis)</text>
        </g>

        <!-- Microservice: Integration Adapter -->
        <g class="service-node" :class="{ active: activeNode === 'adapter' }" @mouseenter="activeNode = 'adapter'" @mouseleave="activeNode = null">
          <rect x="1380" y="450" width="200" height="100" rx="10"
                fill="url(#microserviceGradient)"
                stroke="#10B981"
                stroke-width="2.5"/>
          <text x="1480" y="480" text-anchor="middle" fill="#10B981" font-weight="700" font-size="15">Integration Adapter</text>
          <line x1="1390" y1="490" x2="1570" y2="490" stroke="#10B981" stroke-width="1" opacity="0.3"/>

          <rect x="1395" y="500" width="75" height="24" rx="4" fill="rgba(16, 185, 129, 0.3)" stroke="#10B981" stroke-width="1"/>
          <text x="1432" y="516" text-anchor="middle" fill="#10B981" font-size="10" font-weight="600">REST</text>

          <rect x="1480" y="500" width="80" height="24" rx="4" fill="rgba(52, 211, 153, 0.3)" stroke="#34D399" stroke-width="1"/>
          <text x="1520" y="516" text-anchor="middle" fill="#34D399" font-size="10" font-weight="600">GraphQL</text>

          <!-- Broker layer -->
          <rect x="1390" y="528" width="180" height="18" rx="4" fill="rgba(59, 130, 246, 0.2)" stroke="#3B82F6" stroke-width="1"/>
          <text x="1480" y="541" text-anchor="middle" fill="#3B82F6" font-size="9" font-weight="500">Broker (NATS / Kafka)</text>
        </g>

        <!-- Integration Adapter -> Integration Channels -->
        <g class="connection">
          <line x1="1580" y1="490" x2="1650" y2="340" stroke="#10B981" stroke-width="2.5" opacity="0.6" stroke-dasharray="8,4"/>
          <circle class="pulse" r="4" fill="#10B981">
            <animateMotion dur="2.2s" repeatCount="indefinite" path="M1580,490 L1650,340" />
          </circle>
        </g>

        <!-- Dgraph Zero -->
        <g class="service-node" :class="{ active: activeNode === 'dgz' }" @mouseenter="activeNode = 'dgz'" @mouseleave="activeNode = null">
          <rect x="850" y="1000" width="180" height="100" rx="10"
                fill="rgba(139, 92, 246, 0.2)"
                stroke="#8B5CF6"
                stroke-width="2.5"/>
          <text x="940" y="1030" text-anchor="middle" fill="#8B5CF6" font-weight="700" font-size="16">DB</text>
          <line x1="860" y1="1042" x2="1020" y2="1042" stroke="#8B5CF6" stroke-width="1" opacity="0.3"/>
          <text x="940" y="1063" text-anchor="middle" fill="#8B5CF6" font-weight="600" font-size="14">Dgraph Zero</text>
          <text x="940" y="1085" text-anchor="middle" fill="#94A3B8" font-size="11">Cluster Manager</text>
        </g>

        <!-- Dgraph Alpha -->
        <g class="service-node" :class="{ active: activeNode === 'dga' }" @mouseenter="activeNode = 'dga'" @mouseleave="activeNode = null">
          <rect x="1050" y="1000" width="180" height="100" rx="10"
                fill="rgba(139, 92, 246, 0.2)"
                stroke="#8B5CF6"
                stroke-width="2.5"/>
          <text x="1140" y="1030" text-anchor="middle" fill="#8B5CF6" font-weight="700" font-size="16">DB</text>
          <line x1="1060" y1="1042" x2="1220" y2="1042" stroke="#8B5CF6" stroke-width="1" opacity="0.3"/>
          <text x="1140" y="1063" text-anchor="middle" fill="#8B5CF6" font-weight="600" font-size="14">Dgraph Alpha</text>
          <text x="1140" y="1085" text-anchor="middle" fill="#94A3B8" font-size="11">Data Storage</text>
        </g>

        <!-- CDC -->
        <g class="service-node" :class="{ active: activeNode === 'cdc' }" @mouseenter="activeNode = 'cdc'" @mouseleave="activeNode = null">
          <rect x="1580" y="950" width="200" height="100" rx="10"
                fill="rgba(168, 85, 247, 0.15)"
                stroke="#A855F7"
                stroke-width="2.5"/>
          <text x="1680" y="980" text-anchor="middle" fill="#A855F7" font-weight="700" font-size="15">CDC</text>
          <text x="1680" y="1002" text-anchor="middle" fill="#94A3B8" font-size="12">Change Data Capture</text>
          <line x1="1590" y1="1012" x2="1770" y2="1012" stroke="#A855F7" stroke-width="1" opacity="0.3"/>
          <text x="1680" y="1028" text-anchor="middle" fill="#94A3B8" font-size="10">→ Kafka Topics</text>
          <text x="1680" y="1043" text-anchor="middle" fill="#94A3B8" font-size="10" opacity="0.7">Real-time Streaming</text>
        </g>

        <!-- Other DBs -->
        <g class="service-node" opacity="0.5">
          <rect x="1280" y="1000" width="130" height="45" rx="6"
                fill="rgba(239, 68, 68, 0.1)"
                stroke="#EF4444"
                stroke-width="1.5"
                stroke-dasharray="6,4"/>
          <text x="1345" y="1028" text-anchor="middle" fill="#EF4444" font-size="12" font-weight="600">PostgreSQL</text>
        </g>

        <g class="service-node" opacity="0.5">
          <rect x="1280" y="1055" width="130" height="45" rx="6"
                fill="rgba(234, 179, 8, 0.1)"
                stroke="#EAB308"
                stroke-width="1.5"
                stroke-dasharray="6,4"/>
          <text x="1345" y="1083" text-anchor="middle" fill="#EAB308" font-size="12" font-weight="600">MongoDB</text>
        </g>

        <text x="1345" y="1125" text-anchor="middle" fill="#94A3B8" font-size="11" opacity="0.7">+ другие БД...</text>

        <!-- Транспортеры -->
        <text x="1690" y="925" text-anchor="middle" fill="#94A3B8" font-size="11" font-weight="600" opacity="0.7">
          Transporters:
        </text>
        <text x="1690" y="945" text-anchor="middle" fill="#94A3B8" font-size="9" opacity="0.6">
          NATS • Kafka • Redis • MQTT • AMQP
        </text>

        <!-- Легенда -->
        <g class="legend" transform="translate(150, 1180)">
          <text x="0" y="0" fill="#94A3B8" font-size="14" font-weight="700">Типы связей:</text>

          <line x1="0" y1="25" x2="40" y2="25" stroke="#00D9FF" stroke-width="3"/>
          <text x="50" y="30" fill="#94A3B8" font-size="12">Internet</text>

          <line x1="130" y1="25" x2="170" y2="25" stroke="#22C55E" stroke-width="2.5"/>
          <text x="180" y="30" fill="#94A3B8" font-size="12">HTTP/Gateway</text>

          <line x1="300" y1="25" x2="340" y2="25" stroke="#F59E0B" stroke-width="2.5"/>
          <text x="350" y="30" fill="#94A3B8" font-size="12">Microservices</text>

          <line x1="470" y1="25" x2="510" y2="25" stroke="#3B82F6" stroke-width="2" stroke-dasharray="6,4"/>
          <text x="520" y="30" fill="#94A3B8" font-size="12">NATS Broker</text>

          <line x1="640" y1="25" x2="680" y2="25" stroke="#0EA5E9" stroke-width="2" stroke-dasharray="6,4"/>
          <text x="690" y="30" fill="#94A3B8" font-size="12">Kafka Stream</text>

          <line x1="820" y1="25" x2="860" y2="25" stroke="#8B5CF6" stroke-width="2.5"/>
          <text x="870" y="30" fill="#94A3B8" font-size="12">Database</text>

          <line x1="970" y1="25" x2="1010" y2="25" stroke="#EF4444" stroke-width="2" stroke-dasharray="6,4"/>
          <text x="1020" y="30" fill="#94A3B8" font-size="12">Cache</text>

          <line x1="1100" y1="25" x2="1140" y2="25" stroke="#A855F7" stroke-width="2" stroke-dasharray="8,4"/>
          <text x="1150" y="30" fill="#94A3B8" font-size="12">CDC Stream</text>

          <line x1="1270" y1="25" x2="1310" y2="25" stroke="#EC4899" stroke-width="2" stroke-dasharray="8,4"/>
          <text x="1320" y="30" fill="#94A3B8" font-size="12">Perimeter Channel</text>

          <rect x="1490" y="17" width="18" height="18" rx="3" fill="none" stroke="#EF4444" stroke-width="1.5" stroke-dasharray="4,4"/>
          <text x="1515" y="30" fill="#94A3B8" font-size="12">Опционально</text>
        </g>
      </svg>
    </div>

    <div class="diagram-info">
      <p class="info-text">
        Полная архитектура микросервисной платформы с масштабируемостью, кешированием, CDC и интеграционными каналами
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

/* Стили сервисов */
.service-node {
  cursor: pointer;
  transition: all var(--transition-base);
}

.service-node.hoverable:hover rect,
.service-node.active rect {
  fill-opacity: 0.35;
  stroke-width: 3.5;
  filter: drop-shadow(0 0 14px currentColor);
}

.service-node rect {
  transition: all var(--transition-base);
}

.service-node text {
  pointer-events: none;
  user-select: none;
}

/* Легенда */
.legend text {
  font-family: var(--font-family-primary);
}

.legend line {
  opacity: 0.7;
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
    transform: scale(0.7);
    transform-origin: left top;
  }
}

/* Дополнительная анимация свечения при наведении */
@keyframes nodeGlow {
  0%, 100% {
    filter: drop-shadow(0 0 10px currentColor);
  }
  50% {
    filter: drop-shadow(0 0 20px currentColor);
  }
}

.service-node.active rect {
  animation: nodeGlow 2s ease-in-out infinite;
}
</style>
