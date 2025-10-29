#!/usr/bin/env python3
import subprocess
import sys

host = "81.200.147.95"
user = "root"
password = "sK4?+icFE7RHoi"

# Создаем SSH команду
ssh_cmd = f"""
cd ~/wit-customdev-web-site
echo 'Directory contents:'
ls -la
echo 'Checking project type...'
if [ -f package.json ]; then
    echo 'Found package.json - Vue/Node project'
    echo 'Installing dependencies if needed...'
    npm install
    echo 'Starting server on port 8080...'
    nohup npm run serve -- --port 8080 > server.log 2>&1 &
elif [ -f vite.config.js ] || [ -f vite.config.ts ]; then
    echo 'Found Vite config - Vite project'
    npm install
    nohup npm run dev -- --port 8080 --host > server.log 2>&1 &
elif [ -f docker-compose.yml ]; then
    echo 'Found docker-compose.yml'
    docker-compose up -d
else
    echo 'Unknown project type'
    exit 1
fi
sleep 2
echo 'Checking if server is running...'
netstat -tlnp | grep 8080 || ss -tlnp | grep 8080
"""

try:
    # Используем sshpass если доступен, иначе используем pexpect
    result = subprocess.run(
        ['which', 'sshpass'],
        capture_output=True,
        text=True
    )
    
    if result.returncode == 0:
        # Используем sshpass
        cmd = f"sshpass -p '{password}' ssh -o StrictHostKeyChecking=no {user}@{host} '{ssh_cmd}'"
        subprocess.run(cmd, shell=True)
    else:
        # Пробуем использовать Python pexpect
        try:
            import pexpect
            child = pexpect.spawn(f'ssh -o StrictHostKeyChecking=no {user}@{host}', encoding='utf-8', timeout=30)
            child.logfile = sys.stdout
            child.expect(['password:', pexpect.EOF, pexpect.TIMEOUT])
            if 'password:' in str(child.before + child.after):
                child.sendline(password)
                child.expect('# ')
                for line in ssh_cmd.strip().split('\n'):
                    if line.strip():
                        child.sendline(line.strip())
                        child.expect('# ')
                child.sendline('exit')
                child.expect(pexpect.EOF)
        except ImportError:
            print("pexpect not installed. Installing...")
            subprocess.run([sys.executable, '-m', 'pip', 'install', 'pexpect'], check=True)
            import pexpect
            child = pexpect.spawn(f'ssh -o StrictHostKeyChecking=no {user}@{host}', encoding='utf-8', timeout=30)
            child.logfile = sys.stdout
            child.expect(['password:', pexpect.EOF, pexpect.TIMEOUT])
            if 'password:' in str(child.before + child.after):
                child.sendline(password)
                child.expect('# ')
                for line in ssh_cmd.strip().split('\n'):
                    if line.strip():
                        child.sendline(line.strip())
                        child.expect('# ')
                child.sendline('exit')
                child.expect(pexpect.EOF)
except Exception as e:
    print(f"Error: {e}")
    sys.exit(1)

