const express = require("express");

const app = express();
app.use(express.json());
app.get("/", (request, response) => {
  response.send("Hello World!");
});

app.post("/login", (request, response) => {
  console.log(request.body);
});
const port = 9000;
app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
