import jwt, { decode } from "jsonwebtoken";
export const verifyUser = async (req, res, next) => {
  try {
    if (!req.headers["authorization"]) {
      res.json({
        success: false,
        message: "Authorization token is missing",
      });
    }
    const token = req.headers["authorization"].split(" ")[1];

    const decodedToken = jwt.verify(token, process.env.SECRET);

    req.userId = decodedToken.userId;

    if (!decodedToken.userId) {
      res.json({
        success: false,
        message: "UnAuthorized",
      });
    }

    next();
  } catch (error) {
    res.json({
      success: false,
      message: "Failed to verify user",
      error: error.message,
    });
  }
};

// fetch("http://localhost:8000/allUser", {
//   method: "GET",
//   headers: {
//     Authorization: `Bearer ${localStorage.getItem("token")}`,
//   },
// });
