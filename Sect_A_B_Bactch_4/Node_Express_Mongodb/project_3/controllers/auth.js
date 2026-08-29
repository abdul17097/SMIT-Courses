import jwt from "jsonwebtoken";

export const login = async (req, res) => {
  const secret_key =
    "adklaslkjf94350934809uiroifjlaskdjflasjdfoj@#$#$$%^%#$@#$@";
  const token = await jwt.sign(
    { _id: 234234, email: req.body.email },
    secret_key,
    {
      expiresIn: "1m",
    },
  );

  res.json({
    message: "Hello world!",
    token: token,
  });
};
