import express from "express";
import { errorHandling } from "./middleware/errorMiddleware.js";
import { generateToken } from "./utils/generateToken.js";
import { verifyToken } from "./middleware/verify.js";

const app = express();

app.use(express.json());
app.get("/", (req, res, next) => {
  try {
    res.json({
      message: "hello world",
    });
  } catch (error) {
    next(new Error(error));
  }
});

app.get("/user-profile", verifyToken, (req, res) => {
  console.log(req.user);

  res.json(userDetails);
});

// Database
const userDetails = {
  id: 134435,
  email: "test123@gmail.com",
  password: "test123",
};

// Login API
app.post("/login", (req, res, next) => {
  try {
    const { email, password } = req.body;
    const { email: userEmail, password: userPassword } = userDetails;
    if (!email || !password) {
      return res.json({
        message: "Please fill all Fields",
        success: false,
      });
    }

    if (userEmail !== email || userPassword !== password) {
      return res.json({
        message: "Invalid Credentials",
        success: false,
      });
    }

    const jwtToken = generateToken(userDetails);
    res.json({
      message: "User Login Successfully",
      success: true,
      token: jwtToken,
    });
  } catch (error) {
    next(new Error(error));
  }
});

app.use(errorHandling);

app.listen(5000, () => {
  console.log("Server running on port:5000");
});
