const http = require("http");

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  if (method === "GET") {
    // res.writeHead(200, { "Content-Type": "text/html" });
    res.end("hello world");
  }
});

server.listen(4000);

// http://localhost:4000
