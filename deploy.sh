#!/usr/bin/expect -f
set timeout 30
set host "81.200.147.95"
set user "root"
set password "sK4?+icFE7RHoi"

spawn ssh -o StrictHostKeyChecking=no ${user}@${host}
expect {
    "password:" {
        send "${password}\r"
    }
    "yes/no" {
        send "yes\r"
        expect "password:"
        send "${password}\r"
    }
}

expect "# "
send "cd ~/wit-customdev-web-site\r"
expect "# "

send "echo '=== Directory contents ==='\r"
expect "# "
send "ls -la\r"
expect "# "

send "echo '=== Checking project type ==='\r"
expect "# "

# Проверяем наличие запущенного процесса на порту 8080 и останавливаем его
send "lsof -ti:8080 | xargs kill -9 2>/dev/null || pkill -f 'port.*8080' 2>/dev/null || true\r"
expect "# "

# Проверяем тип проекта и запускаем
send "if [ -f package.json ]; then echo 'Vue/Node project detected'; npm install && nohup npm run serve -- --port 8080 --host 0.0.0.0 > server.log 2>&1 & sleep 2 && echo 'Server started on port 8080' && tail -n 10 server.log; elif [ -f vite.config.js ] || [ -f vite.config.ts ]; then echo 'Vite project detected'; npm install && nohup npm run dev -- --port 8080 --host > server.log 2>&1 & sleep 2 && echo 'Server started on port 8080' && tail -n 10 server.log; elif [ -f docker-compose.yml ]; then echo 'Docker Compose project detected'; docker-compose up -d; else echo 'Unknown project type'; exit 1; fi\r"
expect "# "

send "sleep 3\r"
expect "# "

send "echo '=== Checking if server is running on port 8080 ==='\r"
expect "# "
send "netstat -tlnp | grep 8080 || ss -tlnp | grep 8080 || echo 'Port check failed'\r"
expect "# "

send "echo '=== Done ==='\r"
expect "# "

send "exit\r"
expect eof

