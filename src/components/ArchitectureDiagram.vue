<template>
  <div class="architecture">
    <!-- Layer 0: Users -->
    <div class="arch-layer">
      <div class="layer-label">Пользователи</div>
      <div class="layer-nodes">
        <div class="arch-node node-user">
          <div class="node-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" fill="currentColor"/></svg>
          </div>
          <div class="node-label">Web / Mobile</div>
        </div>
        <div class="arch-node node-user">
          <div class="node-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" fill="currentColor"/></svg>
          </div>
          <div class="node-label">External API</div>
        </div>
        <div class="arch-node node-user">
          <div class="node-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" fill="currentColor"/></svg>
          </div>
          <div class="node-label">VPN / SSH</div>
        </div>
      </div>
    </div>

    <!-- Connector -->
    <div class="arch-connector">
      <div class="connector-line"></div>
      <div class="connector-label">HTTPS / TLS</div>
    </div>

    <!-- Layer 1: Gateway -->
    <div class="arch-layer">
      <div class="layer-label">Gateway</div>
      <div class="layer-nodes">
        <div class="arch-node node-gateway node-wide">
          <div class="node-header">
            <div class="node-icon-sm">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>
            <span class="node-name">Traefik</span>
            <span class="node-tag">Reverse Proxy</span>
          </div>
          <div class="node-details">Load Balancing, SSL Termination, Rate Limiting</div>
        </div>
      </div>
    </div>

    <!-- Connector -->
    <div class="arch-connector arch-connector-split">
      <div class="connector-branches">
        <div class="connector-branch"></div>
        <div class="connector-branch"></div>
      </div>
    </div>

    <!-- Layer 2: Frontend + API -->
    <div class="arch-layer">
      <div class="layer-label">Приложения</div>
      <div class="layer-nodes layer-nodes-two">
        <!-- Frontend group -->
        <div class="node-group">
          <div class="group-label">Frontend</div>
          <div class="group-nodes">
            <div class="arch-node node-frontend">
              <div class="node-header">
                <div class="node-icon-sm">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" fill="currentColor"/></svg>
                </div>
                <span class="node-name">Nginx + SPA</span>
              </div>
              <div class="node-details">Angular / Vue / React</div>
              <div class="node-badge">x N</div>
            </div>
          </div>
        </div>

        <!-- API Gateway group -->
        <div class="node-group">
          <div class="group-label">API Layer</div>
          <div class="group-nodes">
            <div class="arch-node node-api">
              <div class="node-header">
                <div class="node-icon-sm">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" fill="currentColor"/></svg>
                </div>
                <span class="node-name">API Gateway</span>
              </div>
              <div class="node-details">REST, GraphQL, Auth, Validation</div>
              <div class="node-badge">x N</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Connector -->
    <div class="arch-connector">
      <div class="connector-line"></div>
      <div class="connector-label">gRPC / HTTP / Events</div>
    </div>

    <!-- Layer 3: Microservices -->
    <div class="arch-layer arch-layer-main">
      <div class="layer-label">Микросервисы</div>
      <div class="layer-nodes layer-nodes-services">
        <div class="arch-node node-service" v-for="svc in services" :key="svc.name">
          <div class="node-header">
            <span class="node-name">{{ svc.name }}</span>
          </div>
          <div class="node-modules">
            <span class="module-tag" v-for="mod in svc.modules" :key="mod">{{ mod }}</span>
          </div>
        </div>
      </div>
      <div class="layer-note">
        <span class="note-badge">Polyglot</span>
        JS, Python, Java, Go, .NET
      </div>
    </div>

    <!-- Connector -->
    <div class="arch-connector arch-connector-split">
      <div class="connector-branches">
        <div class="connector-branch"></div>
        <div class="connector-branch"></div>
        <div class="connector-branch"></div>
      </div>
    </div>

    <!-- Layer 4: Infrastructure -->
    <div class="arch-layer">
      <div class="layer-label">Инфраструктура</div>
      <div class="layer-nodes layer-nodes-infra">
        <div class="arch-node node-infra node-broker">
          <div class="node-header">
            <span class="node-name">Message Broker</span>
          </div>
          <div class="node-details">NATS / Redis Streams</div>
          <div class="node-sub">Pub/Sub, Event Streaming</div>
        </div>
        <div class="arch-node node-infra node-cache">
          <div class="node-header">
            <span class="node-name">Cache</span>
          </div>
          <div class="node-details">Redis / Dragonfly</div>
          <div class="node-sub">In-Memory, 4-Level</div>
        </div>
        <div class="arch-node node-infra node-storage">
          <div class="node-header">
            <span class="node-name">Object Storage</span>
          </div>
          <div class="node-details">S3-compatible (SeaweedFS / Yandex S3)</div>
          <div class="node-sub">Files, Media, Backups</div>
        </div>
      </div>
    </div>

    <!-- Connector -->
    <div class="arch-connector">
      <div class="connector-line"></div>
    </div>

    <!-- Layer 5: Databases -->
    <div class="arch-layer">
      <div class="layer-label">Данные</div>
      <div class="layer-nodes layer-nodes-db">
        <div class="arch-node node-db node-db-primary">
          <div class="node-header">
            <span class="node-name">Dgraph</span>
            <span class="node-tag">Primary</span>
          </div>
          <div class="node-details">Графовая БД</div>
          <div class="node-sub">Zero + Alpha, Replication</div>
        </div>
        <div class="arch-node node-db">
          <div class="node-header">
            <span class="node-name">PostgreSQL</span>
          </div>
          <div class="node-details">Реляционная БД</div>
        </div>
        <div class="arch-node node-db">
          <div class="node-header">
            <span class="node-name">MongoDB</span>
          </div>
          <div class="node-details">Документная БД</div>
        </div>
        <div class="arch-node node-db node-db-cdc">
          <div class="node-header">
            <span class="node-name">CDC</span>
          </div>
          <div class="node-details">Change Data Capture</div>
          <div class="node-sub">Real-time Streaming</div>
        </div>
      </div>
    </div>

    <!-- Side: Observability -->
    <div class="arch-sidebar">
      <div class="sidebar-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" fill="currentColor"/></svg>
        <span>Logging</span>
      </div>
      <div class="sidebar-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" fill="currentColor"/></svg>
        <span>Monitoring</span>
      </div>
      <div class="sidebar-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z" fill="currentColor"/></svg>
        <span>Security</span>
      </div>
      <div class="sidebar-item">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" fill="currentColor"/></svg>
        <span>Tracing</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const services = [
  {
    name: 'Entities Service',
    modules: ['CRUD', 'Validation', 'Permissions']
  },
  {
    name: 'User & Auth',
    modules: ['Auth', 'Roles', 'Groups']
  },
  {
    name: 'Events & Notify',
    modules: ['Email', 'Push', 'Webhooks']
  },
  {
    name: 'Integration',
    modules: ['REST', 'GraphQL', 'gRPC']
  },
  {
    name: 'BPM Engine',
    modules: ['Workflows', 'Tasks', 'Rules']
  }
]
</script>

<style scoped>
.architecture {
  position: relative;
  padding: var(--spacing-2xl);
  background: linear-gradient(180deg, rgba(15,23,42,0.95) 0%, rgba(15,23,42,0.85) 100%);
  border-radius: var(--radius-lg);
  border: 1px solid rgba(255,255,255,0.06);
  overflow: hidden;
}

.architecture::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    linear-gradient(rgba(239,63,41,0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(239,63,41,0.03) 1px, transparent 1px);
  background-size: 40px 40px;
  pointer-events: none;
}

/* === Layers === */
.arch-layer {
  position: relative;
  z-index: 1;
}

.layer-label {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: rgba(148,163,184,0.5);
  margin-bottom: 10px;
  padding-left: 4px;
}

.layer-nodes {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.layer-nodes-two {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.layer-nodes-services {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
  gap: 10px;
}

.layer-nodes-infra {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.layer-nodes-db {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.layer-note {
  margin-top: 8px;
  text-align: center;
  font-size: 11px;
  color: rgba(148,163,184,0.6);
}

.note-badge {
  display: inline-block;
  background: rgba(128,47,185,0.2);
  color: #a78bfa;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
  margin-right: 6px;
}

/* === Nodes === */
.arch-node {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 8px;
  padding: 12px 14px;
  transition: all 0.2s ease;
  position: relative;
}

.arch-node:hover {
  background: rgba(255,255,255,0.07);
  border-color: rgba(255,255,255,0.15);
  transform: translateY(-1px);
}

.node-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
}

.node-icon {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  flex-shrink: 0;
}

.node-icon-sm {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.node-name {
  font-size: 13px;
  font-weight: 600;
  color: #e2e8f0;
  white-space: nowrap;
}

.node-tag {
  font-size: 9px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  padding: 2px 6px;
  border-radius: 3px;
  white-space: nowrap;
}

.node-details {
  font-size: 11px;
  color: rgba(148,163,184,0.7);
  line-height: 1.4;
}

.node-sub {
  font-size: 10px;
  color: rgba(148,163,184,0.45);
  margin-top: 2px;
}

.node-label {
  font-size: 11px;
  color: rgba(148,163,184,0.8);
  text-align: center;
  margin-top: 6px;
}

.node-badge {
  position: absolute;
  top: 8px;
  right: 8px;
  font-size: 9px;
  font-weight: 700;
  color: rgba(148,163,184,0.4);
  background: rgba(255,255,255,0.05);
  padding: 1px 5px;
  border-radius: 3px;
}

.node-modules {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 6px;
}

.module-tag {
  font-size: 10px;
  padding: 2px 6px;
  border-radius: 3px;
  font-weight: 500;
  background: rgba(255,255,255,0.05);
  color: rgba(148,163,184,0.7);
  border: 1px solid rgba(255,255,255,0.06);
}

/* === Node Colors === */

/* User nodes */
.node-user {
  text-align: center;
  padding: 14px 20px;
}
.node-user .node-icon {
  background: rgba(239,63,41,0.15);
  color: #ef3f29;
  margin: 0 auto;
}

/* Gateway */
.node-gateway {
  border-color: rgba(236,72,153,0.3);
  background: rgba(236,72,153,0.08);
}
.node-gateway .node-name { color: #f472b6; }
.node-gateway .node-tag { background: rgba(236,72,153,0.15); color: #f472b6; }
.node-gateway .node-icon-sm { color: #f472b6; }
.node-wide { max-width: 500px; width: 100%; margin: 0 auto; }

/* Frontend */
.node-frontend {
  border-color: rgba(34,197,94,0.3);
  background: rgba(34,197,94,0.06);
}
.node-frontend .node-name { color: #4ade80; }
.node-frontend .node-icon-sm { color: #4ade80; }

/* API */
.node-api {
  border-color: rgba(245,158,11,0.3);
  background: rgba(245,158,11,0.06);
}
.node-api .node-name { color: #fbbf24; }
.node-api .node-icon-sm { color: #fbbf24; }

/* Services */
.node-service {
  border-color: rgba(239,63,41,0.2);
  background: rgba(239,63,41,0.05);
}
.node-service .node-name { color: #fb923c; font-size: 12px; }
.node-service .module-tag {
  background: rgba(239,63,41,0.1);
  border-color: rgba(239,63,41,0.15);
  color: rgba(251,146,60,0.8);
}

/* Main layer highlight */
.arch-layer-main {
  background: rgba(239,63,41,0.03);
  border: 1px solid rgba(239,63,41,0.08);
  border-radius: 10px;
  padding: 14px;
  margin: 0 -8px;
}

/* Infra nodes */
.node-infra {
  text-align: center;
}
.node-infra .node-header { justify-content: center; }
.node-broker {
  border-color: rgba(59,130,246,0.3);
  background: rgba(59,130,246,0.06);
}
.node-broker .node-name { color: #60a5fa; }

.node-cache {
  border-color: rgba(239,68,68,0.3);
  background: rgba(239,68,68,0.06);
}
.node-cache .node-name { color: #f87171; }

.node-storage {
  border-color: rgba(249,115,22,0.3);
  background: rgba(249,115,22,0.06);
}
.node-storage .node-name { color: #fb923c; }

/* DB nodes */
.node-db {
  text-align: center;
  border-color: rgba(139,92,246,0.25);
  background: rgba(139,92,246,0.05);
}
.node-db .node-header { justify-content: center; }
.node-db .node-name { color: #a78bfa; }
.node-db .node-tag { background: rgba(139,92,246,0.2); color: #a78bfa; }
.node-db-primary {
  border-color: rgba(139,92,246,0.4);
  background: rgba(139,92,246,0.1);
}
.node-db-cdc {
  border-color: rgba(168,85,247,0.25);
  background: rgba(168,85,247,0.05);
}
.node-db-cdc .node-name { color: #c084fc; }

/* === Connectors === */
.arch-connector {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 0;
  position: relative;
  z-index: 1;
}

.connector-line {
  width: 2px;
  height: 24px;
  background: linear-gradient(180deg, rgba(148,163,184,0.3) 0%, rgba(148,163,184,0.1) 100%);
  border-radius: 1px;
}

.connector-label {
  font-size: 9px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(148,163,184,0.35);
  margin-top: 4px;
}

.arch-connector-split {
  padding: 6px 0;
}

.connector-branches {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  position: relative;
}

.connector-branches::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 10px;
  background: rgba(148,163,184,0.25);
}

.connector-branches::after {
  content: '';
  position: absolute;
  top: 10px;
  left: calc(50% - 40px);
  width: 80px;
  height: 2px;
  background: rgba(148,163,184,0.15);
}

.connector-branch {
  width: 2px;
  height: 20px;
  background: rgba(148,163,184,0.2);
  margin-top: 10px;
}

/* === Node Groups === */
.node-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.group-label {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: rgba(148,163,184,0.4);
}

.group-nodes {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* === Sidebar (Observability) === */
.arch-sidebar {
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 6px;
  z-index: 2;
}

.sidebar-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 10px;
  font-weight: 500;
  color: rgba(148,163,184,0.4);
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid rgba(255,255,255,0.04);
  background: rgba(15,23,42,0.7);
  backdrop-filter: blur(4px);
}

.sidebar-item svg {
  color: rgba(148,163,184,0.3);
  flex-shrink: 0;
}

/* === Responsive === */
@media (max-width: 768px) {
  .architecture {
    padding: var(--spacing-lg);
  }

  .arch-sidebar {
    position: relative;
    top: auto;
    right: auto;
    transform: none;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 16px;
  }

  .layer-nodes-two {
    grid-template-columns: 1fr;
  }

  .layer-nodes-services {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  .layer-nodes-infra,
  .layer-nodes-db {
    grid-template-columns: repeat(2, 1fr);
  }

  .node-wide {
    max-width: 100%;
  }

  .connector-branches {
    gap: 20px;
  }

  .connector-branches::after {
    left: calc(50% - 20px);
    width: 40px;
  }
}

@media (max-width: 480px) {
  .layer-nodes-infra,
  .layer-nodes-db {
    grid-template-columns: 1fr;
  }

  .layer-nodes-services {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
