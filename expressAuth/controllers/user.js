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

    const creatUser = await userModel.insertOne({
      userName: username,
      email,
      password: hashPassword,
    });

    res.status(200).json({
      message: "User Register Successfully",
      user: creatUser,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const userData = await userModel.findOne({ email });
  const comparePassword = await bcrypt.compare(password, userData.password);

  if (!comparePassword) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  if (email === userData.email) {
    const token = jwt.sign({ id: userData._id }, process.env.SECRET_KEY, {
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

const allUser = async (req, res) => {
  try {
    // const users = await userModel
    //   .find({
    //     userName: "test123",
    //   })
    //   .limit(1);
    const users = await userModel.find();
    if (users.length === 0) {
      return res.json({
        message: "Users not availabe",
      });
    }

    res.json({
      message: "All Users",
      data: users,
    });
  } catch (error) {
    res.json({
      message: error.message,
      status: 404,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const userExist = await userModel.find({
      _id: id,
    });
    if (!userExist) {
      return res.json({
        message: "User not found",
      });
    }

    const deleteUser = await userModel.deleteOne({
      _id: id,
    });
    res.json({
      message: "User Deleted Successfully",
      data: deleteUser,
    });
  } catch (error) {
    res.json({
      message: error.message,
      status: 404,
    });
  }
};

const updateUSer = async (req, res) => {
  try {
    const { userId } = req.params;
    const userExist = await userModel.findOne({ _id: userId });
    if (!userExist) {
      res.json({
        message: "User not found",
      });
    }
    await userModel.updateOne(
      {
        _id: userExist._id,
      },
      {
        $set: {
          userName: "khan123",
          email: "khan123@gmail.com",
        },
      }
    );
    res.json({
      message: "User Updated Successfully",
    });
  } catch (error) {
    console.log(error.message);
  }
};

// app.get("/all", async (req, res) => {
//   try {
//     const query = req.query;
//     console.log(query);

//     // const users = await userModel.find({
//     //   $nor: [
//     //     {
//     //       age: 55,
//     //     },
//     //     {
//     //       name: "test1",
//     //     },
//     //   ],
//     // });
//     const users = await userModel.find({ age: { $eq: query.age } });

//     res.json({
//       data: users,
//     });
//   } catch (error) {
//     console.log(error.message);
//   }

const filterUsers = async (req, res) => {
  try {
    const query = req.query;

    // const users = await userModel.find({
    //   $and: [
    //     {
    //       age: {
    //         $eq: query.age,
    //       },
    //     },
    //     {
    //       email: {
    //         $eq: query.email,
    //       },
    //     },
    //   ],
    // });
    const users = await userModel.find({
      $or: [
        {
          age: {
            $gte: query.age,
          },
        },
        {
          email: {
            $eq: query.email,
          },
        },
      ],
    });
    res.json({
      message: "success",
      data: users,
    });
  } catch (error) {
    console.log(error.message);
  }
};
module.exports = {
  register,
  login,
  sendEmail,
  allUser,
  deleteUser,
  updateUSer,
  filterUsers,
};
