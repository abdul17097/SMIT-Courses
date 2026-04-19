const http = require("http");

const server = http.createServer((req, res) => {
  res.end("You have Login Successfully!");
});

server.listen(5000, () => {
  console.log("http://localhost:5000");
});
