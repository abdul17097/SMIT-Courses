const userId = 1234;
export const middleware = (req, res, next) => {
  if (userId == 1234) {
    req.user = userId;
    next();
  } else {
    res.send("UnAuthorized User!");
  }
};
