import express from "express";
const app = express();
import morgan from "morgan";
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.set("view engine", "ejs");
// app.set("views", "./views");
app.use(express.static("./public"));
app.get("/", (req, res) => {
  res.render("hello.html");
});
app.post("/submit", (req, res) => {
  res.render("index.html");
  // res.send(`Hello, ${req.body.username}`);
});
// app.use(express.urlencoded({ extended: true }));
// Logging middleware

// app.use(morgan("dev"));
// app.get("/", (req, res) => {
//   res.json({
//     success: true,
//     message: "Hello, World!",
//   });
// });
// // app.use("/static", express.static("public"));
// app.post("/register", (req, res) => {
//   res.send({
//     success: true,
//     message: "User registered successfully!",
//     user: req.body,
//   });

//   console.log(req.body);
// });

// app.put("/update/:userId", (req, res) => {
//   //   console.log(req.params.id);
//   //   console.log(req.body)
//   console.log(req.params.userId);

//   res.json({
//     success: true,

//     message: "Hello, World!",
//   });
// });

// app.get("/products", (req, res) => {
//   const { limit, skip } = req.query;

//   res.json({
//     success: true,
//     message: "products",
//     limit: limit,
//     skip: skip,
//   });
// });
// app.all("*", (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: "Page not found",
//   });
// });

// app.get("/", (req, res, next) => {
//   // throw { message: "User Failed!", status: 404 };
//   throw error({ message: "User Failed!", status: 404 });
// });

app.use((error, req, res, next) => {
  error.message = error.message || "Something went wrong";
  error.status = error.status || 500;
  console.log(error.status, error.message);

  res.status(500).json(error);
});
const port = 5000;
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
