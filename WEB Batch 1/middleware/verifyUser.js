import jwt from "jsonwebtoken";
export const verifyUser = async (req, res, next) => {
  if (!req.headers.authorization) {
    return res.json({
      success: false,
      message: "No token provided",
    });
  }
  const getToken = req.headers.authorization.split(" ")[1];
  const verifyUser = await jwt.verify(getToken, process.env.SECRET);
  req.userId = verifyUser.userId;
  next();

  try {
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};
