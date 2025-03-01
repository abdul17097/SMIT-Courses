const jwt = require("jsonwebtoken");
const verifyUser = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error.message);
  }
};

const verifyUserRole = (req, res, next) => {
  try {
    console.log("user Data", req.user);
    if (req.user.role === "admin") {
      next();
    }
    res.status(403).json({ message: "User role is not admin" });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { verifyUser, verifyUserRole };

// const authHeader = req.headers.authorization;

// if (!authHeader || !authHeader.startsWith("Bearer ")) {
//   return res.status(401).json({ message: "Access denied. No token provided." });
// }
// jwt.verify(token, secretKey, (err, decoded) => {
//   if (err) {
//     return res.status(401).json({ message: "Invalid or expired token." });
//   }

//   req.user = decoded;
//   next();
// });

// const authorizeRoles = (...allowedRoles) => {
//   return (req, res, next) => {
//     if (!req.user || !req.user.role) {
//       return res
//         .status(403)
//         .json({ message: "Access denied. No role assigned." });
//     }

//     if (!allowedRoles.includes(req.user.role)) {
//       return res
//         .status(403)
//         .json({ message: "Access denied. Insufficient permissions." });
//     }

//     next();
//   };
// };
