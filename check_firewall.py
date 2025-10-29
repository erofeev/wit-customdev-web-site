#!/usr/bin/env python3
import pexpect
import sys

host = "81.200.147.95"
user = "root"
password = "sK4?+icFE7RHoi"

print(f"Подключение к {user}@{host}...")

child = pexpect.spawn(f'ssh -o StrictHostKeyChecking=no {user}@{host}', encoding='utf-8', timeout=30)
child.logfile = sys.stdout

try:
    child.expect(['password:', 'yes/no'], timeout=10)
    if 'yes/no' in str(child.after):
        child.sendline('yes')
        child.expect('password:')
    child.sendline(password)
    child.expect('# ', timeout=10)
    
    print("\n=== Проверка файрвола UFW ===")
    child.sendline('ufw status')
    child.expect('# ', timeout=5)
    
    print("\n=== Проверка iptables ===")
    child.sendline('iptables -L -n -v | head -20')
    child.expect('# ', timeout=5)
    
    print("\n=== Проверка локальной доступности ===")
    child.sendline('curl -I http://localhost:8080 2>&1 | head -10')
    child.expect('# ', timeout=5)
    
    print("\n=== Открытие порта 8080 в UFW ===")
    child.sendline('ufw allow 8080/tcp')
    child.expect('# ', timeout=5)
    
    print("\n=== Проверка статуса UFW после изменений ===")
    child.sendline('ufw status')
    child.expect('# ', timeout=5)
    
    child.sendline('exit')
    child.expect(pexpect.EOF, timeout=5)
    
except Exception as e:
    print(f"Ошибка: {e}")
    child.close()

