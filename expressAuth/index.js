const express = require("express");
const jwt = require("jsonwebtoken");
const { verifyUser } = require("./middleware/veryUser");
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/add-to-cart", verifyUser, (req, res) => {
  res.json([
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
  ]);
});

const userData = {
  userName: "test123",
  password: "password123",
};
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === userData.userName && password === userData.password) {
    const token = jwt.sign(
      { username },
      "aksldjf;849u5238945ijlkajsflkjaslfj3o4u5oijefkland;lkfj",
      {
        expiresIn: "5s",
      }
    );

    res.json({
      message: "Login successful",
      token: token,
    });
  } else {
    res.status(401).json({
      message: "Invalid credentials",
    });
  }
});

app.listen(5000);
