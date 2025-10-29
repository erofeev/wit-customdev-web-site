# Обновление диаграммы архитектуры

## Выполненные улучшения

### 1. Масштабируемость Frontend ✅
- **Добавлено**: 2 инстанса Nginx с Frontend (Nginx #1 и Nginx #2)
- **Индикация**: Текст "⬍ Scalable ⬍ Load Balanced" под инстансами
- **Связи**: Traefik распределяет трафик на оба инстанса

### 2. Новый микросервис ✅
- **Добавлен**: Events/Notifications Service
- **Компоненты**:
  - Events
  - Notifications
  - Email Queue
  - Push
  - Dgraph mixin
  - node broker

### 3. Анимированные импульсы на всех связях ✅
- Все линии связей теперь имеют анимированные пульсирующие точки
- Разные скорости анимации (1.2s - 2.7s) для визуального разнообразия
- Всего **более 20 анимированных импульсов**

### 4. Полная структура диаграммы

#### Входная точка
- Internet (User Devices)
- Traefik (On-premise Gateway / Reverse Proxy)

#### Frontend Layer (Масштабируемый)
- Nginx #1 + Frontend (Vue/React)
- Nginx #2 + Frontend (Vue/React)

#### Message Broker
- NATS (High-speed Message Broker)

#### API Gateway
- API gateway
- WWW Dev UI Dashboard
- node broker

#### Микросервисы (5 контейнеров)
1. **User & Auth Service**
   - User, Auth
   - Roles & Permissions, Access Groups
   - Dgraph mixin, node broker

2. **House Service**
   - House
   - Dgraph mixin, node broker

3. **Dictionaries Service**
   - Dictionaries
   - Dgraph mixin, node broker

4. **Events/Notifications Service** (НОВЫЙ)
   - Events, Notifications
   - Email Queue, Push
   - Dgraph mixin, node broker

#### Базы данных
- Dgraph Zero (Cluster Manager)
- Dgraph Alpha (Data Storage)
- Возможность подключения PostgreSQL, MongoDB и других БД

#### Infrastructure & Observability
- Log Storage (Elasticsearch)
- Log Analytic (Kibana)
- Log Storage (PostgreSQL)
- Monitoring (Dozzle - Docker logs)
- Metrics (Grafana)
- Traces (Jaeger)
- UI Admin for Database

### Типы связей
1. **Internet** (cyan) - внешний трафик
2. **HTTP/Gateway** (зеленый) - HTTP/REST API
3. **Microservices** (оранжевый) - межсервисное взаимодействие
4. **Message Broker** (синий пунктир) - асинхронные сообщения
5. **Database** (фиолетовый) - подключения к БД
6. **Observability** (серый пунктир) - мониторинг и логи
7. **Опционально** (красный пунктир) - дополнительные компоненты

## Тестирование

### Playwright тесты: **8/8 прошли успешно** ✅

1. ✅ Отображение диаграммы
2. ✅ Наличие всех микросервисов
3. ✅ Масштабируемость Frontend
4. ✅ Инфраструктурные компоненты
5. ✅ Infrastructure Layer
6. ✅ Анимированные импульсы (>15 штук)
7. ✅ Легенда с типами связей
8. ✅ Корректный информационный текст

### Запуск тестов
```bash
npm install -D @playwright/test
npx playwright install chromium
npx playwright test
```

## Файлы изменены
- `src/components/ArchitectureDiagram.vue` - основной компонент
- `tests/architecture-diagram.spec.ts` - тесты Playwright
- `playwright.config.ts` - конфигурация Playwright

## Запуск для просмотра
```bash
npm run dev
# Открыть http://localhost:3000/platform
```
