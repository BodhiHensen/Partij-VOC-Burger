@echo off
echo Starting V.O.C. Presentation Website...
start http://localhost:8085
python -m http.server 8085
pause
