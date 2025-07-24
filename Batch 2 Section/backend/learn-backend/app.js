const express = require("express");

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "hello world" });

  //   res.send("hello world");
});

app.get("/user-details/:userId", (req, res) => {
  res.json({
    userId: req.params.userId,
  });
});

app.get("/all-users", (req, res) => {
  const { limit, skip } = req.query;
  console.log(limit, skip);

  res.json({
    message: "Fetch All User Successfully",
  });
});

app.post("/", (req, res) => {
  console.log(req.body);

  res.json({
    message: "User Added Successfully",
  });
});

app.delete("/", (req, res) => {
  res.json({
    message: "User Deleted Successfully",
  });
});

app.put("/", (req, res) => {
  res.json({
    message: "User updated Successfully",
  });
});

app.listen(4000, () => {
  console.log("Server running at http://localhost:4000");
});
