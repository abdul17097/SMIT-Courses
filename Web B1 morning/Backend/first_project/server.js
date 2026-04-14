const http = require("http");

const users = [
  { id: 1, name: "Ali", email: "ali@example.com" },
  { id: 2, name: "Sara", email: "sara@example.com" },
  { id: 3, name: "Ahmed", email: "ahmed@example.com" },
];

const app = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log("method: ", req.method, "url:", req.url);

  if (req.method === "GET" && req.url === "/users") {
    res.end(JSON.stringify(users));
  } else {
    res.end("Not Found");
  }
});

app.listen(5000, () => {
  console.log(`http://localhost:5000`);
});
