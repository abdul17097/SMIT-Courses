import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to this project");
});

app.post("/", (req, res) => {
  res.send("Post Method");
});

app.put("/", (req, res) => {
  res.send("Put Method");
});

app.delete("/", (req, res) => {
  res.send("Delete Method");
});

app.patch("/", (req, res) => {
  res.send("patch Method");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
