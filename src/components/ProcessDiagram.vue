<template>
  <div class="process-diagram">
    <svg viewBox="0 0 1200 700" xmlns="http://www.w3.org/2000/svg" class="process-svg">
      <defs>
        <linearGradient id="phaseGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#0A84FF;stop-opacity:0.2" />
          <stop offset="100%" style="stop-color:#0A84FF;stop-opacity:0.05" />
        </linearGradient>

        <linearGradient id="iterationGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#22C55E;stop-opacity:0.3" />
          <stop offset="50%" style="stop-color:#0EA5E9;stop-opacity:0.3" />
          <stop offset="100%" style="stop-color:#22C55E;stop-opacity:0.3" />
        </linearGradient>

        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill="#00D9FF" />
        </marker>
      </defs>

      <!-- Title -->
      <text x="600" y="30" text-anchor="middle" fill="#0A84FF" font-size="20" font-weight="700">
        Процесс разработки
      </text>
      <text x="600" y="55" text-anchor="middle" fill="#94A3B8" font-size="13">
        Гибкий подход с параллельными этапами и итерациями
      </text>

      <!-- Phase 1: Аналитика (начинается первой) -->
      <g class="phase">
        <rect x="80" y="100" width="180" height="100" rx="10"
              fill="url(#phaseGradient)" stroke="#0A84FF" stroke-width="2"/>
        <text x="170" y="130" text-anchor="middle" fill="#0A84FF" font-size="15" font-weight="600">
          1. Аналитика
        </text>
        <text x="170" y="150" text-anchor="middle" fill="#94A3B8" font-size="11">
          • Изучение бизнес-процессов
        </text>
        <text x="170" y="168" text-anchor="middle" fill="#94A3B8" font-size="11">
          • Выбор tech stack
        </text>
        <text x="170" y="186" text-anchor="middle" fill="#94A3B8" font-size="11">
          1-2 недели
        </text>
      </g>

      <!-- Phase 2: Проектирование (стартует с небольшим сдвигом) -->
      <g class="phase">
        <rect x="80" y="230" width="180" height="100" rx="10"
              fill="url(#phaseGradient)" stroke="#8B5CF6" stroke-width="2"/>
        <text x="170" y="260" text-anchor="middle" fill="#8B5CF6" font-size="15" font-weight="600">
          2. Проектирование
        </text>
        <text x="170" y="280" text-anchor="middle" fill="#94A3B8" font-size="11">
          • Архитектура решения
        </text>
        <text x="170" y="298" text-anchor="middle" fill="#94A3B8" font-size="11">
          • Roadmap
        </text>
        <text x="170" y="316" text-anchor="middle" fill="#94A3B8" font-size="11">
          начинается параллельно
        </text>
      </g>

      <!-- Phase 3: Дизайн (стартует позже) -->
      <g class="phase">
        <rect x="80" y="360" width="180" height="100" rx="10"
              fill="url(#phaseGradient)" stroke="#EC4899" stroke-width="2"/>
        <text x="170" y="390" text-anchor="middle" fill="#EC4899" font-size="15" font-weight="600">
          3. Дизайн UX/UI
        </text>
        <text x="170" y="410" text-anchor="middle" fill="#94A3B8" font-size="11">
          • Пользовательские сценарии
        </text>
        <text x="170" y="428" text-anchor="middle" fill="#94A3B8" font-size="11">
          • Прототипирование
        </text>
        <text x="170" y="446" text-anchor="middle" fill="#94A3B8" font-size="11">
          1-3 недели
        </text>
      </g>

      <!-- Arrows showing parallel start -->
      <path d="M 260 150 L 320 150" stroke="#0A84FF" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
      <path d="M 260 280 L 320 280" stroke="#8B5CF6" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
      <path d="M 260 410 L 320 410" stroke="#EC4899" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>

      <!-- Convergence to Development -->
      <path d="M 320 150 Q 370 250 400 300" stroke="#00D9FF" stroke-width="2" fill="none" stroke-dasharray="5,5"/>
      <path d="M 320 280 L 400 300" stroke="#00D9FF" stroke-width="2" fill="none" stroke-dasharray="5,5"/>
      <path d="M 320 410 Q 370 350 400 300" stroke="#00D9FF" stroke-width="2" fill="none" stroke-dasharray="5,5"/>

      <!-- Phase 4: Development Sprints (КОЛЬЦО ИТЕРАЦИЙ) -->
      <g class="phase">
        <rect x="420" y="200" width="360" height="200" rx="12"
              fill="url(#iterationGradient)" stroke="#22C55E" stroke-width="3"/>

        <text x="600" y="230" text-anchor="middle" fill="#22C55E" font-size="16" font-weight="700">
          4. Разработка по спринтам
        </text>
        <text x="600" y="250" text-anchor="middle" fill="#94A3B8" font-size="12" font-style="italic">
          Agile / Scrum — Кольцо итераций
        </text>

        <!-- Cycle arrows показывающие итерации -->
        <g opacity="0.7">
          <ellipse cx="600" cy="320" rx="140" ry="50" fill="none" stroke="#0EA5E9" stroke-width="2" stroke-dasharray="8,4"/>
          <path d="M 740 320 Q 750 290 730 280" stroke="#0EA5E9" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>
        </g>

        <text x="600" y="310" text-anchor="middle" fill="#94A3B8" font-size="11">
          Sprint 2 недели
        </text>
        <text x="600" y="328" text-anchor="middle" fill="#94A3B8" font-size="10">
          Planning → Dev → Review → Retrospective
        </text>

        <text x="600" y="355" text-anchor="middle" fill="#0A84FF" font-size="11" font-weight="600">
          ✓ Демо каждые 2 недели
        </text>
        <text x="600" y="375" text-anchor="middle" fill="#0A84FF" font-size="11" font-weight="600">
          ✓ Возможность корректировок
        </text>
      </g>

      <!-- Arrow to Testing -->
      <path d="M 780 300 L 840 300" stroke="#00D9FF" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>

      <!-- Phase 5: Testing -->
      <g class="phase">
        <rect x="860" y="240" width="180" height="120" rx="10"
              fill="url(#phaseGradient)" stroke="#F59E0B" stroke-width="2"/>
        <text x="950" y="270" text-anchor="middle" fill="#F59E0B" font-size="15" font-weight="600">
          5. Тестирование
        </text>
        <text x="950" y="290" text-anchor="middle" fill="#94A3B8" font-size="10">
          • Unit-тесты
        </text>
        <text x="950" y="306" text-anchor="middle" fill="#94A3B8" font-size="10">
          • Интеграционное
        </text>
        <text x="950" y="322" text-anchor="middle" fill="#94A3B8" font-size="10">
          • Нагрузочное
        </text>
        <text x="950" y="338" text-anchor="middle" fill="#94A3B8" font-size="10">
          • UAT
        </text>
        <text x="950" y="354" text-anchor="middle" fill="#94A3B8" font-size="9" opacity="0.7">
          параллельно со спринтами
        </text>
      </g>

      <!-- Arrow to Launch -->
      <path d="M 950 360 L 950 420" stroke="#00D9FF" stroke-width="2" fill="none" marker-end="url(#arrowhead)"/>

      <!-- Phase 6: Launch & Support -->
      <g class="phase">
        <rect x="860" y="440" width="180" height="120" rx="10"
              fill="url(#phaseGradient)" stroke="#10B981" stroke-width="2"/>
        <text x="950" y="470" text-anchor="middle" fill="#10B981" font-size="15" font-weight="600">
          6. Запуск
        </text>
        <text x="950" y="490" text-anchor="middle" fill="#94A3B8" font-size="10">
          • Развертывание
        </text>
        <text x="950" y="506" text-anchor="middle" fill="#94A3B8" font-size="10">
          • Миграция данных
        </text>
        <text x="950" y="522" text-anchor="middle" fill="#94A3B8" font-size="10">
          • Обучение команды
        </text>
        <text x="950" y="538" text-anchor="middle" fill="#94A3B8" font-size="10">
          • Мониторинг
        </text>
        <text x="950" y="554" text-anchor="middle" fill="#94A3B8" font-size="9" font-weight="600">
          + Поддержка и развитие
        </text>
      </g>

      <!-- Timeline indicator -->
      <g>
        <line x1="100" y1="620" x2="1000" y2="620" stroke="#94A3B8" stroke-width="1" opacity="0.3"/>
        <text x="170" y="650" text-anchor="middle" fill="#94A3B8" font-size="10">
          Недели 1-2
        </text>
        <text x="600" y="650" text-anchor="middle" fill="#94A3B8" font-size="10">
          Недели 3-10+ (спринты)
        </text>
        <text x="950" y="650" text-anchor="middle" fill="#94A3B8" font-size="10">
          Постоянно
        </text>
      </g>

      <!-- Animated pulse on sprint cycle -->
      <circle r="5" fill="#22C55E" opacity="0.8">
        <animateMotion dur="4s" repeatCount="indefinite"
          path="M 740,320 A 140,50 0 1,0 460,320 A 140,50 0 1,0 740,320" />
        <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>

    <div class="process-features">
      <div class="feature-item">
        <div class="feature-icon">⚡</div>
        <div class="feature-text">
          <strong>Параллельный старт</strong>
          <p>Аналитика, проектирование и дизайн начинаются с небольшим сдвигом</p>
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🔄</div>
        <div class="feature-text">
          <strong>Кольцо итераций</strong>
          <p>Спринты по 2 недели с демо и возможностью корректировок</p>
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-icon">✅</div>
        <div class="feature-text">
          <strong>Постоянное тестирование</strong>
          <p>Проверка качества на каждом этапе разработки</p>
        </div>
      </div>
      <div class="feature-item">
        <div class="feature-icon">🚀</div>
        <div class="feature-text">
          <strong>Плавный запуск</strong>
          <p>Развертывание, обучение и переход к постоянной поддержке</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.process-diagram {
  width: 100%;
  background: var(--color-bg-primary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-2xl);
  box-shadow: var(--shadow-lg);
}

.process-svg {
  width: 100%;
  height: auto;
  margin-bottom: var(--spacing-2xl);
}

.phase {
  cursor: pointer;
  transition: transform 0.2s ease;
}

.phase:hover {
  transform: scale(1.02);
}

.process-features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
}

.feature-item {
  display: flex;
  gap: var(--spacing-md);
  align-items: flex-start;
  padding: var(--spacing-lg);
  background: rgba(10, 132, 255, 0.05);
  border-radius: var(--radius-md);
  border: 1px solid rgba(10, 132, 255, 0.1);
}

.feature-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.feature-text strong {
  color: var(--color-primary);
  font-size: var(--font-size-base);
  display: block;
  margin-bottom: var(--spacing-xs);
}

.feature-text p {
  color: var(--color-text-secondary);
  font-size: var(--font-size-small);
  margin: 0;
  line-height: var(--line-height-relaxed);
}

@media (max-width: 768px) {
  .process-diagram {
    padding: var(--spacing-lg);
  }

  .process-features {
    grid-template-columns: 1fr;
  }
}
</style>
