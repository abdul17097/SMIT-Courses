const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
const { userModel } = require("../models/user.js");
const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "abdul17097@gmail.com",
    pass: "hfxz asid iztt uhnn",
  },
});

const userData = {
  id: 3895,
  userName: "test123",
  password: "$2b$10$nbsRIlmO1ZJNRkMvV7S0WOSmLlUho.YlK1xL5vbTQgehnuY0hamEC",
  role: "user",
};

const sendEmail = (req, res) => {
  try {
    const { subject, receiver, description } = req.body;
    if (!subject || !receiver || !description) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const mailOptions = {
      from: "abdul17097@gmail.com",
      to: receiver,
      subject: subject,
      text: description,
      // html: `<h1>Hello world</h1>`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(401).json({ message: "Something went wrong" });
      } else {
        res.status(200).json({
          message: "Email sent successfully",
        });
      }
    });
  } catch (error) {
    res.status(401).json({ message: "Something went wrong" });
  }
};

const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    // const creatUser = await userModel.insertOne({
    //   userName: username,
    //   email,
    //   password: hashPassword,
    // });

    const createUser = res.status(200).json({
      message: "User Register Successfully",
      user: creatUser,
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

module.exports = { register, login, sendEmail };
