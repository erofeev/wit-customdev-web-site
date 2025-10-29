#!/usr/bin/env python3
import pexpect
import sys

host = "81.200.147.95"
user = "root"
password = "sK4?+icFE7RHoi"

print(f"Подключение к {user}@{host}...")

# Подключаемся по SSH
child = pexpect.spawn(f'ssh -o StrictHostKeyChecking=no {user}@{host}', encoding='utf-8', timeout=30)
child.logfile = sys.stdout

try:
    # Ждем запрос пароля
    index = child.expect(['password:', 'yes/no', pexpect.EOF, pexpect.TIMEOUT], timeout=10)
    
    if index == 1:  # yes/no
        child.sendline('yes')
        child.expect('password:')
        child.sendline(password)
    elif index == 0:  # password
        child.sendline(password)
    
    # Ждем приглашение командной строки
    child.expect('# ', timeout=10)
    print("\n✓ Успешно подключен к серверу\n")
    
    # Устанавливаем expect на удаленном сервере (если не установлен)
    print("\n=== Проверка и установка expect на удаленном сервере ===")
    child.sendline('which expect || (apt-get update -qq && apt-get install -y expect)')
    child.expect('# ', timeout=120)
    print("\n✓ Expect установлен/проверен\n")
    
    # Переходим в директорию проекта
    print("=== Переход в директорию проекта ===")
    child.sendline('cd ~/wit-customdev-web-site')
    child.expect('# ', timeout=5)
    
    # Показываем содержимое
    print("=== Содержимое директории ===")
    child.sendline('ls -la')
    child.expect('# ', timeout=5)
    
    # Останавливаем процессы на порту 8080
    print("\n=== Освобождение порта 8080 ===")
    child.sendline('lsof -ti:8080 | xargs kill -9 2>/dev/null || pkill -f "port.*8080" 2>/dev/null || true')
    child.expect('# ', timeout=5)
    
    # Проверяем тип проекта и запускаем
    print("\n=== Запуск проекта ===")
    
    # Проверяем наличие файлов проекта и запускаем соответствующую команду
    # Сначала проверяем Vite, потом package.json, потом docker-compose
    launch_cmd = """if [ -f vite.config.js ] || [ -f vite.config.ts ]; then echo 'Vite проект обнаружен' && npm install && nohup npm run dev -- --port 8080 --host 0.0.0.0 > server.log 2>&1 & sleep 3 && echo 'Сервер запущен на порту 8080' && tail -n 15 server.log; elif [ -f package.json ]; then echo 'Node проект обнаружен' && npm install && if grep -q '"dev"' package.json; then nohup npm run dev -- --port 8080 --host 0.0.0.0 > server.log 2>&1 & else echo 'Не найден скрипт dev или serve в package.json'; exit 1; fi && sleep 3 && echo 'Сервер запущен на порту 8080' && tail -n 15 server.log; elif [ -f docker-compose.yml ]; then echo 'Docker Compose проект обнаружен' && docker-compose up -d; else echo 'Неизвестный тип проекта'; exit 1; fi"""
    
    child.sendline(launch_cmd)
    child.expect('# ', timeout=180)
    
    # Проверяем статус
    print("\n=== Проверка статуса порта 8080 ===")
    child.sendline('ss -tlnp | grep 8080 || netstat -tlnp 2>/dev/null | grep 8080 || echo "Порт не найден"')
    child.expect('# ', timeout=5)
    
    child.sendline('exit')
    child.expect(pexpect.EOF, timeout=5)
    
    print("\n✓ Готово!")
    
except pexpect.TIMEOUT:
    print("Ошибка: таймаут при подключении")
    child.close()
    sys.exit(1)
except pexpect.EOF:
    print("Соединение закрыто")
    sys.exit(1)
except Exception as e:
    print(f"Ошибка: {e}")
    child.close()
    sys.exit(1)

