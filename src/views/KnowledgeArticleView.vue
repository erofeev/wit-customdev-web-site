<template>
  <div class="article-page">
    <section class="section" v-if="article">
      <div class="container">
        <div class="article-layout">
          <article class="article-content">
            <RouterLink to="/knowledge" class="article-back">← База знаний</RouterLink>

            <div class="article-meta">
              <span class="article-cat" :style="{ color: article.catColor }">{{ article.catLabel }}</span>
              <span class="article-time">{{ article.readTime }} мин чтения</span>
            </div>

            <h1 class="article-title">{{ article.title }}</h1>

            <div class="article-author-row">
              <div class="article-author-avatar" :style="{ background: article.authorColor }">
                {{ article.authorInitials }}
              </div>
              <div>
                <div class="article-author-name">{{ article.author }}</div>
                <div class="article-author-role">WONE IT | Практика разработки</div>
              </div>
            </div>

            <div class="article-body" v-html="article.body"></div>

            <div class="article-tags">
              <RouterLink
                v-for="tag in article.tags"
                :key="tag"
                :to="getTagLink(tag)"
                class="article-tag"
              >{{ tag }}</RouterLink>
            </div>
          </article>

          <!-- Sidebar -->
          <aside class="article-sidebar">
            <div class="sidebar-block sidebar-cta">
              <h4>Нужна помощь с {{ article.catLabel.toLowerCase() }}?</h4>
              <p>Наши эксперты помогут с вашим проектом</p>
              <RouterLink to="/contact" class="btn btn-primary btn-sm">Обсудить</RouterLink>
            </div>

            <div class="sidebar-block">
              <h4>Связанные статьи</h4>
              <div class="related-list">
                <RouterLink
                  v-for="rel in relatedArticles"
                  :key="rel.slug"
                  :to="`/knowledge/${rel.slug}`"
                  class="related-link"
                >
                  {{ rel.title }}
                </RouterLink>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <section class="section" v-else>
      <div class="container">
        <div class="article-not-found">
          <h2>Статья не найдена</h2>
          <p>Возможно, она ещё в работе</p>
          <RouterLink to="/knowledge" class="btn btn-primary">Вернуться к базе знаний</RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()

const tagToSlug: Record<string, string> = {
  'Микросервисы': 'microservices-architecture',
  'Архитектура': 'domain-driven-design',
  'Монолит': 'monolith-to-microservices',
  'API Gateway': 'api-gateway-patterns',
  'Kubernetes': 'kubernetes-production',
  'NDR': 'ndr-network-detection-response',
  'Сетевая безопасность': 'network-security-smb',
  'WoneNDR': 'ndr-network-detection-response',
  'DPI': 'network-traffic-analysis',
  'Угрозы': 'owasp-top-10',
  'Vue': 'vue-vs-react-vs-angular',
  'React': 'vue-vs-react-vs-angular',
  'Angular': 'vue-vs-react-vs-angular',
  'TypeScript': 'typescript-enterprise',
  'Frontend': 'nextjs-nuxtjs-ssr',
  'Dgraph': 'graphdb-dgraph-guide',
  'GraphQL': 'graphql-rest-api-design',
  'Графовые БД': 'graphdb-dgraph-guide',
  'NoSQL': 'mongodb-use-cases',
  'WoneScale': 'bpm-business-automation',
  'Docker': 'docker-containerization',
  'DevOps': 'cicd-best-practices',
  'CI/CD': 'cicd-best-practices',
  'Автомасштабирование': 'kubernetes-production',
  'Traefik': 'api-gateway-patterns',
  'REST': 'graphql-rest-api-design',
  'Rate Limiting': 'rate-limiting-patterns',
  'Безопасность': 'owasp-top-10',
  'Аудит': 'network-security-smb',
  'SMB': 'network-security-smb',
  'Kafka': 'kafka-event-streaming',
  'Event-driven': 'kafka-event-streaming',
  'Event Sourcing': 'event-sourcing-cqrs',
  'CQRS': 'event-sourcing-cqrs',
  'Streaming': 'kafka-event-streaming',
  'Redis': 'redis-caching-strategies',
  'Кэширование': 'redis-caching-strategies',
  'Dragonfly': 'redis-caching-strategies',
  'Производительность': 'web-performance',
  'NATS': 'nats-messaging',
  'Message Broker': 'nats-messaging',
  'Pub/Sub': 'nats-messaging',
  'Node.js': 'nodejs-python-java-go',
  'Python': 'nodejs-python-java-go',
  'Java': 'nodejs-python-java-go',
  'Go': 'nodejs-python-java-go',
  'Backend': 'nodejs-python-java-go',
  'PostgreSQL': 'postgresql-optimization',
  'SQL': 'postgresql-optimization',
  'Оптимизация': 'postgresql-optimization',
  'Индексы': 'postgresql-optimization',
  'GitLab': 'cicd-best-practices',
  'Автотесты': 'testing-pyramid',
  'Контейнеризация': 'docker-containerization',
  'Multi-stage': 'docker-containerization',
  'API': 'graphql-rest-api-design',
  'JavaScript': 'typescript-enterprise',
  'Strict Mode': 'typescript-enterprise',
  'BPM': 'bpm-business-automation',
  'Camunda': 'bpm-business-automation',
  'Автоматизация': 'bpm-business-automation',
  'Agile': 'agile-development-process',
  'Scrum': 'agile-development-process',
  'Процессы': 'agile-development-process',
  'Код-ревью': 'code-review-practices',
  'MongoDB': 'mongodb-use-cases',
  'Документная БД': 'mongodb-use-cases',
  'Базы данных': 'mongodb-use-cases',
  'Machine Learning': 'network-traffic-analysis',
  'Аномалии': 'network-traffic-analysis',
  'DDD': 'domain-driven-design',
  'Domain-Driven Design': 'domain-driven-design',
  'Zero Trust': 'zero-trust-architecture',
  'OWASP': 'owasp-top-10',
  'SIEM': 'siem-integration',
  'Next.js': 'nextjs-nuxtjs-ssr',
  'Nuxt.js': 'nextjs-nuxtjs-ssr',
  'SSR': 'nextjs-nuxtjs-ssr',
  'Design System': 'design-system-guide',
  'Web Performance': 'web-performance',
  'PWA': 'pwa-progressive-web-apps',
  'gRPC': 'grpc-microservices',
  'OAuth': 'oauth-jwt-authentication',
  'JWT': 'oauth-jwt-authentication',
  'WebSocket': 'websocket-realtime',
  'Elasticsearch': 'elasticsearch-search',
  'Миграции': 'database-migration-strategies',
  'Бэкапы': 'data-backup-recovery',
  'Terraform': 'terraform-infrastructure',
  'IaC': 'terraform-infrastructure',
  'Мониторинг': 'monitoring-observability',
  'Observability': 'monitoring-observability',
  'Prometheus': 'monitoring-observability',
  'Grafana': 'monitoring-observability',
  'GitOps': 'gitops-argocd',
  'ArgoCD': 'gitops-argocd',
  'Балансировка': 'load-balancing-strategies',
  'Пирамида тестирования': 'testing-pyramid',
  'k6': 'load-testing-k6',
  'Playwright': 'e2e-testing-playwright',
  'Cypress': 'e2e-testing-playwright',
  'Технический долг': 'technical-debt',
  'MVP': 'mvp-development',
  'Cloud Native': 'cloud-native-architecture',
  'Serverless': 'serverless-functions',
  'Feature Flags': 'feature-flags',
  'Helm': 'kubernetes-production',
  'Ansible': 'terraform-infrastructure',
  'ELK': 'monitoring-observability',
  'Jenkins': 'cicd-best-practices',
  'GitHub Actions': 'cicd-best-practices',
  'RLS': 'rls-fls-data-security',
  'FLS': 'rls-fls-data-security',
  'Multi-tenant': 'rls-fls-data-security',
  'Data Showcase': 'rls-fls-data-security'
}

const getTagLink = (tag: string): string => {
  const slug = tagToSlug[tag]
  return slug ? `/knowledge/${slug}` : '/knowledge'
}

interface ArticleData {
  slug: string
  title: string
  catLabel: string
  catColor: string
  readTime: number
  author: string
  authorInitials: string
  authorColor: string
  body: string
  tags: string[]
  category: string
}

const articlesDb: Record<string, ArticleData> = {
  'microservices-architecture': {
    slug: 'microservices-architecture',
    title: 'Микросервисная архитектура: когда она действительно нужна',
    catLabel: 'Архитектура',
    catColor: '#ef3f29',
    readTime: 12,
    author: 'Команда архитектуры',
    authorInitials: 'КА',
    authorColor: '#ef3f29',
    category: 'architecture',
    tags: ['Микросервисы', 'Архитектура', 'Монолит', 'API Gateway', 'Kubernetes'],
    body: `
      <h2>Не все проекты нуждаются в микросервисах</h2>
      <p>За 18 лет разработки мы видели десятки проектов, где микросервисная архитектура была внедрена преждевременно. Результат — усложнение инфраструктуры без реальной пользы. Но мы также видели проекты, где микросервисы стали единственным способом масштабироваться.</p>

      <h2>Когда микросервисы нужны</h2>
      <p><strong>Команда больше 15 человек.</strong> Если несколько команд работают над одним продуктом, микросервисы дают им независимость. Каждая команда владеет своим сервисом: деплоит, мониторит, развивает.</p>
      <p><strong>Разные профили нагрузки.</strong> Один модуль обрабатывает 10,000 RPS, а другой — 10. Микросервисы позволяют масштабировать только то, что нужно.</p>
      <p><strong>Разные технологии.</strong> В нашей платформе WoneScale мы используем полиглот-подход: Node.js для API Gateway, Python для ML-сервисов, Go для высоконагруженных обработчиков.</p>

      <h2>Когда монолит лучше</h2>
      <p><strong>Стартап / MVP.</strong> Скорость разработки важнее масштабируемости. Монолит проще деплоить, тестировать и отлаживать.</p>
      <p><strong>Маленькая команда.</strong> 3-5 человек не нуждаются в распределённой системе — накладные расходы съедят всё ускорение.</p>

      <h2>Наш подход: «модульный монолит → микросервисы»</h2>
      <p>Мы начинаем с модульного монолита с чёткими границами между модулями. Когда проект растёт — выделяем модули в микросервисы. Это снижает начальную сложность и позволяет масштабироваться когда это реально нужно.</p>

      <blockquote>В WoneScale мы предоставляем оба варианта: хотите быстрый старт — берёте монолитную конфигурацию. Нужно масштабирование — включаете микросервисный режим без переписывания кода.</blockquote>

      <h2>Ключевые паттерны</h2>
      <ul>
        <li><strong>API Gateway</strong> — единая точка входа, роутинг, аутентификация</li>
        <li><strong>Service Discovery</strong> — автоматическое обнаружение сервисов</li>
        <li><strong>Circuit Breaker</strong> — защита от каскадных сбоев</li>
        <li><strong>Event Sourcing</strong> — асинхронное взаимодействие через брокер сообщений (NATS)</li>
      </ul>
    `
  },
  'ndr-network-detection-response': {
    slug: 'ndr-network-detection-response',
    title: 'Что такое NDR и зачем он нужен вашей компании',
    catLabel: 'Безопасность',
    catColor: '#802fb9',
    readTime: 8,
    author: 'Отдел безопасности',
    authorInitials: 'ОБ',
    authorColor: '#802fb9',
    category: 'security',
    tags: ['NDR', 'Сетевая безопасность', 'WoneNDR', 'DPI', 'Угрозы'],
    body: `
      <h2>NDR — это не ещё один антивирус</h2>
      <p>Network Detection & Response (NDR) — это класс решений, которые анализируют сетевой трафик в реальном времени для обнаружения угроз, которые <strong>уже проникли</strong> в вашу сеть.</p>

      <p>Файрвол защищает периметр. Антивирус ищет известные угрозы на эндпоинтах. Но что если атакующий уже внутри? NDR видит аномальное поведение в самом трафике.</p>

      <h2>Как работает NDR</h2>
      <p><strong>1. Захват трафика.</strong> Зеркалирование сетевого трафика через SPAN-порт или TAP. Без влияния на производительность сети.</p>
      <p><strong>2. Deep Packet Inspection.</strong> Анализ содержимого пакетов, распознавание протоколов, извлечение метаданных.</p>
      <p><strong>3. Поведенческий анализ.</strong> ML-модели находят аномалии: необычные подключения, эксфильтрацию данных, lateral movement.</p>
      <p><strong>4. Автоматический ответ.</strong> Блокировка подозрительных соединений, уведомления, интеграция с SIEM.</p>

      <h2>Зачем NDR среднему бизнесу</h2>
      <p>Раньше NDR был доступен только крупным компаниям с бюджетом от 10 млн ₽. WoneNDR делает эту технологию доступной:</p>
      <ul>
        <li>Установка за 30 минут, не нужен выделенный SOC</li>
        <li>Автоматическая карта сети за 24 часа</li>
        <li>Понятные отчёты без необходимости быть экспертом по ИБ</li>
        <li>Бесплатный тариф для малых сетей (до 50 устройств)</li>
      </ul>

      <blockquote>67% кибератак в 2024 году затронули компании среднего размера — именно потому, что у них нет инструментов обнаружения.</blockquote>
    `
  },
  'vue-vs-react-vs-angular': {
    slug: 'vue-vs-react-vs-angular',
    title: 'Vue, React или Angular: как мы выбираем фреймворк',
    catLabel: 'Frontend',
    catColor: '#22c55e',
    readTime: 10,
    author: 'Frontend-команда',
    authorInitials: 'FE',
    authorColor: '#22c55e',
    category: 'frontend',
    tags: ['Vue', 'React', 'Angular', 'TypeScript', 'Frontend'],
    body: `
      <h2>Нет «лучшего» фреймворка. Есть подходящий.</h2>
      <p>Мы работаем со всеми тремя фреймворками в production. Выбор зависит от проекта, команды клиента и долгосрочных целей.</p>

      <h2>Angular — для enterprise с большими командами</h2>
      <p>Angular навязывает структуру. Это плюс для больших команд: все пишут одинаково. TypeScript обязателен, есть встроенный DI, роутинг, формы. Но порог входа выше.</p>
      <p><strong>Выбираем, когда:</strong> большая команда (10+), долгосрочный enterprise-проект, нужна строгая архитектура.</p>

      <h2>React — для гибкости и экосистемы</h2>
      <p>React — это библиотека, не фреймворк. Даёт свободу выбора: любой стейт-менеджер, любой роутер. Огромная экосистема и комьюнити.</p>
      <p><strong>Выбираем, когда:</strong> нужна максимальная гибкость, много кастомных UI-компонентов, команда уже знает React.</p>

      <h2>Vue — для скорости разработки</h2>
      <p>Vue сочетает лучшее из обоих миров: достаточно мнений (как Angular), но гибкость (как React). Composition API + TypeScript — мощная комбинация.</p>
      <p><strong>Выбираем, когда:</strong> нужен быстрый старт, команда небольшая, важна скорость итераций.</p>

      <blockquote>В WoneScale мы поддерживаем все три фреймворка на уровне платформы. Frontend — это «лицо» системы, и клиент должен иметь выбор.</blockquote>
    `
  },
  'graphdb-dgraph-guide': {
    slug: 'graphdb-dgraph-guide',
    title: 'Графовые базы данных: Dgraph в production',
    catLabel: 'Базы данных',
    catColor: '#8b5cf6',
    readTime: 15,
    author: 'Команда данных',
    authorInitials: 'КД',
    authorColor: '#8b5cf6',
    category: 'databases',
    tags: ['Dgraph', 'GraphQL', 'Графовые БД', 'NoSQL', 'WoneScale'],
    body: `
      <h2>Почему реляционные БД не всегда справляются</h2>
      <p>В реляционной базе запрос «найди всех клиентов, которые покупали товары из категории X, и их менеджеров» — это 5-7 JOIN-ов. С ростом данных такие запросы замедляются экспоненциально.</p>

      <p>В графовой базе это один обход графа. Время ответа остаётся стабильным независимо от объёма данных.</p>

      <h2>Dgraph: почему мы выбрали его</h2>
      <ul>
        <li><strong>Горизонтальное масштабирование</strong> — шарды данных распределяются автоматически</li>
        <li><strong>GraphQL из коробки</strong> — не нужен дополнительный API-слой</li>
        <li><strong>ACID-транзакции</strong> — надёжность на уровне PostgreSQL</li>
        <li><strong>Zero + Alpha архитектура</strong> — отделение управления кластером от данных</li>
      </ul>

      <h2>Когда графовая БД нужна</h2>
      <p><strong>Сложные связи.</strong> CRM, социальные графы, рекомендации, управление активами — всюду, где у сущности больше 5 связей.</p>
      <p><strong>Гибкая схема.</strong> В Dgraph можно добавлять поля и связи без миграций — идеально для быстро меняющихся продуктов.</p>

      <blockquote>В WoneScale Dgraph — основная БД. Все сущности, связи и права хранятся в графе. Это позволяет менять схему данных в runtime без остановки системы.</blockquote>
    `
  },
  'kubernetes-production': {
    slug: 'kubernetes-production',
    title: 'Kubernetes в production: уроки из 50+ деплоев',
    catLabel: 'DevOps',
    catColor: '#3b82f6',
    readTime: 14,
    author: 'DevOps-инженеры',
    authorInitials: 'DO',
    authorColor: '#3b82f6',
    category: 'devops',
    tags: ['Kubernetes', 'Docker', 'DevOps', 'CI/CD', 'Автомасштабирование'],
    body: `
      <h2>K8s — не серебряная пуля</h2>
      <p>Kubernetes решает проблемы оркестрации контейнеров. Но добавляет сложность. Вот наши уроки из 50+ production-деплоев.</p>

      <h2>Когда K8s оправдан</h2>
      <ul>
        <li>10+ микросервисов</li>
        <li>Нужно автомасштабирование</li>
        <li>Zero-downtime деплой — обязательное требование</li>
        <li>Несколько окружений (dev, staging, production)</li>
      </ul>

      <h2>Типичные ошибки</h2>
      <p><strong>1. Недостаточные лимиты ресурсов.</strong> Без limits Pod может забрать всю память ноды и убить соседние сервисы.</p>
      <p><strong>2. Отсутствие health checks.</strong> Liveness и readiness probes — обязательны. Без них K8s не может правильно управлять Pod-ами.</p>
      <p><strong>3. Секреты в ConfigMap.</strong> Мы храним секреты в Kubernetes Secrets и внешних хранилищах (Vault). Пароли в открытом виде — недопустимо.</p>

      <h2>Наш стек</h2>
      <p>В WoneScale мы используем: K8s для оркестрации, Helm для пакетирования, ArgoCD для GitOps, Prometheus + Grafana для мониторинга.</p>

      <blockquote>В наших проектах мы подбираем уровень оркестрации под задачу: Docker Compose для разработки, Docker Swarm для малых проектов, и Kubernetes когда нагрузка и команда действительно выросли. Это позволяет клиентам не переплачивать за инфраструктуру на старте.</blockquote>
    `
  },
  'api-gateway-patterns': {
    slug: 'api-gateway-patterns',
    title: 'API Gateway: паттерны и антипаттерны',
    catLabel: 'Backend',
    catColor: '#f59e0b',
    readTime: 11,
    author: 'Backend-команда',
    authorInitials: 'BE',
    authorColor: '#f59e0b',
    category: 'backend',
    tags: ['API Gateway', 'Traefik', 'REST', 'GraphQL', 'Rate Limiting'],
    body: `
      <h2>Зачем нужен API Gateway</h2>
      <p>API Gateway — это единая точка входа для всех клиентов. Он берёт на себя: роутинг, аутентификацию, rate limiting, трансформацию запросов, агрегацию ответов.</p>

      <h2>Traefik vs Kong vs кастомный</h2>
      <p><strong>Traefik</strong> — наш основной выбор для WoneScale. Автоматическое обнаружение сервисов в Docker/K8s, Let's Encrypt из коробки, middleware-pipeline.</p>
      <p><strong>Kong</strong> — хорош для API Management с порталом для разработчиков. Но тяжелее в настройке.</p>
      <p><strong>Кастомный</strong> — иногда пишем свой на Node.js/Go, когда нужна нестандартная логика агрегации.</p>

      <h2>Паттерны</h2>
      <ul>
        <li><strong>BFF (Backend for Frontend)</strong> — отдельный gateway для каждого типа клиента</li>
        <li><strong>Rate Limiting</strong> — защита от DDoS и злоупотреблений</li>
        <li><strong>Circuit Breaker</strong> — прекращение запросов к упавшему сервису</li>
        <li><strong>Request/Response Transformation</strong> — адаптация формата между клиентом и микросервисом</li>
      </ul>

      <blockquote>Распространённая ошибка — перенос бизнес-логики в Gateway. В нашей архитектуре Gateway строго отвечает за маршрутизацию и авторизацию, а бизнес-логика живёт в специализированных сервисах. Это упрощает масштабирование и поддержку.</blockquote>
    `
  },
  'network-security-smb': {
    slug: 'network-security-smb',
    title: 'Сетевая безопасность для среднего бизнеса: с чего начать',
    catLabel: 'Безопасность',
    catColor: '#802fb9',
    readTime: 9,
    author: 'Отдел безопасности',
    authorInitials: 'ОБ',
    authorColor: '#802fb9',
    category: 'security',
    tags: ['Безопасность', 'NDR', 'Аудит', 'SMB', 'WoneNDR'],
    body: `
      <h2>5 шагов к защищённой сети</h2>
      <p>Большинство компаний среднего бизнеса уязвимы не потому, что у них плохие системы — а потому, что у них <strong>нет видимости</strong> происходящего в сети.</p>

      <h2>Шаг 1: Инвентаризация</h2>
      <p>Вы точно знаете, что подключено к вашей сети? WoneNDR создаёт карту сети автоматически за 24 часа: все устройства, протоколы, связи.</p>

      <h2>Шаг 2: Сегментация</h2>
      <p>Разделите сеть на зоны: офис, серверы, IoT, гости. Если атакующий попал в одну зону — он не должен попасть в другие.</p>

      <h2>Шаг 3: Мониторинг</h2>
      <p>Без NDR вы узнаёте о взломе в среднем через 207 дней. С NDR — в реальном времени.</p>

      <h2>Шаг 4: Реагирование</h2>
      <p>План реагирования на инциденты: кто, что, когда делает при обнаружении угрозы.</p>

      <h2>Шаг 5: Регулярный аудит</h2>
      <p>Безопасность — не разовое мероприятие. Ежеквартальная проверка + обновление политик.</p>

      <blockquote>Мы предлагаем бесплатный аудит сети с помощью WoneNDR. За 48 часов вы получите полную картину: что подключено, какие протоколы используются, есть ли аномалии.</blockquote>
    `
  },
  'kafka-event-streaming': {
    slug: 'kafka-event-streaming',
    title: 'Event-driven архитектура: паттерны асинхронного взаимодействия',
    catLabel: 'Архитектура',
    catColor: '#ef3f29',
    readTime: 14,
    author: 'Команда архитектуры',
    authorInitials: 'КА',
    authorColor: '#ef3f29',
    category: 'architecture',
    tags: ['Event-driven', 'Event Sourcing', 'CQRS', 'NATS', 'Микросервисы'],
    body: `
      <h2>Почему события, а не запросы</h2>
      <p>В классической архитектуре сервис A вызывает сервис B синхронно. Если B упал — A тоже ломается. Event-driven подход разрывает эту связь: сервисы обмениваются событиями через брокер сообщений, и каждый работает независимо.</p>

      <h2>Брокер сообщений как ядро системы</h2>
      <p>Современные event-driven системы строятся на брокерах сообщений — NATS, RabbitMQ и других. Брокер обеспечивает доставку, порядок и при необходимости персистентность событий. Выбор конкретного брокера зависит от требований: скорость, гарантии доставки, простота эксплуатации.</p>

      <h2>Паттерны в WoneScale</h2>
      <ul>
        <li><strong>Event Sourcing</strong> — храним историю изменений, а не текущее состояние</li>
        <li><strong>CQRS</strong> — разделяем чтение и запись для оптимизации</li>
        <li><strong>CDC</strong> — Change Data Capture для real-time аналитики</li>
        <li><strong>Saga</strong> — распределённые транзакции через цепочку событий</li>
      </ul>

      <blockquote>В WoneScale NATS обрабатывает все межсервисные события: создание сущностей, изменение прав, нотификации, аудит-логи. Архитектура позволяет подключить и другие брокеры при необходимости.</blockquote>
    `
  },
  'redis-caching-strategies': {
    slug: 'redis-caching-strategies',
    title: 'Redis: стратегии кэширования для веб-приложений',
    catLabel: 'Базы данных',
    catColor: '#8b5cf6',
    readTime: 10,
    author: 'Команда данных',
    authorInitials: 'КД',
    authorColor: '#8b5cf6',
    category: 'databases',
    tags: ['Redis', 'Кэширование', 'Dragonfly', 'Производительность'],
    body: `
      <h2>4 уровня кэширования</h2>
      <p>В WoneScale мы используем многоуровневое кэширование: каждый уровень отсекает нагрузку до следующего.</p>

      <ul>
        <li><strong>Browser Cache</strong> — статика, иммутабельные ресурсы</li>
        <li><strong>CDN</strong> — географическая близость к пользователю</li>
        <li><strong>Application Cache (Redis)</strong> — результаты запросов, сессии, computed данные</li>
        <li><strong>Query Cache</strong> — кэш на уровне БД для частых запросов</li>
      </ul>

      <h2>Redis vs Dragonfly</h2>
      <p>Dragonfly — drop-in замена Redis с многопоточной архитектурой. На наших тестах — в 5-8x быстрее на write-heavy нагрузках. Рассматриваем для новых проектов.</p>

      <blockquote>Правильное кэширование может снизить нагрузку на БД в 10-100 раз. Это дешевле, чем масштабирование базы данных.</blockquote>
    `
  },
  'nats-messaging': {
    slug: 'nats-messaging',
    title: 'NATS: высокоскоростной обмен сообщениями',
    catLabel: 'Архитектура',
    catColor: '#ef3f29',
    readTime: 8,
    author: 'Команда архитектуры',
    authorInitials: 'КА',
    authorColor: '#ef3f29',
    category: 'architecture',
    tags: ['NATS', 'Message Broker', 'Pub/Sub', 'Микросервисы'],
    body: `
      <h2>Почему NATS</h2>
      <p>Среди множества брокеров сообщений мы выбрали NATS как основной транспорт для микросервисов. Он сочетает скорость, простоту развёртывания и гибкость — от fire-and-forget до персистентных очередей.</p>

      <h2>Преимущества NATS</h2>
      <ul>
        <li><strong>Скорость.</strong> Микросекундные задержки. 10M+ сообщений в секунду.</li>
        <li><strong>Простота.</strong> Один бинарник, минимальная конфигурация. Легко развернуть в контейнере.</li>
        <li><strong>JetStream.</strong> Персистентность когда нужна, без неё когда не нужна.</li>
        <li><strong>Request/Reply.</strong> Синхронный паттерн поверх асинхронного транспорта.</li>
      </ul>

      <blockquote>В WoneScale NATS отвечает за всю real-time коммуникацию между сервисами: запросы прав, валидация, нотификации, аудит-логи. JetStream обеспечивает персистентность для критичных событий.</blockquote>
    `
  },
  'nodejs-python-java-go': {
    slug: 'nodejs-python-java-go',
    title: 'Node.js vs Python vs Java vs Go: когда что использовать',
    catLabel: 'Backend',
    catColor: '#f59e0b',
    readTime: 13,
    author: 'Backend-команда',
    authorInitials: 'BE',
    authorColor: '#f59e0b',
    category: 'backend',
    tags: ['Node.js', 'Python', 'Java', 'Go', 'Backend'],
    body: `
      <h2>Полиглот-подход</h2>
      <p>В WoneScale каждый микросервис может быть написан на своём языке. Это не хаос — это осознанный выбор лучшего инструмента для задачи.</p>

      <h2>Node.js — для I/O и API</h2>
      <p>API Gateway, BFF, WebSocket-серверы. Быстрый старт, огромная экосистема npm. TypeScript делает его пригодным для enterprise.</p>

      <h2>Python — для ML и аналитики</h2>
      <p>Data-пайплайны, ML-модели, скрипты автоматизации. Библиотеки numpy, pandas, scikit-learn не имеют аналогов.</p>

      <h2>Java — для нагруженной бизнес-логики</h2>
      <p>Стабильность, зрелые фреймворки (Spring), JVM оптимизации. Для сервисов, которые должны работать годами.</p>

      <h2>Go — для высоконагруженных сервисов</h2>
      <p>Горутины, низкое потребление памяти, быстрая компиляция. Идеален для прокси, обработчиков очередей, инфраструктурных утилит.</p>

      <blockquote>Ключ — в унифицированном транспорте. Все сервисы общаются через NATS, независимо от языка реализации. Это и есть настоящий полиглот.</blockquote>
    `
  },
  'postgresql-optimization': {
    slug: 'postgresql-optimization',
    title: 'PostgreSQL: оптимизация для высоких нагрузок',
    catLabel: 'Базы данных',
    catColor: '#8b5cf6',
    readTime: 16,
    author: 'Команда данных',
    authorInitials: 'КД',
    authorColor: '#8b5cf6',
    category: 'databases',
    tags: ['PostgreSQL', 'SQL', 'Оптимизация', 'Индексы'],
    body: `
      <h2>PostgreSQL для 10K+ RPS</h2>
      <p>PostgreSQL справляется с серьёзными нагрузками, но требует настройки. Вот наши проверенные приёмы.</p>

      <h2>Индексы</h2>
      <p>B-tree для точных запросов, GIN для полнотекстового поиска, BRIN для time-series данных. Не индексируйте всё подряд — каждый индекс замедляет запись.</p>

      <h2>Партиционирование</h2>
      <p>Для таблиц больше 100 млн записей партиционируйте по дате или другому ключу. Запросы работают только с нужной партицией.</p>

      <h2>Connection Pooling</h2>
      <p>PgBouncer или встроенный пулинг. PostgreSQL создаёт процесс на каждое соединение — без пулинга 1000 клиентов убьют сервер.</p>

      <blockquote>В WoneScale PostgreSQL используется для аналитических запросов и интеграций, где нужен SQL. Для основных данных — Dgraph.</blockquote>
    `
  },
  'cicd-best-practices': {
    slug: 'cicd-best-practices',
    title: 'CI/CD pipeline: от push до production за 10 минут',
    catLabel: 'DevOps',
    catColor: '#3b82f6',
    readTime: 11,
    author: 'DevOps-инженеры',
    authorInitials: 'DO',
    authorColor: '#3b82f6',
    category: 'devops',
    tags: ['CI/CD', 'GitLab', 'Docker', 'Kubernetes', 'Автотесты'],
    body: `
      <h2>Pipeline за 10 минут</h2>
      <p>Наш стандартный pipeline: lint → unit tests → build → integration tests → canary deploy → full deploy. Всё автоматически.</p>

      <h2>Этапы</h2>
      <ul>
        <li><strong>Lint + Type Check</strong> — ESLint, vue-tsc, prettier (30 секунд)</li>
        <li><strong>Unit Tests</strong> — Jest/Vitest, параллельно (2 минуты)</li>
        <li><strong>Docker Build</strong> — multi-stage, кэш слоёв (3 минуты)</li>
        <li><strong>Integration Tests</strong> — docker-compose, реальные сервисы (3 минуты)</li>
        <li><strong>Deploy</strong> — canary 10% → мониторинг 5 минут → full rollout</li>
      </ul>

      <h2>Canary Deploy</h2>
      <p>Новая версия сначала получает 10% трафика. Если метрики в норме — раскатываем на 100%. Если нет — автоматический откат.</p>

      <blockquote>В каждом нашем проекте автоматический pipeline — обязательное условие. Это исключает человеческую ошибку при деплое и гарантирует, что каждое обновление прошло полный цикл проверок перед попаданием в production.</blockquote>
    `
  },
  'docker-containerization': {
    slug: 'docker-containerization',
    title: 'Docker: контейнеризация от основ до production',
    catLabel: 'DevOps',
    catColor: '#3b82f6',
    readTime: 12,
    author: 'DevOps-инженеры',
    authorInitials: 'DO',
    authorColor: '#3b82f6',
    category: 'devops',
    tags: ['Docker', 'Контейнеризация', 'Multi-stage', 'DevOps'],
    body: `
      <h2>Docker — основа современного деплоя</h2>
      <p>Контейнеры решают проблему «у меня работает, а на сервере нет». Одна среда для разработки, тестирования и production.</p>

      <h2>Best Practices</h2>
      <ul>
        <li><strong>Multi-stage builds</strong> — сборка и runtime в разных образах. Финальный образ — минимальный.</li>
        <li><strong>Non-root user</strong> — никогда не запускайте приложение от root внутри контейнера.</li>
        <li><strong>Health checks</strong> — Docker и K8s должны знать, жив ли контейнер.</li>
        <li><strong>Layer caching</strong> — порядок инструкций в Dockerfile влияет на скорость сборки.</li>
      </ul>

      <blockquote>Каждый микросервис WoneScale поставляется как Docker-образ. Это позволяет деплоить на любую инфраструктуру: от VPS до Kubernetes.</blockquote>
    `
  },
  'graphql-rest-api-design': {
    slug: 'graphql-rest-api-design',
    title: 'GraphQL vs REST: когда какой API выбрать',
    catLabel: 'Backend',
    catColor: '#f59e0b',
    readTime: 10,
    author: 'Backend-команда',
    authorInitials: 'BE',
    authorColor: '#f59e0b',
    category: 'backend',
    tags: ['GraphQL', 'REST', 'API', 'Backend'],
    body: `
      <h2>REST — стандарт, GraphQL — оптимизация</h2>
      <p>REST прост и предсказуем. GraphQL позволяет клиенту запрашивать ровно те данные, которые нужны. Оба подхода имеют место.</p>

      <h2>Когда REST</h2>
      <p>Простые CRUD-операции, публичные API, интеграции с внешними системами. REST понятен всем и поддерживается везде.</p>

      <h2>Когда GraphQL</h2>
      <p>Сложные вложенные данные, мобильные приложения (экономия трафика), быстрая итерация на frontend без изменений backend.</p>

      <blockquote>В WoneScale API Gateway поддерживает оба протокола. Dgraph предоставляет GraphQL нативно — это идеальная пара для графовых данных.</blockquote>
    `
  },
  'typescript-enterprise': {
    slug: 'typescript-enterprise',
    title: 'TypeScript для enterprise-проектов',
    catLabel: 'Frontend',
    catColor: '#22c55e',
    readTime: 9,
    author: 'Frontend-команда',
    authorInitials: 'FE',
    authorColor: '#22c55e',
    category: 'frontend',
    tags: ['TypeScript', 'JavaScript', 'Strict Mode', 'Frontend'],
    body: `
      <h2>TypeScript — не опция, а необходимость</h2>
      <p>Для проектов с командой больше 3 человек или сроком жизни больше 6 месяцев TypeScript — обязательный выбор.</p>

      <h2>Что даёт strict mode</h2>
      <ul>
        <li>Ловит null/undefined ошибки на этапе компиляции</li>
        <li>Автодокументация через типы — IDE подсказывает всё</li>
        <li>Безопасный рефакторинг — компилятор находит все места, которые нужно обновить</li>
        <li>Сокращение ручного тестирования на 30-40%</li>
      </ul>

      <blockquote>Все наши проекты на Vue, React и Angular используют TypeScript в strict mode. Это инвестиция, которая окупается с первого месяца.</blockquote>
    `
  },
  'bpm-business-automation': {
    slug: 'bpm-business-automation',
    title: 'BPM-движок: автоматизация бизнес-процессов',
    catLabel: 'Архитектура',
    catColor: '#ef3f29',
    readTime: 10,
    author: 'Команда архитектуры',
    authorInitials: 'КА',
    authorColor: '#ef3f29',
    category: 'architecture',
    tags: ['BPM', 'Camunda', 'Автоматизация', 'WoneScale'],
    body: `
      <h2>BPM внутри платформы</h2>
      <p>Обычно BPM — это отдельный тяжёлый продукт (Camunda, jBPM, Bizagi). В WoneScale BPM-движок встроен в платформу и работает с вашими данными напрямую.</p>

      <h2>Что можно автоматизировать</h2>
      <ul>
        <li>Согласование документов и заявок</li>
        <li>Эскалация при просрочке SLA</li>
        <li>Автоматические уведомления по событиям</li>
        <li>Цепочки действий: создание → проверка → утверждение → исполнение</li>
      </ul>

      <blockquote>Пример: при создании заказа автоматически стартует процесс — проверка на складе, уведомление менеджера, планирование доставки. Без единой строки кода — через визуальный конструктор.</blockquote>
    `
  },
  'agile-development-process': {
    slug: 'agile-development-process',
    title: 'Как мы работаем: Agile без карго-культа',
    catLabel: 'Методологии',
    catColor: '#ec4899',
    readTime: 7,
    author: 'PM-команда',
    authorInitials: 'PM',
    authorColor: '#ec4899',
    category: 'methodology',
    tags: ['Agile', 'Scrum', 'Процессы', 'Код-ревью'],
    body: `
      <h2>Agile — это про результат, не про ритуалы</h2>
      <p>Мы не проводим стендапы ради стендапов и не пишем user stories ради user stories. Наш процесс:</p>

      <h2>2-недельные спринты</h2>
      <p>Планирование в понедельник, демо в пятницу. Между ними — работа. Минимум совещаний, максимум кода.</p>

      <h2>Код-ревью</h2>
      <p>Каждый merge request проходит ревью минимум одного коллеги. Это не формальность — мы реально находим баги и улучшаем архитектуру на этом этапе.</p>

      <h2>Парное программирование</h2>
      <p>Для сложных задач и онбординга новых сотрудников. Не постоянно — по необходимости.</p>

      <blockquote>Наша цель — предсказуемая поставка качественного кода. Не скорость ради скорости, а стабильный ритм с понятными результатами.</blockquote>
    `
  },
  'mongodb-use-cases': {
    slug: 'mongodb-use-cases',
    title: 'MongoDB: когда документная БД — правильный выбор',
    catLabel: 'Базы данных',
    catColor: '#8b5cf6',
    readTime: 9,
    author: 'Команда данных',
    authorInitials: 'КД',
    authorColor: '#8b5cf6',
    category: 'databases',
    tags: ['MongoDB', 'NoSQL', 'Документная БД', 'Базы данных'],
    body: `
      <h2>MongoDB — не замена PostgreSQL</h2>
      <p>MongoDB — документная БД для данных с гибкой схемой. Она не лучше и не хуже SQL — просто для другого.</p>

      <h2>Когда MongoDB</h2>
      <ul>
        <li>Каталоги с разными атрибутами (товары разных категорий)</li>
        <li>Логи и аналитические данные</li>
        <li>Контент-менеджмент (статьи, страницы с разной структурой)</li>
        <li>IoT-данные с изменяющейся схемой</li>
      </ul>

      <blockquote>В WoneScale MongoDB используется для хранения конфигураций, шаблонов и метаданных — там, где гибкость схемы важнее строгих связей.</blockquote>
    `
  },
  'network-traffic-analysis': {
    slug: 'network-traffic-analysis',
    title: 'Анализ сетевого трафика: как обнаружить аномалии',
    catLabel: 'Безопасность',
    catColor: '#802fb9',
    readTime: 11,
    author: 'Отдел безопасности',
    authorInitials: 'ОБ',
    authorColor: '#802fb9',
    category: 'security',
    tags: ['DPI', 'Machine Learning', 'NDR', 'Аномалии', 'WoneNDR'],
    body: `
      <h2>Сигнатуры vs Поведенческий анализ</h2>
      <p>Сигнатурные системы (IDS/IPS) ищут известные паттерны атак. Проблема — новые атаки не имеют сигнатур. Поведенческий анализ находит <strong>аномалии</strong> — отклонения от нормального поведения.</p>

      <h2>Как WoneNDR обнаруживает угрозы</h2>
      <ul>
        <li><strong>Baseline.</strong> Система изучает нормальное поведение сети 7-14 дней.</li>
        <li><strong>ML-модели.</strong> Обнаруживают аномалии: необычные объёмы данных, новые соединения, подозрительные протоколы.</li>
        <li><strong>DPI.</strong> Deep Packet Inspection для распознавания приложений и протоколов внутри трафика.</li>
        <li><strong>Корреляция.</strong> Объединение нескольких слабых сигналов в один сильный алерт.</li>
      </ul>

      <blockquote>Задача NDR — не заменить файрвол, а дополнить его. Файрвол блокирует на периметре, NDR видит то, что уже внутри.</blockquote>
    `
  },
  'event-sourcing-cqrs': {
    slug: 'event-sourcing-cqrs',
    title: 'Event Sourcing и CQRS: разделяй и властвуй',
    catLabel: 'Архитектура',
    catColor: '#ef3f29',
    readTime: 13,
    author: 'Команда архитектуры',
    authorInitials: 'КА',
    authorColor: '#ef3f29',
    category: 'architecture',
    tags: ['Event Sourcing', 'CQRS', 'NATS', 'Микросервисы', 'DDD'],
    body: `
      <h2>Зачем хранить историю, а не состояние</h2>
      <p>В классической модели мы храним текущее состояние объекта: «баланс = 1000 ₽». В Event Sourcing храним цепочку событий: «создан счёт → пополнение 500 → пополнение 700 → списание 200». Текущее состояние вычисляется из событий.</p>
      <p><strong>Преимущества:</strong> полный аудит-лог бесплатно, возможность «перемотать» состояние на любой момент, replay событий для отладки и аналитики.</p>

      <h2>CQRS: разделение чтения и записи</h2>
      <p>Command Query Responsibility Segregation — паттерн, где модель записи (commands) и модель чтения (queries) разделены. Запись идёт через события, чтение — из оптимизированных проекций.</p>
      <p><strong>Когда это нужно:</strong> разные требования к скорости чтения и записи, сложные отчёты, несколько представлений одних данных.</p>

      <h2>Связка Event Sourcing + CQRS + брокер сообщений</h2>
      <ul>
        <li><strong>Message Broker (NATS JetStream)</strong> — хранит события с гарантией порядка и персистентностью</li>
        <li><strong>Write Model</strong> — принимает команды, валидирует, публикует события в брокер</li>
        <li><strong>Projections</strong> — потребители событий строят read-модели в PostgreSQL, Elasticsearch, Redis</li>
        <li><strong>Eventual Consistency</strong> — read-модель обновляется с задержкой в миллисекунды</li>
      </ul>

      <blockquote>В WoneScale Event Sourcing используется для аудит-логов, управления правами и workflow. Это позволяет клиентам видеть полную историю любого объекта.</blockquote>
    `
  },
  'monolith-to-microservices': {
    slug: 'monolith-to-microservices',
    title: 'Миграция с монолита на микросервисы: пошаговый план',
    catLabel: 'Архитектура',
    catColor: '#ef3f29',
    readTime: 14,
    author: 'Команда архитектуры',
    authorInitials: 'КА',
    authorColor: '#ef3f29',
    category: 'architecture',
    tags: ['Монолит', 'Микросервисы', 'Архитектура', 'API Gateway', 'DDD'],
    body: `
      <h2>Не переписывайте всё разом</h2>
      <p>Big Bang Rewrite — самый рискованный путь. Мы видели проекты, где переписывание монолита занимало 2 года и заканчивалось провалом. Правильный путь — инкрементальная декомпозиция.</p>

      <h2>Стратегия Strangler Fig</h2>
      <p>Идея из природы: новое растение обвивает старое дерево и постепенно заменяет его. В коде: новый функционал пишем как микросервис, старый монолит постепенно «худеет».</p>
      <ol>
        <li><strong>Шаг 1: API Gateway.</strong> Ставим прокси перед монолитом. Весь трафик идёт через него.</li>
        <li><strong>Шаг 2: Выделяем bounded context.</strong> Находим модуль с чёткими границами — обычно это авторизация, уведомления или биллинг.</li>
        <li><strong>Шаг 3: Реализуем как сервис.</strong> Новый сервис получает свою БД, API, деплой-пайплайн.</li>
        <li><strong>Шаг 4: Переключаем трафик.</strong> Gateway направляет запросы к новому сервису вместо монолита.</li>
        <li><strong>Шаг 5: Удаляем старый код.</strong> Когда сервис стабилен — убираем дублирующий код из монолита.</li>
      </ol>

      <h2>Ошибки, которые мы видели</h2>
      <ul>
        <li>Общая база данных для монолита и микросервисов — это не микросервисы</li>
        <li>Слишком мелкие сервисы — «наносервисы» создают больше проблем, чем решают</li>
        <li>Отсутствие мониторинга — без Observability распределённая система становится чёрным ящиком</li>
      </ul>

      <blockquote>Типичная миграция среднего монолита занимает 6-12 месяцев. Мы выстраиваем процесс так, чтобы каждый этап приносил измеримую пользу бизнесу — а не просто «переписывание ради переписывания».</blockquote>
    `
  },
  'domain-driven-design': {
    slug: 'domain-driven-design',
    title: 'DDD: проектирование от бизнеса, а не от таблиц',
    catLabel: 'Архитектура',
    catColor: '#ef3f29',
    readTime: 12,
    author: 'Команда архитектуры',
    authorInitials: 'КА',
    authorColor: '#ef3f29',
    category: 'architecture',
    tags: ['DDD', 'Domain-Driven Design', 'Архитектура', 'Микросервисы', 'BPM'],
    body: `
      <h2>Почему таблицы — плохая отправная точка</h2>
      <p>Большинство разработчиков начинают с вопроса «какие таблицы нужны?». Правильный вопрос: «какие бизнес-процессы мы автоматизируем?» DDD ставит предметную область (домен) в центр проектирования.</p>

      <h2>Ключевые концепции</h2>
      <ul>
        <li><strong>Bounded Context</strong> — граница, внутри которой термины имеют однозначное значение. «Клиент» в CRM и «Клиент» в биллинге — разные сущности.</li>
        <li><strong>Ubiquitous Language</strong> — общий язык бизнеса и разработки. Если бизнес говорит «заказ», в коде тоже Order, а не Item или Request.</li>
        <li><strong>Aggregate</strong> — кластер объектов, которые изменяются вместе. Заказ + позиции заказа = один агрегат.</li>
        <li><strong>Domain Events</strong> — «ЗаказОплачен», «КлиентЗарегистрирован» — события, которые отражают изменения в бизнесе.</li>
      </ul>

      <h2>DDD в микросервисах</h2>
      <p>Каждый bounded context = один микросервис (или группа). Это даёт чёткие границы, независимый деплой и автономные команды.</p>

      <blockquote>В WoneScale DDD используется для моделирования платформы: каждый модуль (пользователи, процессы, данные, интеграции) — отдельный bounded context с собственной моделью и API.</blockquote>
    `
  },
  'zero-trust-architecture': {
    slug: 'zero-trust-architecture',
    title: 'Zero Trust: не доверяй, проверяй',
    catLabel: 'Безопасность',
    catColor: '#802fb9',
    readTime: 10,
    author: 'Отдел безопасности',
    authorInitials: 'ОБ',
    authorColor: '#802fb9',
    category: 'security',
    tags: ['Zero Trust', 'Безопасность', 'OAuth', 'JWT', 'Сетевая безопасность'],
    body: `
      <h2>Периметр больше не защищает</h2>
      <p>Классическая модель: файрвол на границе, внутри сети — доверенная зона. Проблема: если атакующий попал внутрь (через фишинг, VPN, подрядчика) — он имеет доступ ко всему.</p>
      <p>Zero Trust: <strong>никакому соединению не доверяем по умолчанию</strong>. Каждый запрос аутентифицируется и авторизуется, даже между внутренними сервисами.</p>

      <h2>Принципы Zero Trust</h2>
      <ul>
        <li><strong>Verify explicitly.</strong> Аутентификация каждого запроса на основе всех доступных сигналов: identity, location, device, time.</li>
        <li><strong>Least privilege.</strong> Минимальные права, just-in-time доступ, just-enough-access.</li>
        <li><strong>Assume breach.</strong> Проектируем так, будто атакующий уже внутри. Сегментация, шифрование, мониторинг.</li>
      </ul>

      <h2>Как внедрить</h2>
      <p><strong>1. mTLS между сервисами.</strong> Каждый микросервис имеет сертификат и проверяет сертификат собеседника.</p>
      <p><strong>2. Service Mesh (Istio/Linkerd).</strong> Прозрачное шифрование и авторизация на уровне сети.</p>
      <p><strong>3. NDR для мониторинга.</strong> WoneNDR обнаруживает lateral movement — перемещение атакующего между сегментами.</p>

      <blockquote>Zero Trust — это не продукт, а подход. Мы внедряем его поэтапно: инвентаризация сервисов, настройка mTLS, мониторинг — шаг за шагом, без остановки бизнеса.</blockquote>
    `
  },
  'owasp-top-10': {
    slug: 'owasp-top-10',
    title: 'OWASP Top 10: защита веб-приложений',
    catLabel: 'Безопасность',
    catColor: '#802fb9',
    readTime: 12,
    author: 'Отдел безопасности',
    authorInitials: 'ОБ',
    authorColor: '#802fb9',
    category: 'security',
    tags: ['OWASP', 'Безопасность', 'Угрозы', 'API', 'Автотесты'],
    body: `
      <h2>10 самых критичных уязвимостей</h2>
      <p>OWASP Top 10 — это стандартный список самых опасных уязвимостей веб-приложений. Мы проверяем каждый проект по этому списку перед релизом.</p>

      <h2>Топ-5, которые встречаем чаще всего</h2>
      <ul>
        <li><strong>A01: Broken Access Control.</strong> Пользователь может получить доступ к чужим данным. Лечение: проверка прав на каждом эндпоинте, не только на уровне UI.</li>
        <li><strong>A02: Cryptographic Failures.</strong> Хранение паролей в открытом виде, HTTP вместо HTTPS. Лечение: bcrypt для паролей, TLS везде.</li>
        <li><strong>A03: Injection.</strong> SQL Injection, XSS, Command Injection. Лечение: параметризованные запросы, санитизация ввода, CSP-заголовки.</li>
        <li><strong>A05: Security Misconfiguration.</strong> Дефолтные пароли, открытые debug-эндпоинты. Лечение: чек-листы при деплое, автоматические сканеры.</li>
        <li><strong>A07: Authentication Failures.</strong> Слабые пароли, отсутствие rate limiting на логин. Лечение: MFA, блокировка после N попыток.</li>
      </ul>

      <h2>Автоматизация проверок</h2>
      <p>Мы встраиваем SAST (статический анализ) и DAST (динамическое тестирование) в CI/CD pipeline. Каждый merge request проходит проверку безопасности автоматически.</p>

      <blockquote>В наших проектах безопасность — часть каждого спринта, а не «этап перед запуском». Чем раньше обнаружена уязвимость — тем дешевле её устранить. Мы закладываем проверки безопасности в CI/CD pipeline.</blockquote>
    `
  },
  'siem-integration': {
    slug: 'siem-integration',
    title: 'SIEM-интеграция: центральный мониторинг безопасности',
    catLabel: 'Безопасность',
    catColor: '#802fb9',
    readTime: 9,
    author: 'Отдел безопасности',
    authorInitials: 'ОБ',
    authorColor: '#802fb9',
    category: 'security',
    tags: ['SIEM', 'Безопасность', 'Мониторинг', 'NDR', 'ELK'],
    body: `
      <h2>Зачем объединять логи в одном месте</h2>
      <p>SIEM (Security Information and Event Management) собирает логи из всех источников: серверы, приложения, сетевое оборудование, NDR. Корреляция событий из разных источников обнаруживает атаки, которые не видны по отдельности.</p>

      <h2>WoneNDR + SIEM</h2>
      <p>WoneNDR отправляет алерты и метаданные сетевого трафика в SIEM по стандартным протоколам: Syslog, CEF, STIX/TAXII. Это даёт полную картину: что происходит на хостах (SIEM) + что происходит в сети (NDR).</p>

      <h2>Популярные SIEM-решения</h2>
      <ul>
        <li><strong>ELK Stack</strong> — open source, гибкий, но требует настройки. Мы используем для логов приложений.</li>
        <li><strong>Splunk</strong> — enterprise-grade, мощная аналитика, дорогая лицензия.</li>
        <li><strong>MaxPatrol SIEM</strong> — российское решение, сертификация ФСТЭК.</li>
      </ul>

      <blockquote>Для среднего бизнеса рекомендуем связку WoneNDR + ELK: NDR обнаруживает сетевые угрозы, ELK агрегирует все логи. Доступно и эффективно.</blockquote>
    `
  },
  'nextjs-nuxtjs-ssr': {
    slug: 'nextjs-nuxtjs-ssr',
    title: 'SSR: Next.js и Nuxt.js для SEO и производительности',
    catLabel: 'Frontend',
    catColor: '#22c55e',
    readTime: 11,
    author: 'Frontend-команда',
    authorInitials: 'FE',
    authorColor: '#22c55e',
    category: 'frontend',
    tags: ['Next.js', 'Nuxt.js', 'SSR', 'Vue', 'React'],
    body: `
      <h2>SPA vs SSR vs SSG</h2>
      <p><strong>SPA</strong> — всё рендерится в браузере. Быстрая навигация, но пустой HTML для поисковиков.</p>
      <p><strong>SSR</strong> — сервер рендерит HTML для каждого запроса. Хороший SEO, но нагрузка на сервер.</p>
      <p><strong>SSG</strong> — HTML генерируется при сборке. Максимальная скорость, но статичный контент.</p>

      <h2>Next.js (React)</h2>
      <p>App Router, Server Components, streaming SSR. Гибрид: часть страниц — SSG, часть — SSR, часть — ISR (incremental static regeneration). Деплой на Vercel, AWS, self-hosted.</p>

      <h2>Nuxt.js (Vue)</h2>
      <p>Nuxt 3 с Nitro server engine. Аналогичные возможности: hybrid rendering, auto-imports, server routes. Деплой на любую Node.js-платформу.</p>

      <h2>Когда что выбрать</h2>
      <ul>
        <li><strong>Корпоративный сайт, блог, лендинг</strong> → SSG (максимальная скорость)</li>
        <li><strong>E-commerce, маркетплейс</strong> → SSR (SEO + динамический контент)</li>
        <li><strong>Админ-панель, дашборд</strong> → SPA (не нужен SEO)</li>
      </ul>

      <blockquote>Наш сайт — SPA на Vue. Но для клиентских проектов с SEO-требованиями мы используем Nuxt.js или Next.js в зависимости от стека.</blockquote>
    `
  },
  'design-system-guide': {
    slug: 'design-system-guide',
    title: 'Design System: от кнопки до экосистемы',
    catLabel: 'Frontend',
    catColor: '#22c55e',
    readTime: 10,
    author: 'Frontend-команда',
    authorInitials: 'FE',
    authorColor: '#22c55e',
    category: 'frontend',
    tags: ['Design System', 'UI', 'Frontend', 'TypeScript', 'Автоматизация'],
    body: `
      <h2>Зачем нужна дизайн-система</h2>
      <p>Без дизайн-системы каждый разработчик создаёт свой вариант кнопки, модалки, формы. Результат — визуальный хаос, дублирование кода, замедление разработки.</p>

      <h2>Из чего состоит</h2>
      <ul>
        <li><strong>Design Tokens</strong> — цвета, шрифты, отступы, тени, анимации. Единый источник правды.</li>
        <li><strong>Компоненты</strong> — Button, Input, Modal, Table, Card. Типизированные, задокументированные, протестированные.</li>
        <li><strong>Паттерны</strong> — как компоненты комбинируются: форма входа, карточка товара, навигация.</li>
        <li><strong>Документация</strong> — Storybook или аналог. Живые примеры, API-описания, гайдлайны.</li>
      </ul>

      <h2>Наш подход</h2>
      <p>Мы создаём дизайн-системы на основе framework-agnostic токенов (CSS variables) + framework-specific компоненты (Vue/React/Angular). Это позволяет использовать один дизайн в разных проектах.</p>

      <blockquote>Мы создаём дизайн-систему для каждого серьёзного продукта — это инвестиция, которая окупается на третьем экране. Для MVP используем готовые компоненты, для продукта с командой 5+ — строим полноценную систему.</blockquote>
    `
  },
  'web-performance': {
    slug: 'web-performance',
    title: 'Web Performance: загрузка за 1 секунду',
    catLabel: 'Frontend',
    catColor: '#22c55e',
    readTime: 12,
    author: 'Frontend-команда',
    authorInitials: 'FE',
    authorColor: '#22c55e',
    category: 'frontend',
    tags: ['Web Performance', 'Производительность', 'Frontend', 'Кэширование', 'SSR'],
    body: `
      <h2>Core Web Vitals: метрики, которые важны</h2>
      <p>Google использует Core Web Vitals для ранжирования. Три ключевые метрики:</p>
      <ul>
        <li><strong>LCP (Largest Contentful Paint)</strong> — время до отрисовки основного контента. Цель: &lt; 2.5 сек.</li>
        <li><strong>FID / INP (Interaction to Next Paint)</strong> — отзывчивость на действия пользователя. Цель: &lt; 200 мс.</li>
        <li><strong>CLS (Cumulative Layout Shift)</strong> — визуальная стабильность. Цель: &lt; 0.1.</li>
      </ul>

      <h2>Чек-лист оптимизации</h2>
      <ul>
        <li><strong>Lazy loading</strong> — изображения и компоненты загружаются при скролле</li>
        <li><strong>Code splitting</strong> — каждая страница загружает только свой JS</li>
        <li><strong>Оптимизация изображений</strong> — WebP/AVIF, responsive sizes, CDN</li>
        <li><strong>Кэширование</strong> — Service Worker, Cache-Control заголовки</li>
        <li><strong>Tree shaking</strong> — удаление неиспользуемого кода при сборке</li>
      </ul>

      <blockquote>Каждая секунда задержки загрузки снижает конверсию на 7%. Оптимизация — это не про «красивые цифры в Lighthouse», а про деньги.</blockquote>
    `
  },
  'pwa-progressive-web-apps': {
    slug: 'pwa-progressive-web-apps',
    title: 'PWA: приложение без магазина',
    catLabel: 'Frontend',
    catColor: '#22c55e',
    readTime: 9,
    author: 'Frontend-команда',
    authorInitials: 'FE',
    authorColor: '#22c55e',
    category: 'frontend',
    tags: ['PWA', 'Frontend', 'Web Performance', 'WebSocket'],
    body: `
      <h2>Что такое PWA</h2>
      <p>Progressive Web App — веб-приложение, которое ведёт себя как нативное: устанавливается на домашний экран, работает офлайн, отправляет push-уведомления.</p>

      <h2>Когда PWA лучше нативного приложения</h2>
      <ul>
        <li><strong>Бюджет.</strong> Одна кодовая база вместо iOS + Android + Web.</li>
        <li><strong>Скорость выпуска.</strong> Обновления мгновенно, без App Store Review.</li>
        <li><strong>Охват.</strong> Работает в браузере — не нужна установка.</li>
        <li><strong>SEO.</strong> Индексируется поисковиками, в отличие от нативных приложений.</li>
      </ul>

      <h2>Технологии</h2>
      <p><strong>Service Worker</strong> — прокси между браузером и сетью. Кэширует ресурсы, работает офлайн. <strong>Web App Manifest</strong> — описывает приложение для установки. <strong>Push API</strong> — уведомления даже когда вкладка закрыта.</p>

      <blockquote>PWA идеально для B2B-приложений: CRM, порталы, дашборды. Пользователи не хотят устанавливать приложение ради одной функции — PWA решает это.</blockquote>
    `
  },
  'grpc-microservices': {
    slug: 'grpc-microservices',
    title: 'Как ускорить корпоративные системы в 5-10 раз',
    catLabel: 'Бизнес',
    catColor: '#f59e0b',
    readTime: 11,
    author: 'Команда архитектуры',
    authorInitials: 'КА',
    authorColor: '#f59e0b',
    category: 'backend',
    tags: ['Производительность', 'API', 'Микросервисы', 'Интеграции', 'Backend'],
    body: `
      <h2>Почему внутренние системы работают медленно</h2>
      <p>Когда корпоративная система из нескольких модулей обменивается данными, каждый запрос между модулями — это время. Если используется традиционный REST API с JSON, каждый такой обмен тратит ресурсы на сериализацию, парсинг и передачу текстового формата. При тысячах запросов в секунду это становится узким местом.</p>

      <h2>Что даёт оптимизация межсервисного взаимодействия</h2>
      <ul>
        <li><strong>Скорость ответа для пользователей</strong> — страницы загружаются быстрее, формы обрабатываются мгновенно</li>
        <li><strong>Снижение нагрузки на серверы</strong> — меньше ресурсов на те же задачи = экономия на инфраструктуре</li>
        <li><strong>Масштабируемость</strong> — система выдерживает в разы больше одновременных пользователей</li>
        <li><strong>Надёжность</strong> — типизированные контракты между модулями исключают целый класс ошибок</li>
      </ul>

      <h2>Наш подход</h2>
      <p>Мы используем высокопроизводительные бинарные протоколы (gRPC, Protobuf) для внутреннего общения между модулями, сохраняя привычный REST API для внешних интеграций. Снаружи — простой JSON, внутри — оптимизированный бинарный формат.</p>

      <blockquote>На реальных проектах переход на оптимизированное межмодульное взаимодействие снижает задержки на 60-80% и позволяет обслуживать в 3-5 раз больше пользователей на том же оборудовании.</blockquote>
    `
  },
  'oauth-jwt-authentication': {
    slug: 'oauth-jwt-authentication',
    title: 'OAuth и JWT: аутентификация правильно',
    catLabel: 'Backend',
    catColor: '#f59e0b',
    readTime: 13,
    author: 'Backend-команда',
    authorInitials: 'BE',
    authorColor: '#f59e0b',
    category: 'backend',
    tags: ['OAuth', 'JWT', 'Безопасность', 'API', 'Backend'],
    body: `
      <h2>Аутентификация vs Авторизация</h2>
      <p><strong>Аутентификация</strong> — кто вы? (логин/пароль, OAuth, биометрия). <strong>Авторизация</strong> — что вам разрешено? (роли, права, policies).</p>

      <h2>OAuth 2.0: делегированный доступ</h2>
      <p>OAuth позволяет приложению получить ограниченный доступ к ресурсам пользователя без передачи пароля. Flows:</p>
      <ul>
        <li><strong>Authorization Code + PKCE</strong> — для SPA и мобильных (рекомендуемый)</li>
        <li><strong>Client Credentials</strong> — для межсервисного общения (machine-to-machine)</li>
        <li><strong>Device Authorization</strong> — для устройств без браузера (Smart TV, IoT)</li>
      </ul>

      <h2>JWT: токены с данными</h2>
      <p>JSON Web Token содержит claim-ы (payload) с подписью. Сервер не хранит сессии — всё нужное есть в токене. Но: JWT нельзя «отозвать» без дополнительной инфраструктуры (blocklist).</p>

      <h2>Наши рекомендации</h2>
      <ul>
        <li>Access Token: JWT, время жизни 15 минут</li>
        <li>Refresh Token: опаковый, хранится в HttpOnly cookie</li>
        <li>Token Rotation: каждый refresh выдаёт новую пару токенов</li>
      </ul>

      <blockquote>В WoneScale авторизация реализована через граф прав в Dgraph. Это позволяет задавать сложные правила доступа: «менеджер видит клиентов своего отдела и дочерних отделов».</blockquote>
    `
  },
  'websocket-realtime': {
    slug: 'websocket-realtime',
    title: 'Real-time в бизнесе: зачем вашей системе работа в реальном времени',
    catLabel: 'Бизнес',
    catColor: '#f59e0b',
    readTime: 10,
    author: 'Бизнес-аналитика',
    authorInitials: 'БА',
    authorColor: '#f59e0b',
    category: 'backend',
    tags: ['WebSocket', 'Real-time', 'Уведомления', 'Дашборды', 'Бизнес'],
    body: `
      <h2>Почему «обновите страницу» — это вчерашний день</h2>
      <p>Клиенты привыкли к мгновенности: статус доставки обновляется в реальном времени, уведомления приходят за секунды, дашборды показывают актуальные данные. Если ваша система требует ручного обновления страницы — вы теряете вовлечённость.</p>

      <h2>Где real-time создаёт бизнес-ценность</h2>
      <ul>
        <li><strong>Уведомления и алерты</strong> — менеджер мгновенно узнаёт о новой заявке, просрочке платежа или критическом событии</li>
        <li><strong>Live-дашборды</strong> — руководство видит KPI в режиме реального времени, без ожидания утренних отчётов</li>
        <li><strong>Совместная работа</strong> — несколько сотрудников редактируют документ или заполняют форму одновременно</li>
        <li><strong>Трекинг</strong> — клиент видит статус заказа, местоположение груза, прогресс обработки</li>
        <li><strong>Торговые платформы</strong> — актуальные цены, остатки, котировки без задержки</li>
      </ul>

      <h2>Какие технологии стоят за этим</h2>
      <p>WebSocket и Server-Sent Events — два основных подхода. Выбор зависит от задачи: если данные нужно только показывать (дашборд, уведомления) — SSE проще и дешевле. Если нужен двусторонний обмен (чат, совместное редактирование) — WebSocket.</p>

      <blockquote>Real-time — это не просто технология. Это ожидания современного пользователя. Компании, которые предоставляют мгновенную обратную связь, выигрывают в лояльности и эффективности.</blockquote>
    `
  },
  'rate-limiting-patterns': {
    slug: 'rate-limiting-patterns',
    title: 'Защита от перегрузок: как не потерять бизнес из-за DDoS или всплеска трафика',
    catLabel: 'Безопасность',
    catColor: '#802fb9',
    readTime: 9,
    author: 'Отдел безопасности',
    authorInitials: 'ОБ',
    authorColor: '#802fb9',
    category: 'security',
    tags: ['Rate Limiting', 'DDoS', 'Безопасность', 'API', 'Доступность'],
    body: `
      <h2>Что происходит, когда система не выдерживает нагрузку</h2>
      <p>Чёрная пятница, упоминание в СМИ, DDoS-атака конкурента — всё это может обрушить ваш сервис за минуты. Каждый час простоя — это потерянные заказы, репутация и деньги. По данным Gartner, средняя стоимость простоя — $5,600 в минуту.</p>

      <h2>Три уровня защиты</h2>
      <ul>
        <li><strong>Инфраструктурный</strong> — CDN и WAF фильтруют трафик до вашего сервера. Cloudflare, DDoS-Guard и другие сервисы останавливают атаки на уровне сети.</li>
        <li><strong>Прикладной</strong> — API Gateway ограничивает количество запросов от одного клиента. «Умные» алгоритмы различают легитимный всплеск от атаки.</li>
        <li><strong>Бизнес-логика</strong> — приоритизация: платящие клиенты обслуживаются первыми, бесплатные — с ограничениями.</li>
      </ul>

      <h2>Как мы это реализуем</h2>
      <p>Многоуровневый rate limiting с гибкой настройкой лимитов по ролям, IP, географии. Автоматическое масштабирование при всплесках. Мониторинг и алерты до того, как система «ляжет».</p>

      <blockquote>Лучшая защита — та, о которой пользователь не знает. Он просто видит быстро работающий сервис, а за кулисами система отсекает миллионы вредоносных запросов.</blockquote>
    `
  },
  'elasticsearch-search': {
    slug: 'elasticsearch-search',
    title: 'Elasticsearch: полнотекстовый поиск и аналитика',
    catLabel: 'Базы данных',
    catColor: '#8b5cf6',
    readTime: 12,
    author: 'Команда данных',
    authorInitials: 'КД',
    authorColor: '#8b5cf6',
    category: 'databases',
    tags: ['Elasticsearch', 'Базы данных', 'API', 'Производительность'],
    body: `
      <h2>Когда LIKE %query% не справляется</h2>
      <p>SQL LIKE — O(N) на каждый запрос. Elasticsearch строит инвертированный индекс: слово → список документов. Поиск за миллисекунды независимо от объёма данных.</p>

      <h2>Что умеет Elasticsearch</h2>
      <ul>
        <li><strong>Полнотекстовый поиск</strong> — с учётом морфологии, синонимов, опечаток (fuzzy search)</li>
        <li><strong>Фасетная фильтрация</strong> — «показать товары: бренд X, цена 1000-5000, в наличии»</li>
        <li><strong>Автодополнение</strong> — suggest-запросы с учётом популярности</li>
        <li><strong>Аналитика</strong> — агрегации по любым полям: суммы, средние, гистограммы</li>
        <li><strong>Геопоиск</strong> — «найти ближайшие точки в радиусе 5 км»</li>
      </ul>

      <h2>Архитектура</h2>
      <p>Elasticsearch — не замена основной БД. Это поисковый индекс. Данные пишутся в PostgreSQL/MongoDB, а оттуда синхронизируются в Elasticsearch через CDC или очередь.</p>

      <blockquote>Для каталога из 100K+ товаров Elasticsearch — must have. Пользователи ожидают поиск как в Google, а не как в Excel.</blockquote>
    `
  },
  'database-migration-strategies': {
    slug: 'database-migration-strategies',
    title: 'Миграции БД без даунтайма: стратегии и инструменты',
    catLabel: 'Базы данных',
    catColor: '#8b5cf6',
    readTime: 11,
    author: 'Команда данных',
    authorInitials: 'КД',
    authorColor: '#8b5cf6',
    category: 'databases',
    tags: ['Миграции', 'PostgreSQL', 'SQL', 'DevOps', 'CI/CD'],
    body: `
      <h2>ALTER TABLE на production — страшный сон</h2>
      <p>Добавление колонки с дефолтом в таблицу на 100M строк может заблокировать её на минуты. Для бизнеса это — даунтайм и потерянные деньги.</p>

      <h2>Безопасные паттерны</h2>
      <ul>
        <li><strong>Expand-Contract.</strong> Добавляем новую колонку (без дефолта) → мигрируем данные фоново → переключаем код → удаляем старую колонку.</li>
        <li><strong>Blue-Green для БД.</strong> Две копии базы, переключение по DNS. Для малых баз.</li>
        <li><strong>Online DDL.</strong> pg_repack для PostgreSQL, pt-online-schema-change для MySQL. Перестраивают таблицу онлайн.</li>
      </ul>

      <h2>Инструменты</h2>
      <p><strong>Flyway / Liquibase</strong> — версионирование миграций, откат, CI/CD интеграция. <strong>Atlas</strong> — декларативные миграции: описываешь желаемую схему, Atlas генерирует SQL.</p>

      <blockquote>Наш принцип: каждая миграция обратимо совместима. Код версии N+1 работает и со старой, и с новой схемой — это позволяет откатить деплой без потери данных.</blockquote>
    `
  },
  'data-backup-recovery': {
    slug: 'data-backup-recovery',
    title: 'Бэкапы и восстановление: стратегии для production',
    catLabel: 'Базы данных',
    catColor: '#8b5cf6',
    readTime: 10,
    author: 'Команда данных',
    authorInitials: 'КД',
    authorColor: '#8b5cf6',
    category: 'databases',
    tags: ['Бэкапы', 'PostgreSQL', 'DevOps', 'Безопасность'],
    body: `
      <h2>Бэкап, который не проверяли — это не бэкап</h2>
      <p>Мы видели десятки случаев: бэкапы делаются каждый день, но при аварии оказывается, что восстановить их невозможно. Причины: битые файлы, устаревший формат, отсутствие WAL-логов.</p>

      <h2>Стратегия 3-2-1</h2>
      <ul>
        <li><strong>3 копии</strong> данных (оригинал + 2 бэкапа)</li>
        <li><strong>2 типа</strong> хранения (локальный диск + облако)</li>
        <li><strong>1 копия</strong> в другом дата-центре (geographic redundancy)</li>
      </ul>

      <h2>PostgreSQL: pg_basebackup + WAL</h2>
      <p>Базовый бэкап + непрерывная архивация WAL = PITR (Point-In-Time Recovery). Можно восстановить базу на любой момент времени с точностью до транзакции.</p>

      <h2>Тестирование бэкапов</h2>
      <p>Автоматический тест восстановления раз в неделю: поднимаем отдельную БД из бэкапа, проверяем целостность, удаляем. Если тест не прошёл — алерт в Slack.</p>

      <blockquote>RPO (допустимая потеря данных) и RTO (время восстановления) — мы определяем эти параметры совместно с клиентом на этапе проектирования, а не после первой аварии.</blockquote>
    `
  },
  'terraform-infrastructure': {
    slug: 'terraform-infrastructure',
    title: 'Terraform: инфраструктура как код',
    catLabel: 'DevOps',
    catColor: '#3b82f6',
    readTime: 12,
    author: 'DevOps-инженеры',
    authorInitials: 'DO',
    authorColor: '#3b82f6',
    category: 'devops',
    tags: ['Terraform', 'IaC', 'DevOps', 'Ansible', 'Cloud Native'],
    body: `
      <h2>Ручная настройка серверов — путь к хаосу</h2>
      <p>Если инфраструктура настроена вручную, то: а) никто не знает точную конфигурацию, б) восстановление после аварии занимает часы/дни, в) нельзя воспроизвести окружение.</p>

      <h2>Terraform: декларативный подход</h2>
      <p>Описываем желаемое состояние инфраструктуры в .tf файлах. Terraform вычисляет разницу с текущим состоянием и применяет изменения. Plan → Apply → Profit.</p>

      <h2>Terraform vs Ansible</h2>
      <ul>
        <li><strong>Terraform</strong> — для создания инфраструктуры: серверы, сети, БД, DNS, балансировщики</li>
        <li><strong>Ansible</strong> — для настройки серверов: пакеты, конфиги, пользователи, сервисы</li>
        <li>Часто используют вместе: Terraform создаёт VM, Ansible настраивает её</li>
      </ul>

      <h2>Best Practices</h2>
      <ul>
        <li>State в remote backend (S3, Consul) — не в git</li>
        <li>Модули для переиспользуемых блоков</li>
        <li>Workspaces для dev/staging/production</li>
        <li>terraform plan в CI/CD перед каждым apply</li>
      </ul>

      <blockquote>Infrastructure as Code — это git для серверов. Все изменения ревьюятся, версионируются и откатываются. Как код.</blockquote>
    `
  },
  'monitoring-observability': {
    slug: 'monitoring-observability',
    title: 'Мониторинг и Observability: видеть всё',
    catLabel: 'DevOps',
    catColor: '#3b82f6',
    readTime: 13,
    author: 'DevOps-инженеры',
    authorInitials: 'DO',
    authorColor: '#3b82f6',
    category: 'devops',
    tags: ['Мониторинг', 'Observability', 'Prometheus', 'Grafana', 'ELK'],
    body: `
      <h2>Мониторинг ≠ Observability</h2>
      <p><strong>Мониторинг</strong> отвечает на вопрос «что сломалось?» — алерты, дашборды, пороги. <strong>Observability</strong> отвечает «почему сломалось?» — возможность исследовать систему без заранее заданных вопросов.</p>

      <h2>Три столпа Observability</h2>
      <ul>
        <li><strong>Metrics (Prometheus + Grafana)</strong> — числовые показатели: CPU, память, RPS, latency, error rate. Быстро, дёшево, для алертинга.</li>
        <li><strong>Logs (ELK / Loki)</strong> — текстовые события: ошибки, запросы, бизнес-события. Для расследования инцидентов.</li>
        <li><strong>Traces (Jaeger / Tempo)</strong> — путь запроса через микросервисы. Показывает, где тормозит и где ошибка.</li>
      </ul>

      <h2>Наш стек</h2>
      <p>Prometheus для метрик → Grafana для визуализации → Alertmanager для уведомлений → Loki для логов → Tempo для трейсов. Всё — open source, всё — в Kubernetes.</p>

      <blockquote>Наш стандарт: каждый сервис в production должен быть полностью наблюдаем. Мы настраиваем метрики, структурированные логи и distributed tracing для каждого микросервиса — так мы находим проблемы до того, как их заметят пользователи.</blockquote>
    `
  },
  'gitops-argocd': {
    slug: 'gitops-argocd',
    title: 'GitOps: деплой через Git с ArgoCD',
    catLabel: 'DevOps',
    catColor: '#3b82f6',
    readTime: 10,
    author: 'DevOps-инженеры',
    authorInitials: 'DO',
    authorColor: '#3b82f6',
    category: 'devops',
    tags: ['GitOps', 'ArgoCD', 'Kubernetes', 'Helm', 'CI/CD'],
    body: `
      <h2>Git как единственный источник правды</h2>
      <p>GitOps — подход, где желаемое состояние инфраструктуры и приложений хранится в Git. Оператор (ArgoCD) автоматически приводит кластер в соответствие с тем, что в репозитории.</p>

      <h2>Как работает ArgoCD</h2>
      <ol>
        <li>Разработчик коммитит изменения в Git (Helm chart, Kustomize, plain YAML)</li>
        <li>ArgoCD обнаруживает drift — разницу между Git и кластером</li>
        <li>Автоматический или ручной sync — ArgoCD применяет изменения в Kubernetes</li>
        <li>Health check — ArgoCD проверяет, что деплой успешен</li>
      </ol>

      <h2>Преимущества</h2>
      <ul>
        <li><strong>Аудит.</strong> Каждое изменение — это коммит. Кто, когда, что изменил — всё в git log.</li>
        <li><strong>Откат.</strong> git revert — и кластер возвращается к предыдущему состоянию.</li>
        <li><strong>Безопасность.</strong> CI/CD не нужен доступ к кластеру. ArgoCD сам тянет из Git.</li>
      </ul>

      <blockquote>GitOps отлично сочетается с pull request workflow: изменение инфраструктуры проходит code review, как обычный код.</blockquote>
    `
  },
  'load-balancing-strategies': {
    slug: 'load-balancing-strategies',
    title: 'Балансировка нагрузки: стратегии и инструменты',
    catLabel: 'DevOps',
    catColor: '#3b82f6',
    readTime: 10,
    author: 'DevOps-инженеры',
    authorInitials: 'DO',
    authorColor: '#3b82f6',
    category: 'devops',
    tags: ['Балансировка', 'Kubernetes', 'DevOps', 'Производительность'],
    body: `
      <h2>Один сервер — точка отказа</h2>
      <p>Балансировщик нагрузки распределяет запросы между несколькими серверами. Это даёт: отказоустойчивость (один сервер упал — остальные работают), масштабируемость (добавляем серверы под нагрузку), гибкость (canary и blue-green деплой).</p>

      <h2>Алгоритмы</h2>
      <ul>
        <li><strong>Round Robin</strong> — по кругу. Просто, но не учитывает нагрузку на сервер.</li>
        <li><strong>Least Connections</strong> — на сервер с наименьшим числом соединений. Лучше для неоднородной нагрузки.</li>
        <li><strong>Weighted</strong> — серверу с 16 CPU даём больше трафика, чем серверу с 4 CPU.</li>
        <li><strong>IP Hash</strong> — один клиент всегда попадает на один сервер. Для sticky sessions.</li>
      </ul>

      <h2>L4 vs L7</h2>
      <p><strong>L4 (TCP)</strong> — быстрый, не знает про HTTP. Nginx, HAProxy. <strong>L7 (HTTP)</strong> — может маршрутизировать по URL, заголовкам, cookies. Traefik, Envoy, Ingress Controller.</p>

      <blockquote>В Kubernetes балансировка встроена: Service распределяет трафик между Pod-ами. Для внешнего трафика используем Ingress Controller (Traefik или Nginx).</blockquote>
    `
  },
  'testing-pyramid': {
    slug: 'testing-pyramid',
    title: 'Пирамида тестирования: сколько тестов писать',
    catLabel: 'Методологии',
    catColor: '#ec4899',
    readTime: 10,
    author: 'QA-команда',
    authorInitials: 'QA',
    authorColor: '#ec4899',
    category: 'methodology',
    tags: ['Пирамида тестирования', 'Автотесты', 'CI/CD', 'Код-ревью'],
    body: `
      <h2>Не все тесты одинаково полезны</h2>
      <p>Пирамида тестирования — модель, которая показывает оптимальное соотношение разных типов тестов.</p>

      <h2>Уровни пирамиды</h2>
      <ul>
        <li><strong>Unit Tests (70%)</strong> — тестируют отдельные функции/модули. Быстрые, дешёвые, много. Запускаются за секунды.</li>
        <li><strong>Integration Tests (20%)</strong> — тестируют взаимодействие модулей: API + БД, сервис + очередь. Медленнее, но ловят баги на стыках.</li>
        <li><strong>E2E Tests (10%)</strong> — тестируют сценарии от UI до БД. Медленные, хрупкие, но проверяют реальный user flow.</li>
      </ul>

      <h2>Антипаттерн: перевёрнутая пирамида</h2>
      <p>Много E2E, мало unit — тесты медленные, хрупкие, дорогие в поддержке. CI/CD pipeline занимает 40 минут вместо 5.</p>

      <h2>Наш подход</h2>
      <p>Vitest для unit, Supertest для API, Playwright для E2E. Каждый merge request проходит unit + integration. E2E — при деплое на staging.</p>

      <blockquote>Мы не гонимся за 100% покрытием. Наша цель — покрыть тестами критические бизнес-сценарии. А каждый пойманный баг превращается в автотест, чтобы он никогда не вернулся.</blockquote>
    `
  },
  'load-testing-k6': {
    slug: 'load-testing-k6',
    title: 'Как узнать предел вашей системы до того, как это сделают пользователи',
    catLabel: 'Бизнес',
    catColor: '#ec4899',
    readTime: 11,
    author: 'QA-команда',
    authorInitials: 'QA',
    authorColor: '#ec4899',
    category: 'methodology',
    tags: ['Нагрузочное тестирование', 'Производительность', 'SLA', 'Доступность'],
    body: `
      <h2>Что происходит, когда система не тестировалась под нагрузкой</h2>
      <p>Приложение отлично работает на 100 пользователях. Запускаете рекламную кампанию — приходит 5 000 одновременно. Система ложится. Клиенты уходят. Деньги на рекламу потрачены впустую. Знакомая ситуация?</p>

      <h2>Что даёт нагрузочное тестирование бизнесу</h2>
      <ul>
        <li><strong>Гарантия SLA</strong> — вы точно знаете, сколько пользователей выдержит система. Не «наверное справится», а измеренные цифры.</li>
        <li><strong>Планирование роста</strong> — понимаете, при какой нагрузке нужно масштабировать инфраструктуру и сколько это будет стоить.</li>
        <li><strong>Экономия на инфраструктуре</strong> — вместо «возьмём сервер побольше на всякий случай» — точные данные о реальных потребностях.</li>
        <li><strong>Уверенность перед запуском</strong> — промо, чёрная пятница, выход на новый рынок — вы готовы.</li>
      </ul>

      <h2>Как мы это делаем</h2>
      <p>Моделируем реальные сценарии: регистрация, поиск, оформление заказа. Постепенно увеличиваем нагрузку до предела. Находим узкие места, оптимизируем. Результат: конкретные цифры — «система выдержит X пользователей при Y запросах в секунду».</p>

      <blockquote>Стоимость нагрузочного тестирования — 1-2% от бюджета проекта. Стоимость простоя из-за непротестированной системы — многократно выше.</blockquote>
    `
  },
  'e2e-testing-playwright': {
    slug: 'e2e-testing-playwright',
    title: 'Автоматическое тестирование: почему ручная проверка — это риск для бизнеса',
    catLabel: 'Бизнес',
    catColor: '#ec4899',
    readTime: 9,
    author: 'QA-команда',
    authorInitials: 'QA',
    authorColor: '#ec4899',
    category: 'methodology',
    tags: ['Автотесты', 'Качество', 'CI/CD', 'Бизнес'],
    body: `
      <h2>Сценарий: обновление, которое сломало оплату</h2>
      <p>Команда выпустила новую фичу. QA проверил её — всё работает. Но в другом месте сайта незаметно сломалась форма оплаты. Клиенты не могут оплатить заказ. Проблему обнаружили через 4 часа — после 200 потерянных заказов.</p>

      <h2>Как автоматические тесты защищают бизнес</h2>
      <ul>
        <li><strong>Регрессия за минуты, не дни</strong> — робот проверяет все критические сценарии за 5-15 минут. Вручную это занимает дни.</li>
        <li><strong>Каждый релиз проверен</strong> — тесты запускаются автоматически при каждом обновлении. Ни одно изменение не попадёт в production непроверенным.</li>
        <li><strong>Ночью тоже работает</strong> — тесты запускаются по расписанию: утром вы получаете отчёт о состоянии системы.</li>
        <li><strong>Документация сценариев</strong> — тесты описывают все бизнес-процессы: регистрация, оплата, оформление заказа. Новый сотрудник сразу видит, как система должна работать.</li>
      </ul>

      <h2>Что тестировать автоматически</h2>
      <p>Не всё. Только критические бизнес-сценарии: регистрация, авторизация, оформление заказа, оплата, основные рабочие процессы. Это 20% сценариев, которые покрывают 80% рисков.</p>

      <blockquote>Ручное тестирование находит баги. Автоматическое тестирование гарантирует, что найденные баги не вернутся. Вместе — идеальная комбинация.</blockquote>
    `
  },
  'code-review-practices': {
    slug: 'code-review-practices',
    title: 'Код-ревью: как делать правильно',
    catLabel: 'Методологии',
    catColor: '#ec4899',
    readTime: 8,
    author: 'PM-команда',
    authorInitials: 'PM',
    authorColor: '#ec4899',
    category: 'methodology',
    tags: ['Код-ревью', 'Agile', 'Процессы', 'CI/CD'],
    body: `
      <h2>Код-ревью — не формальность</h2>
      <p>Качественное ревью находит баги, улучшает архитектуру, распространяет знания по команде. Плохое ревью — просто «LGTM» через 30 секунд.</p>

      <h2>Что проверять</h2>
      <ul>
        <li><strong>Корректность.</strong> Делает ли код то, что нужно? Обработаны ли edge cases?</li>
        <li><strong>Читаемость.</strong> Понятны ли имена переменных, структура, логика?</li>
        <li><strong>Архитектура.</strong> Правильно ли выбран подход? Нет ли God-объектов?</li>
        <li><strong>Безопасность.</strong> Нет ли SQL injection, XSS, утечки секретов?</li>
        <li><strong>Тесты.</strong> Покрыты ли изменения тестами?</li>
      </ul>

      <h2>Правила хорошего ревью</h2>
      <ul>
        <li>MR не больше 400 строк (иначе качество ревью падает)</li>
        <li>Ревью в течение 4 рабочих часов (не блокируем коллег)</li>
        <li>Комментарии — конструктивные, с предложением решения</li>
        <li>Автоматизация: линтеры, форматтеры, type checking — в CI</li>
      </ul>

      <blockquote>Код-ревью — лучший способ распространения знаний в команде. Junior учится у Senior, Senior видит свежий взгляд Junior.</blockquote>
    `
  },
  'technical-debt': {
    slug: 'technical-debt',
    title: 'Технический долг: измерить и погасить',
    catLabel: 'Методологии',
    catColor: '#ec4899',
    readTime: 10,
    author: 'PM-команда',
    authorInitials: 'PM',
    authorColor: '#ec4899',
    category: 'methodology',
    tags: ['Технический долг', 'Agile', 'Код-ревью', 'Процессы'],
    body: `
      <h2>Что такое технический долг</h2>
      <p>Это осознанные или неосознанные компромиссы в качестве кода, которые ускоряют разработку сейчас, но замедляют потом. Как финансовый кредит: берёшь быстро, но платишь проценты.</p>

      <h2>Виды долга</h2>
      <ul>
        <li><strong>Осознанный.</strong> «Сделаем хардкод сейчас, рефакторинг — в следующем спринте». Это нормально, если трекаем.</li>
        <li><strong>Неосознанный.</strong> Плохая архитектура из-за недостатка знаний. Обнаруживается позже.</li>
        <li><strong>Bit rot.</strong> Код устаревает: зависимости не обновляются, паттерны меняются.</li>
      </ul>

      <h2>Как управлять</h2>
      <ul>
        <li><strong>Визуализация.</strong> Помечайте долг в таск-трекере тегом tech-debt. Бэклог должен быть видим.</li>
        <li><strong>Бюджет.</strong> 15-20% спринта — на погашение долга. Не 0% и не 100%.</li>
        <li><strong>Метрики.</strong> Cyclomatic complexity, code coverage, dependency freshness, build time.</li>
      </ul>

      <blockquote>Технический долг с процентами: пропустили рефакторинг → дольше добавляется новый функционал → растёт время на отладку → падает мотивация команды → уходят люди.</blockquote>
    `
  },
  'mvp-development': {
    slug: 'mvp-development',
    title: 'MVP: минимум для максимума',
    catLabel: 'Методологии',
    catColor: '#ec4899',
    readTime: 9,
    author: 'PM-команда',
    authorInitials: 'PM',
    authorColor: '#ec4899',
    category: 'methodology',
    tags: ['MVP', 'Agile', 'Процессы', 'Архитектура'],
    body: `
      <h2>MVP — не «плохая версия продукта»</h2>
      <p>Minimum Viable Product — минимальный набор функций, который решает ключевую проблему пользователя и позволяет проверить гипотезу. Это не «продукт без тестов и дизайна».</p>

      <h2>Как мы определяем скоуп MVP</h2>
      <ol>
        <li><strong>Определяем ключевую гипотезу.</strong> Что мы проверяем? «Пользователи будут записываться на приём онлайн».</li>
        <li><strong>User Story Mapping.</strong> Все сценарии → группируем → первая горизонтальная линия — это MVP.</li>
        <li><strong>MoSCoW.</strong> Must / Should / Could / Won't. В MVP попадает только Must.</li>
        <li><strong>Техническая оценка.</strong> Стек, архитектура, инфраструктура. Выбираем самый быстрый путь.</li>
      </ol>

      <h2>Типичные ошибки</h2>
      <ul>
        <li>«А давайте добавим ещё вот это» — feature creep убивает MVP</li>
        <li>Идеальная архитектура на старте — монолит для MVP достаточен</li>
        <li>Нет метрик — если не измеряешь, не можешь подтвердить/опровергнуть гипотезу</li>
      </ul>

      <blockquote>Мы запускаем MVP за 4-8 недель. Монолит на Vue + Node.js + PostgreSQL. Когда гипотеза подтверждена — масштабируем архитектуру.</blockquote>
    `
  },
  'cloud-native-architecture': {
    slug: 'cloud-native-architecture',
    title: 'Cloud Native: проектирование для облака',
    catLabel: 'DevOps',
    catColor: '#3b82f6',
    readTime: 11,
    author: 'DevOps-инженеры',
    authorInitials: 'DO',
    authorColor: '#3b82f6',
    category: 'devops',
    tags: ['Cloud Native', 'Kubernetes', 'Docker', 'Terraform', 'Микросервисы'],
    body: `
      <h2>Cloud Native ≠ «хостим в облаке»</h2>
      <p>Cloud Native — это подход к проектированию приложений, которые полностью используют преимущества облака: эластичность, автомасштабирование, отказоустойчивость, managed-сервисы.</p>

      <h2>Принципы</h2>
      <ul>
        <li><strong>Контейнеризация.</strong> Всё упаковано в Docker-контейнеры. Одинаково работает везде.</li>
        <li><strong>Оркестрация.</strong> Kubernetes управляет контейнерами: деплой, масштабирование, self-healing.</li>
        <li><strong>Микросервисы.</strong> Маленькие, независимые сервисы с чёткими API.</li>
        <li><strong>Declarative APIs.</strong> Описываем желаемое состояние, система приводит к нему.</li>
      </ul>

      <h2>12-Factor App</h2>
      <p>Методология для cloud-native приложений: конфиг из окружения, stateless процессы, логи в stdout, graceful shutdown, dev/prod parity. Мы следуем этим принципам в каждом проекте.</p>

      <blockquote>Cloud Native — не обязательно про публичные облака (AWS, GCP). Те же принципы работают на on-premise Kubernetes. Главное — подход, а не провайдер.</blockquote>
    `
  },
  'serverless-functions': {
    slug: 'serverless-functions',
    title: 'Serverless: когда это выгодно',
    catLabel: 'DevOps',
    catColor: '#3b82f6',
    readTime: 9,
    author: 'DevOps-инженеры',
    authorInitials: 'DO',
    authorColor: '#3b82f6',
    category: 'devops',
    tags: ['Serverless', 'Cloud Native', 'DevOps', 'Node.js', 'Python'],
    body: `
      <h2>Что такое Serverless</h2>
      <p>Serverless — модель, где вы пишете только код функции, а облако управляет серверами, масштабированием и доступностью. Оплата — за фактические вызовы, а не за время работы сервера.</p>

      <h2>Когда Serverless выгоден</h2>
      <ul>
        <li><strong>Спорадическая нагрузка.</strong> Функция вызывается 100 раз в день — платите только за 100 вызовов.</li>
        <li><strong>Event-driven задачи.</strong> Обработка файлов, webhook-и, scheduled jobs.</li>
        <li><strong>API для мобильных.</strong> Простые CRUD-эндпоинты без инфраструктуры.</li>
      </ul>

      <h2>Когда НЕ Serverless</h2>
      <ul>
        <li><strong>Постоянная нагрузка.</strong> 24/7 трафик на сервере дешевле, чем на Lambda.</li>
        <li><strong>Cold start.</strong> Первый вызов после паузы — задержка 200-1000 мс.</li>
        <li><strong>Сложная бизнес-логика.</strong> Ограничения по времени выполнения (15 мин на AWS Lambda).</li>
      </ul>

      <blockquote>Serverless отлично сочетается с основным приложением: бэкенд на Kubernetes + отдельные Lambda для обработки изображений, отправки email, генерации PDF.</blockquote>
    `
  },
  'feature-flags': {
    slug: 'feature-flags',
    title: 'Feature Flags: релизы без рисков',
    catLabel: 'Методологии',
    catColor: '#ec4899',
    readTime: 8,
    author: 'PM-команда',
    authorInitials: 'PM',
    authorColor: '#ec4899',
    category: 'methodology',
    tags: ['Feature Flags', 'CI/CD', 'Agile', 'Процессы'],
    body: `
      <h2>Деплой ≠ Релиз</h2>
      <p>С feature flags вы деплоите код в production, но включаете функцию только для выбранных пользователей. Это разделяет процесс деплоя (техническая операция) и релиза (бизнес-решение).</p>

      <h2>Сценарии использования</h2>
      <ul>
        <li><strong>Canary Release.</strong> Новая функция включена для 5% пользователей. Если метрики хорошие — раскатываем на 100%.</li>
        <li><strong>A/B тестирование.</strong> Вариант A vs вариант B. Измеряем конверсию.</li>
        <li><strong>Kill Switch.</strong> Мгновенное отключение проблемной функции без деплоя.</li>
        <li><strong>Beta-тестирование.</strong> Новая функция доступна только для бета-пользователей.</li>
      </ul>

      <h2>Инструменты</h2>
      <p><strong>LaunchDarkly</strong> — enterprise-grade, дорогой. <strong>Unleash</strong> — open source, self-hosted. <strong>Custom</strong> — Redis/БД + middleware. Для небольших проектов достаточно.</p>

      <blockquote>В нашей практике каждый feature flag имеет «дату истечения». После полного rollout мы удаляем флаг и упрощаем код. «Временный» флаг, оставшийся на год — это технический долг, и мы его не допускаем.</blockquote>
    `
  },
  'rls-fls-data-security': {
    slug: 'rls-fls-data-security',
    title: 'RLS и FLS: безопасность данных на уровне строк и полей',
    catLabel: 'Безопасность',
    catColor: '#802fb9',
    readTime: 14,
    author: 'Команда данных',
    authorInitials: 'КД',
    authorColor: '#8b5cf6',
    category: 'security',
    tags: ['PostgreSQL', 'Безопасность', 'Multi-tenant', 'JWT', 'API'],
    body: `
      <h2>Проблема: разграничение доступа к данным</h2>
      <p>Представьте: в одной базе данных хранятся данные 50 компаний-клиентов. Менеджер компании A не должен видеть данные компании B. Традиционный подход — проверки в коде приложения: <code>WHERE company_id = :current_company</code>. Проблема: одна пропущенная проверка — и данные утекли.</p>

      <h2>Row Level Security (RLS)</h2>
      <p>RLS в PostgreSQL — механизм разграничения доступа <strong>на уровне БД</strong>. Политика прикрепляется к таблице и автоматически фильтрует строки для каждого запроса. Даже если разработчик забыл WHERE — БД не отдаст чужие данные.</p>
      <pre><code>-- Включаем RLS на таблице
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;

-- Политика: пользователь видит только заказы своей компании
CREATE POLICY company_isolation ON orders
  USING (company_id = current_setting('app.company_id')::int);</code></pre>
      <p>Контекст <code>app.company_id</code> устанавливается при аутентификации: API Gateway извлекает company_id из JWT-токена и передаёт в PostgreSQL через <code>SET LOCAL</code>.</p>

      <h2>Field Level Security (FLS)</h2>
      <p>FLS управляет видимостью <strong>отдельных полей</strong>. Например: HR видит зарплаты сотрудников, а руководитель отдела — только ФИО и должность. Реализация:</p>
      <ul>
        <li><strong>Views + RLS</strong> — создаём view без чувствительных полей, применяем RLS к view</li>
        <li><strong>Column-level GRANT</strong> — PostgreSQL позволяет выдавать права на отдельные колонки</li>
        <li><strong>Application-level FLS</strong> — middleware в API фильтрует поля на основе роли (быстрее для сложных правил)</li>
      </ul>

      <h2>Multi-tenant архитектура с RLS</h2>
      <p>Три подхода к мультитенантности:</p>
      <ul>
        <li><strong>Отдельная БД на тенанта</strong> — максимальная изоляция, дорого в обслуживании</li>
        <li><strong>Отдельная схема</strong> — хорошая изоляция, сложные миграции</li>
        <li><strong>Shared table + RLS</strong> — одна таблица для всех, изоляция через RLS. Дёшево, масштабируемо, безопасно</li>
      </ul>

      <h2>Наш подход в Data Showcase</h2>
      <p>В нашей платформе Data Showcase мы реализуем трёхуровневую безопасность:</p>
      <ul>
        <li><strong>Уровень 1: Разделы</strong> — какие модули доступны компании</li>
        <li><strong>Уровень 2: Сущности (RLS)</strong> — какие записи видит пользователь</li>
        <li><strong>Уровень 3: Атрибуты (FLS)</strong> — какие поля отображаются</li>
      </ul>
      <p>Всё настраивается через админ-панель без кода. JWT-токен содержит роль и company_id, API Gateway устанавливает контекст в PostgreSQL, RLS-политики фильтруют данные автоматически.</p>

      <blockquote>RLS — это не «ещё один уровень защиты». Это <strong>основной</strong> уровень. Проверки в коде приложения — дополнительный. Если забыли проверку в коде — RLS всё равно не отдаст чужие данные.</blockquote>
    `
  }
}

const article = computed(() => {
  const slug = route.params.slug as string
  return articlesDb[slug] || null
})

const relatedArticles = computed(() => {
  if (!article.value) return []
  const all = Object.values(articlesDb)
  return all
    .filter(a => a.category === article.value!.category && a.slug !== article.value!.slug)
    .slice(0, 3)
})
</script>

<style scoped>
.article-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: var(--spacing-3xl);
  align-items: start;
}

.article-back {
  display: inline-block;
  color: var(--color-primary);
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: var(--spacing-xl);
  transition: opacity 0.2s;
}
.article-back:hover { opacity: 0.7; }

.article-meta {
  display: flex;
  gap: 16px;
  align-items: center;
  margin-bottom: var(--spacing-md);
}

.article-cat {
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.article-time {
  font-size: 13px;
  color: var(--color-text-tertiary);
}

.article-title {
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xl);
}

.article-author-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: var(--spacing-2xl);
  padding-bottom: var(--spacing-xl);
  border-bottom: 1px solid var(--color-bg-tertiary);
}

.article-author-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
}

.article-author-name {
  font-weight: 600;
  font-size: 14px;
  color: var(--color-text-primary);
}

.article-author-role {
  font-size: 12px;
  color: var(--color-text-tertiary);
}

/* Article body */
.article-body {
  line-height: 1.8;
  color: var(--color-text-secondary);
  font-size: 16px;
}

.article-body :deep(h2) {
  font-size: 22px;
  font-weight: 700;
  color: var(--color-text-primary);
  margin: var(--spacing-2xl) 0 var(--spacing-md);
}

.article-body :deep(h2:first-child) {
  margin-top: 0;
}

.article-body :deep(p) {
  margin-bottom: var(--spacing-md);
}

.article-body :deep(ul) {
  padding-left: var(--spacing-xl);
  margin-bottom: var(--spacing-md);
}

.article-body :deep(li) {
  margin-bottom: var(--spacing-sm);
}

.article-body :deep(blockquote) {
  border-left: 3px solid var(--color-primary);
  padding: var(--spacing-lg);
  margin: var(--spacing-xl) 0;
  background: var(--color-primary-ultra-light);
  border-radius: 0 var(--radius-md) var(--radius-md) 0;
  font-style: italic;
  color: var(--color-text-primary);
}

.article-body :deep(strong) {
  color: var(--color-text-primary);
  font-weight: 600;
}

/* Tags */
.article-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: var(--spacing-2xl);
  padding-top: var(--spacing-xl);
  border-top: 1px solid var(--color-bg-tertiary);
}

.article-tag {
  background: var(--color-bg-tertiary);
  color: var(--color-text-secondary);
  padding: 4px 12px;
  border-radius: 9999px;
  font-size: 12px;
  font-weight: 500;
}

/* Sidebar */
.article-sidebar {
  position: sticky;
  top: 100px;
}

.sidebar-block {
  background: var(--color-bg-secondary);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-lg);
}

.sidebar-block h4 {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: var(--spacing-md);
  color: var(--color-text-primary);
}

.sidebar-block p {
  font-size: 13px;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
  line-height: 1.5;
}

.sidebar-cta {
  background: var(--color-primary-ultra-light);
  border: 1px solid rgba(239, 63, 41, 0.1);
}

.btn-sm {
  padding: 8px 16px;
  font-size: 13px;
}

.related-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.related-link {
  font-size: 13px;
  color: var(--color-text-secondary);
  text-decoration: none;
  line-height: 1.4;
  transition: color 0.2s;
}

.related-link:hover {
  color: var(--color-primary);
}

/* Not found */
.article-not-found {
  text-align: center;
  padding: var(--spacing-5xl) 0;
}

.article-not-found h2 {
  margin-bottom: var(--spacing-md);
}

.article-not-found p {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-xl);
}

@media (max-width: 968px) {
  .article-layout {
    grid-template-columns: 1fr;
  }

  .article-sidebar {
    position: static;
  }

  .article-title {
    font-size: 24px;
  }
}
</style>
