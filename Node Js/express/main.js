import express from "express";
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Hello, World!",
  });
});

app.post("/register", (req, res) => {
  res.send({
    success: true,
    message: "User registered successfully!",
    user: req.body,
  });

  console.log(req.body);
});

app.put("/update/:userId", (req, res) => {
  //   console.log(req.params.id);
  //   console.log(req.body)
  console.log(req.params.userId);

  res.json({
    success: true,

    message: "Hello, World!",
  });
});

app.get("/products", (req, res) => {
  const { limit, skip } = req.query;

  res.json({
    success: true,
    message: "products",
    limit: limit,
    skip: skip,
  });
});
app.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Page not found",
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
