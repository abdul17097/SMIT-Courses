const express = require("express");
const path = require("path");
const app = express();
console.log(__dirname);

// app.use(express.static("./public"));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "./views");
app.get("/", (req, res) => {
  res.render("index.html");
});

app.get("/home", async (req, res) => {
  res.render("index", {
    userData: [
      { name: "John Doe", age: 30 },
      { name: "Jane Doe", age: 25 },
      { name: "Alice Doe", age: 28 },
    ],
  });
});
// app.get('/all-users', (req, res) => {
//     res.render('index', {data: "somth"})
// })
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
