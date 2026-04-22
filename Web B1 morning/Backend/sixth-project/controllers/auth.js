import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
const users = [
  {
    id: 1,
    name: "test",
    email: "test@gmail.com",
    password: "$2b$10$yvQFJdsusjFuJCVz6LdKlOyXPDXjia4bHowQ7IZrmh6Nrsq2NNTK2",
  },
];

export const test = (req, res) => {
  res.status(200).json({
    message: "work properly",
    success: true,
  });
};

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  const findUser = users.find((user) => user.email === email);

  if (findUser) {
    res.status(409).json({
      message: "User Already Exist!",
      success: false,
    });
  } else {
    const hashPassword = await bcrypt.hash(password, 10);
    const comparePassword = await bcrypt.compare(
      password,
      "$2b$10$yvQFJdsusjFuJCVz6LdKlOyXPDXjia4bHowQ7IZrmh6Nrsq2NNTK2",
    );
    console.log("comparePassword ", comparePassword);

    console.log(hashPassword);

    users.push({
      id: new Date(),
      name,
      email,
    });

    res.status(201).json({
      message: "Signup Successfully!",
      success: true,
      data: {
        id: new Date(),
        name,
        email,
      },
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const findUser = users.find((user) => user.email === email);

  // Check if user exists first
  if (!findUser) {
    return res.status(404).json({
      message: "User Not Found!",
      success: false,
    });
  }

  // Compare password
  const comparedPassword = await bcrypt.compare(password, findUser.password);

  if (!comparedPassword) {
    return res.status(401).json({
      message: "Invalid Credentials!",
      success: false,
    });
  }

  const { id, ...rest } = findUser;
  const token = jwt.sign(
    { _id: id, role: "admin" },
    "asdfjlkasdjf;lkajsd;lfkjoqiuropiqwerhj",
    {
      expiresIn: "15m",
    },
  );

  // Success case
  return res.status(200).json({
    message: "User Login Successfully!",
    success: true,

    data: { ...findUser, token },
  });
};
