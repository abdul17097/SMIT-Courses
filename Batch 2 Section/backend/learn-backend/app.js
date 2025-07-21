const express = require("express");
const bcrypt = require("bcryptjs");
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const app = express();

app.use(express.json());
app.use("/user", userRoutes);
app.use("/product", productRoutes);
// app.use("/product", productRoutes)

app.get("/", (req, res) => {
  res.json({ message: "hello world" });

  //   res.send("hello world");
});

app.get("/user-details/:userId", (req, res) => {
  res.json({
    userId: req.params.userId,
  });
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.json({ message: "please fill all fields" });
  }

  const hashpassword =
    "$2b$10$75WFDs0e7I41Gst5YlHJPe187.2AzzH2bosYX51pckuqj5D6btz9q";

  const comparePassword = await bcrypt.compare(password, hashpassword);

  if (!comparePassword) {
    return res.json({
      message: "Invaild Credentials",
    });
  }

  // const userData = {
  //   username,
  //   password: hashpassword,
  //   gender: "male",
  //   age: 34,
  //   nationality: "pak"
  // }

  // const {password, ...rest } = userData;

  res.json({
    message: "User Login Successfully",
    data: {
      username,
    },
  });
});

app.get("/all-users", (req, res) => {
  const { limit, skip } = req.query;
  console.log(limit, skip);

  res.json({
    message: "Fetch All User Successfully",
  });
});

app.post("/", async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  if (!username || !password) {
    return res.json({
      message: "please fill all fields",
    });
  }

  const hashpassword = await bcrypt.hashSync(password);

  res.json({
    message: "User Added Successfully",
    data: {
      username,
      password: hashpassword,
    },
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
