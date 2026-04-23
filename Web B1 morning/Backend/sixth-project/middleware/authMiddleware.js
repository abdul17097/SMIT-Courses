import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  // const token = req.headers.authorization.split(" ")[1];
  const token = req.cookies.token;
  console.log(token);

  if (!token) {
    return res.status(403).json({
      message: "Forbidden",
      success: false,
    });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  //   user.find({_id: decoded.id})

  if (!decoded._id) {
    return res.status(403).json({
      message: "Forbidden",
      success: false,
    });
  }

  req.user = decoded;
  next();
};

// .split(" ")[1];

export const allowRoles = (...roles) => {
  return (req, res, next) => {
    const { _id, role } = req.user;
    const matchRole = roles.includes(role);

    if (!matchRole) {
      return res.status(403).json({
        message: "Unauthorized",
        success: false,
      });
    }

    next();
  };
};
