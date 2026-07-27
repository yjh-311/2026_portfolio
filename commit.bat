@echo off
chcp 65001 >nul
set /p msg=Commit 메시지를 입력하세요: 
git add .
git commit -m "%msg%"
git push origin main
pause
