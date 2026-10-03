const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Welcome to Nodjs");
});

server.listen(4000);
