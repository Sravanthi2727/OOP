import { createServer } from 'http';
import { readFileSync } from 'fs';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 5000;

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
};

const server = createServer((req, res) => {
  let filePath = req.url === '/' ? '/courses.html' : req.url;
  filePath = join(__dirname, filePath);

  const ext = extname(filePath);
  const contentType = mimeTypes[ext] || 'text/plain';

  try {
    const content = readFileSync(filePath);
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(content);
  } catch (error) {
    if (error.code === 'ENOENT') {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 - File Not Found</h1>');
    } else {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('<h1>500 - Internal Server Error</h1>');
    }
  }
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`
✨ VisionVault Courses Platform
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🌐 Server: http://0.0.0.0:${PORT}
📚 Courses: http://localhost:${PORT}
📖 Detail: http://localhost:${PORT}/course-detail.html
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);
});