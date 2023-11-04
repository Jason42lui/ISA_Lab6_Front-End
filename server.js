const http = require("http");
const fs = require("fs");
const PORT = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  if (req.url === "/" || req.url === "/index.html") {
    fs.readFile("./index.html", "utf8", (err, content) => {
      if (err) {
        res.writeHead(500);
        res.write("Internal Server Error: ", err);
        res.end();
      } else {
        res.writeHead(200, {
          "Content-Type": "text/html",
        });
        res.end(content);
      }
    });
  } else if (req.url === "/search.html") {
    fs.readFile("./search.html", "utf8", (err, content) => {
      if (err) {
        res.writeHead(500);
        res.write("Internal Server Error: ", err);
        res.end();
      } else {
        res.writeHead(200, {
          "Content-Type": "text/html",
        });
        res.end(content);
      }
    });
  } else if (req.url === "/store.html") {
    fs.readFile("./store.html", "utf8", (err, content) => {
      if (err) {
        res.writeHead(500);
        res.write("Internal Server Error: ", err);
        res.end();
      } else {
        res.writeHead(200, {
          "Content-Type": "text/html",
        });
        res.end(content);
      }
    });
  } else {
    res.writeHead(404);
    res.write("404 Not Found");
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server running at PORT:${PORT}/`);
});
