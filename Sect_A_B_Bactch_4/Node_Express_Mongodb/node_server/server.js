import express from "express";

const app = express();

app.get("/welcome", (req, res) => {
  res.send("Welcom to express!");
});
app.get("/test", (req, res) => {
  res.send("Welcom to expressJS!");
});

app.post("/create-post", (req, res) => {
  const frontedData = req.body;
  res.send(frontedData);
});

app.listen(4000, () => {
  console.log("Server is running on: http://localhost:4000");
});
