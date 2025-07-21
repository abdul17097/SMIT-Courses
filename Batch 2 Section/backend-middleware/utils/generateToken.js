import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  const token = jwt.sign(
    { userId: user.id, userEmail: user.email },
    "laskjf;liwquropqiwutp893q4u95348ujfioljsfklsadjfo43u9",
    {
      expiresIn: "15m",
    }
  );
  return token;
};

// const userDetails = {
//   id: 134435,
//   email: "test123@gmail.com",
//   password: "test123",
// };

// const jwtToken = generateToken(userDetails)
