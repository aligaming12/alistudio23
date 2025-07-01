@echo off
echo === Đang xây dựng phiên bản HTML tĩnh cho Ali Studio ===
echo.

REM Cài đặt các gói phụ thuộc nếu chưa có
if not exist node_modules (
  echo Đang cài đặt các gói phụ thuộc...
  powershell -ExecutionPolicy Bypass -Command "npm install"
) else (
  echo Đã có node_modules, bỏ qua bước cài đặt.
)

echo.
echo Đang xây dựng phiên bản HTML tĩnh...
powershell -ExecutionPolicy Bypass -Command "npm run export"

echo.
echo Đã xây dựng thành công! Các file HTML tĩnh nằm trong thư mục 'out'.
echo.
echo Để xem trang web, hãy chạy: node simple-server.js
echo Sau đó truy cập: http://localhost:3000
echo.
echo Hoặc bạn có thể mở trực tiếp file out/index.html trong trình duyệt.
pause 