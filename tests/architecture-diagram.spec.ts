import { test, expect } from '@playwright/test';

test.describe('Architecture Diagram', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3002/platform');
    await page.waitForLoadState('networkidle');
  });

  test('should display the architecture diagram', async ({ page }) => {
    // Проверяем наличие диаграммы
    const diagram = page.locator('.architecture-diagram');
    await expect(diagram).toBeVisible();

    // Проверяем наличие SVG
    const svg = diagram.locator('svg.diagram-svg');
    await expect(svg).toBeVisible();
  });

  test('should show all microservices', async ({ page }) => {
    // Проверяем наличие ключевых микросервисов
    await expect(page.getByText('User', { exact: true })).toBeVisible();
    await expect(page.getByText('Auth', { exact: true })).toBeVisible();
    await expect(page.getByText('House', { exact: true })).toBeVisible();
    await expect(page.getByText('Dictionaries', { exact: true })).toBeVisible();
    await expect(page.getByText('Events', { exact: true })).toBeVisible();
    await expect(page.getByText('Notifications', { exact: true })).toBeVisible();
  });

  test('should show frontend scaling', async ({ page }) => {
    // Проверяем наличие двух инстансов Nginx
    await expect(page.getByText('Nginx #1')).toBeVisible();
    await expect(page.getByText('Nginx #2')).toBeVisible();
    await expect(page.getByText('Scalable')).toBeVisible();
    await expect(page.getByText('Load Balanced')).toBeVisible();
  });

  test('should show infrastructure components', async ({ page }) => {
    // Проверяем Traefik
    await expect(page.getByText('Traefik')).toBeVisible();

    // Проверяем NATS
    await expect(page.getByText('NATS')).toBeVisible();

    // Проверяем Dgraph
    await expect(page.getByText('Dgraph Zero')).toBeVisible();
    await expect(page.getByText('Dgraph Alpha')).toBeVisible();
  });

  test('should show infrastructure layer', async ({ page }) => {
    // Проверяем инфраструктурные сервисы
    await expect(page.getByText('Infrastructure & Observability')).toBeVisible();
    await expect(page.getByText('Log Storage').first()).toBeVisible();
    await expect(page.getByText('Kibana', { exact: false })).toBeVisible();
    await expect(page.getByText('Grafana', { exact: false })).toBeVisible();
    await expect(page.getByText('Jaeger', { exact: false })).toBeVisible();
  });

  test('should have animated pulses on connections', async ({ page }) => {
    // Проверяем наличие анимированных пульсов
    const pulses = page.locator('circle.pulse');
    const count = await pulses.count();

    // Должно быть много импульсов (на всех связях)
    expect(count).toBeGreaterThan(15);
  });

  test('should show legend with connection types', async ({ page }) => {
    // Проверяем легенду
    const legend = page.locator('.legend');
    await expect(legend).toBeVisible();

    // Проверяем типы связей в легенде
    await expect(legend.getByText('Типы связей:')).toBeVisible();
    await expect(legend.getByText('Internet')).toBeVisible();
    await expect(legend.getByText('HTTP/Gateway')).toBeVisible();
    await expect(legend.getByText('Microservices')).toBeVisible();
    await expect(legend.getByText('Message Broker')).toBeVisible();
    await expect(legend.getByText('Database')).toBeVisible();
  });

  test('should have correct diagram info text', async ({ page }) => {
    const infoText = page.locator('.diagram-info');
    await expect(infoText).toBeVisible();
    await expect(infoText).toContainText('Полная архитектура микросервисной платформы');
  });
});
