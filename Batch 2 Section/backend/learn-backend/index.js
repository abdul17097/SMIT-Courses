// import http from "http"
const http = require("http");

const server = http.createServer((request, response) => {
  const { method, url } = request;

  if (method === "GET" && url === "/test") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("hello world");
  } else if (method === "POST" && url === "/login") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("User Lgoin Successful");
  } else if (method === "GET" && url === "/all-users") {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("All Users");
  } else {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});

const userData = {
  username: "test",
  password: "test123",
};

// fetch("http://localhost:4000", {
//   body: JSON.stringify(userData)
// })
