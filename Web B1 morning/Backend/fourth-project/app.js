import express from "express";

const app = express();

app.use(express.json());

// app.get("/test", (req, res, next) => {
//   res.send("Test");
//   next();
// });
app.get("/test", (req, res, next) => {
  next({ message: "something went wrong!" });
});

// error handling middleware
app.use((error, req, res, next) => {
  res.json(error);

  console.log("asldkjf");
});

// normal middleware
// app.use((req, res, next) => {
//   console.log("hellow wolrd");
//   next();
// });

app.get("/", (req, res) => {
  res.send("laksdjf");
});
app.listen(3000, () => {
  console.log("http://localhost:3000");
});
