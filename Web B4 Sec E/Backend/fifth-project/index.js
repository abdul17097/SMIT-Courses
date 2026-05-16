import express from "express";
import { userData } from "./constants/userdb.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.json());
const products = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    description:
      "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    category: "men's clothing",
    image:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    rating: {
      rate: 4.1,
      count: 259,
    },
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    rating: {
      rate: 4.7,
      count: 500,
    },
  },
];

const authMiddleware = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "UnAthorized",
      success: false,
    });
  }

  const decoded = jwt.verify(
    token,
    "234567890asdfgui9uygfdqwefghj0oiuhgfwerghjiuhgfasdfghjk",
  );

  next();
  console.log(decoded);
};

app.get("/profile", authMiddleware, (req, res) => {
  res.status(200).json({
    data: userData,
  });
});

app.get("/products", (req, res) => {
  res.send(products);
});

// signup api
app.post("/signup", async (req, res) => {
  try {
    const data = req.body;

    if (data.email === userData.email) {
      return res.status(409).json({
        message: "User Already Register",
        success: false,
      });
    }

    const hashpassword = await bcrypt.hash(data.password, 10);
    console.log(hashpassword);

    // db query
    // create new user

    res.status(201).json({
      message: "You have Register Successfully!",
      success: true,
      data,
    });
  } catch (error) {
    console.log(error.message);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // find user based on email

    // user exist then
    const comparedPassword = await bcrypt.compare(password, userData.password);
    if (email !== userData.email || !comparedPassword) {
      return res.status(404).json({
        message: "Invalid Credentials",
        success: false,
      });
    }

    const token = jwt.sign(
      { _id: userData.id },
      "234567890asdfgui9uygfdqwefghj0oiuhgfwerghjiuhgfasdfghjk",
      {
        expiresIn: "1d",
      },
    );

    res.status(200).json({
      message: "You have Login Successfully!",
      success: true,
      data: {
        ...req.body,
        token,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || "Something Went Wrong!",
      success: false,
    });
  }
});

// create post
// app.post("/post/create", middleware, (req, res) => {});

app.listen(3000, () => {
  console.log("http://localhost:3000");
});
