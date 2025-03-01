const express = require("express");
const { verifyUser, verifyUserRole } = require("./middleware/veryUser");
const userRoutes = require("./routes/user.js");
const dotenv = require("dotenv");
const app = express();

app.use(express.json());
dotenv.config();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/add-to-cart", verifyUser, verifyUserRole, (req, res) => {
  res.json([
    { id: 1, name: "User 1" },
    { id: 2, name: "User 2" },
    { id: 3, name: "User 3" },
  ]);
});

app.use("/user", userRoutes);

app.listen(5000);
