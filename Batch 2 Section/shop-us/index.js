import express from "express";
import { config } from "dotenv";
import { dbConnection } from "./config/connection.js";
import { User } from "./model/user.js";

const app = express();

config();
dbConnection();
app.use(express.json());

app.get("/", async (req, res) => {
  const allUser = await User.find();
  res.json({
    data: allUser,
    message: "All User",
  });
});

app.get("/newUser", async (req, res) => {
  const newUser = await User.insertOne({
    email: "asim@gmail.com",
    password: "asim",
    username: "Asim",
  });

  if (newUser) {
    return res.json({
      data: newUser,
      message: "User Register Successfully",
    });
  }
  res.json({
    message: "User Register Failed",
  });
});

// update
app.get("/update-user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    // body
    const updatedData = {
      username: "Test done",
    };

    // const findUser = await User.findById({ _id: id });
    // if (!findUser) {
    //   return res.status(400).json({
    //     message: "User not found",
    //     success: false,
    //   });
    // }

    // const updateUSer = await User.findByIdAndUpdate(
    //   id,
    //   {
    //     username: updatedData.username,
    //   },
    //   {
    //     new: true,
    //   }
    // );

    const updateUSer = await User.updateOne(
      {
        username: "Kamran",
      },
      {
        $set: { email: "kamran123@gmail.com" },
      }
    );

    if (!updateUSer) {
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }

    res.status(201).json({
      message: "User Updated Successfully",
      data: updateUSer,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

// delete
app.get("/delete-user/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(400).json({
        message: "User not Found",
        success: false,
      });
    }

    res.status(201).json({
      message: "User Deleted Successfully",
    });
  } catch (error) {
    res.json({
      message: error.message || "Something Went wrong",
      success: false,
    });
  }
});
app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
