const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const OUT_DIR = './out';

const server = http.createServer((req, res) => {
  // Xử lý URL để lấy đường dẫn file
  let filePath = path.join(OUT_DIR, req.url === '/' ? 'index.html' : req.url);
  
  // Kiểm tra nếu URL không có phần mở rộng, thêm .html
  if (!path.extname(filePath) && !filePath.endsWith('/')) {
    filePath += '.html';
  } else if (filePath.endsWith('/')) {
    filePath += 'index.html';
  }

  // Lấy phần mở rộng của file
  const extname = path.extname(filePath);
  let contentType = 'text/html';
  
  // Xác định content type dựa vào phần mở rộng
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
    case '.jpeg':
      contentType = 'image/jpeg';
      break;
    case '.svg':
      contentType = 'image/svg+xml';
      break;
  }

  // Đọc file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // File không tồn tại
        fs.readFile(path.join(OUT_DIR, '404.html'), (err, content) => {
          if (err) {
            res.writeHead(404);
            res.end('404 Not Found');
          } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
          }
        });
      } else {
        // Lỗi server
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Thành công
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server chạy tại http://localhost:${PORT}`);
  console.log(`Đang phục vụ các file từ thư mục: ${path.resolve(OUT_DIR)}`);
}); 