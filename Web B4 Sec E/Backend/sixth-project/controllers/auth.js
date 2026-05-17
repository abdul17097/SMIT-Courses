import jwt from "jsonwebtoken";

const user = {
  id: 123,
  eamil: "test@gmail.com",
  password: "test",
};

export const login = (req, res) => {
  const { email, password } = req.body;

  if (user.eamil !== email || user.password !== password) {
    return res.status(401).json({
      message: "Invalid Credeintials",
      success: false,
    });
  }

  const token = jwt.sign({ _id: user.id }, process.env.JWT_SECRET);

  res.status(201).json({
    data: {
      ...req.body,
      token,
    },
  });

  res.status(200).json({
    message: "User login success",
    success: true,
  });
};

export const signup = (req, res) => {
  res.status(200).json({
    message: "User register success",
    success: true,
  });
};
