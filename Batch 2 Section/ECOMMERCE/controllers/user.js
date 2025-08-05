import { User } from "../models/user.js";

export const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      res.json({
        message: "Please fill all Fields",
      });
    }

    const findUser = await User.findOne({
      email: email,
    });

    if (findUser) {
      res.status(409).json({
        message: "User Already Exist",
      });
    }
    // const hashPasword =
    // const newUser = await User.insertOne({
    //   username,
    //   email,

    // })

    res.json({
      message: "User Register Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
