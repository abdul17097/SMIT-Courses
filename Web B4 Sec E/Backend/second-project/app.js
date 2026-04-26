const http = require("http");
const baseURl = require("url");

const users = [
  { id: 1, name: "test" },
  { id: 2, name: "test1" },
  { id: 3, name: "test2" },
];
const products = [
  { id: 1, name: "product" },
  { id: 2, name: "product1" },
  { id: 3, name: "product2" },
];

const app = http.createServer((req, res) => {
  //   console.log(req.url);
  //   res.end("hello world!");
  const { method, url } = req;
  console.log(method, url);
  if (method == "GET" && url == "/users") {
    res.end(JSON.stringify(users));
  } else if (method == "GET" && url == "/products") {
    res.end(JSON.stringify(products));
  } else {
    res.end("Not Found");
  }
});

app.listen(3000, () => {
  console.log("server is running on: http://localhost:3000");
});

// fetch("http://localhost:3000")
