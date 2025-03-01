const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userData = {
  id: 3895,
  userName: "test123",
  password: "$2b$10$nbsRIlmO1ZJNRkMvV7S0WOSmLlUho.YlK1xL5vbTQgehnuY0hamEC",
  role: "user",
};

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashPassword = await bcrypt.hash(password, 10);
    res.status(200).json({
      message: "User Register Successfully",
      user: {
        id: userData.id,
        username,
        email,
        hashPassword,
        role: userData.role,
      },
    });
  } catch (error) {
    console.log(error.message);
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const comparePassword = await bcrypt.compare(password, userData.password);

  if (!comparePassword) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  if (username === userData.userName) {
    const token = jwt.sign(userData, process.env.SECRET_KEY, {
      expiresIn: "5h",
    });

    res.json({
      message: "Login successful",
      token: token,
    });
  } else {
    res.status(401).json({
      message: "Invalid credentials",
    });
  }
};

module.exports = { register, login };
