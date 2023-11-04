const http = require('http');
const fs = require('fs');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        const html = fs.readFileSync('index.html', 'utf8');
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(html);
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(PORT, () => {
    console.log(`Server running at PORT:${PORT}/`);
  });
  
