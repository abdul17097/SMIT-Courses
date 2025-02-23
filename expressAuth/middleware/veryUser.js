const jwt = require("jsonwebtoken");
const verifyUser = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(
      token,
      "aksldjf;849u5238945ijlkajsflkjaslfj3o4u5oijefkland;lkfj"
    );
    console.log(decoded);

    if (decoded) {
      req.user = decoded.username;
      next();
    } else {
      res.status(401).json({ message: "Invalid token" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { verifyUser };
