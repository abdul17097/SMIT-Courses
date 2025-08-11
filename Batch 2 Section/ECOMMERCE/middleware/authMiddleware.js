import jwt from "jsonwebtoken";

export const verifyUser = (req, res, next) => {
  const token = req.header("authorization").split(" ")[1];

  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
    return;
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(403).json({ message: "Forbidden" });
    return;
  }
};

export const authorize = (roles) => {
  return (req, res, next) => {
    const user = req.user;

    if (!user || !roles.includes(user.role)) {
      res.status(403).json({ message: "Unauthorized" });
      return;
    }

    next();
  };
};
