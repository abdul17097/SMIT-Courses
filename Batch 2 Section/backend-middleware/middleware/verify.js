import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.header("authorization").split(" ")[1];
  if (!token) {
    return res.json({
      message: "You can't access",
      success: false,
    });
  }

  const decoded = jwt.verify(
    token,
    "laskjf;liwquropqiwutp893q4u95348ujfioljsfklsadjfo43u9"
  );
  req.user = decoded.id;
  console.log(decoded);

  next();
};

// fetch("/", {
//   body: {},
//   headers: {
//     " Authorization":
//       "Barear eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEzNDQzNSwidXNlckVtYWlsIjoidGVzdDEyM0BnbWFpbC5jb20iLCJpYXQiOjE3NTMwNzQ4NTIsImV4cCI6MTc1MzA3NTc1Mn0.muyc1PlMqEW7KkwEXyh9oRH2hYwHBPnE6qv6dDmh9aI",
//   },
// });
