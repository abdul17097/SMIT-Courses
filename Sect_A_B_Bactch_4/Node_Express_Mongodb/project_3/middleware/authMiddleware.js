import jwt from "jsonwebtoken";

const user = {
  _id: 2342343,
  email: "hello@gmail.com",
};
export const authMiddlware = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const secret_key =
    "adklaslkjf94350934809uiroifjlaskdjflasjdfoj@#$#$$%^%#$@#$@";

  const payload = jwt.verify(token, secret_key);

  if (user._id !== payload.id && user.email !== payload.email) {
    return res.status(401).json({
      message: "Access Denied!",
      success: false,
    });
  }

  next();
};
