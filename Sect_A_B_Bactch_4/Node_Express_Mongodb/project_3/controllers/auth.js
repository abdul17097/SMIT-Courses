import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { user } from "../db/user.js";
import nodemailer from "nodemailer";
import { mailOptions, transporter } from "../config/emialConfig.js";

export const login = async (req, res) => {
  const token = jwt.sign(
    { _id: 234234, role: "admin", email: req.body.email },
    process.env.SECRET_KEY,
    {
      expiresIn: "1d",
    },
  );
  // let hashpassword = await bcrypt.hash(req.body.password, 10);
  let comparedPassword = await bcrypt.compare(req.body.password, user.password);
  if (!comparedPassword) {
    return res.json({
      message: "Invalid Credientials",
    });
  }
  // let hashpassword = req.body.password;
  // console.log(hashpassword);

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: ", info.response);
    }
  });
  res.json({
    message: "Hello world!",

    token: token,
  });
};

// password: 1234
// salt: 34oi5jl3kj@#$%@#$%KJ%LK@#J$LK%@
