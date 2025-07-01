const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const path = url.parse(req.url, true); // True : Convert url into object;
  if (path.pathname === "/" && req.method === "GET") {
    //   res.writeHead(200, { "Content-Type": "text/html" });
    res.end(JSON.stringify({ hello: "world" }));
  } else if (path.pathname === "/hello" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello, World!" }));
  } else if (path.pathname === "/login" && req.method === "POST") {
    let body = "";
    req.on("data", (chuck) => {
      body += chuck;
    });

    req.on("end", () => {
      const data = JSON.parse(body);
      //   res.write("asdflkasjdf");
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Login successful", data: data }));
    });
  } else {
    res.writeHead(404);
    res.end("Page not found");
  }
});

server.listen(5000, () => {
  console.log("Server is running on port 3000");
});
