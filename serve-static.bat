@echo off
echo === Khởi động server cho phiên bản HTML tĩnh của Ali Studio ===
echo.

if not exist out (
  echo Thư mục 'out' không tồn tại!
  echo Vui lòng chạy 'build-static.bat' trước để tạo các file HTML tĩnh.
  pause
  exit
)

echo Đang khởi động server tại http://localhost:3000...
echo Nhấn Ctrl+C để dừng server.
echo.

powershell -ExecutionPolicy Bypass -Command "node simple-server.js"
pause 