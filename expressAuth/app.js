const express = require("express");
const dbconnection = require("./config/connect.js");
const { userModel } = require("./models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());
dbconnection();
app.post("/register", async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const isUserExist = await userModel.findOne({
      email: email,
    });
    if (isUserExist) {
      return res.json({
        message: `User already Exist  with this ${email}`,
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await userModel.insertOne({
      userName: userName,
      email: email,
      password: hashPassword,
    });

    return res.json({
      message: "User created succesfully",
      data: newUser,
    });
  } catch (error) {
    res.json({
      message: error.message,
      status: 404,
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const isUserExist = await userModel.findOne({
      email,
    });
    if (!isUserExist) {
      return res.json({
        message: `User not found`,
      });
    }
    const comparePassword = await bcrypt.compare(
      password,
      isUserExist.password
    );
    if (!comparePassword) {
      return res.json({
        message: `Invalid Credential`,
      });
    }

    const token = jwt.sign(
      { id: isUserExist._id },
      "askdjf;liwuaeroqiwejklsajdflkjasldkfj"
    );
    res.json({
      message: "User Login Successfully",
      data: {
        isUserExist,
        token,
      },
    });
  } catch (error) {
    res.json({
      message: error.message,
      status: 404,
    });
  }
});

app.get("/all-user", async (req, res) => {
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
});

app.delete("/delete-user/:id", async (req, res) => {
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
});

app.put("/update/:userId", async (req, res) => {
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
});

app.get("/all", async (req, res) => {
  try {
    const query = req.query;
    console.log(query);

    // const users = await userModel.find({
    //   $nor: [
    //     {
    //       age: 55,
    //     },
    //     {
    //       name: "test1",
    //     },
    //   ],
    // });
    const users = await userModel.find({ age: { $eq: query.age } });

    res.json({
      data: users,
    });
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(5000);
