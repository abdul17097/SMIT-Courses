import express from "express";
import mongoose from "mongoose";
import { configDotenv } from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import cors from "cors";
import Stripe from "stripe";
import paymentRoutes from "./routes/paymentRoutes.js";
const stripe = Stripe(
  "sk_test_51QV43BAR9PQxM56UdmBYMofGRz97na9puEQezY72gFd28KKaCD32xj4CZFNabc3yqdIhg1NjdL0HlXAsPyeJWj4f00uMnEDWiS"
);
configDotenv();

const app = express();
app.use(express.json());
const port = 3000;

const connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(conn.connection.host);
  } catch (error) {
    console.log(error);
  }
};
connection();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

mongoose.set("strictPopulate", false);
app.use("/user", userRoutes);
app.use("/product", productRoutes);
app.use("/cart", cartRoutes);
app.use("/payment", paymentRoutes);
// app.post("/checkout", async (req, res) => {
//   try {
//     const session = await stripe.checkout.sessions.create({
//       line_items: [
//         {
//           price_data: {
//             currency: "usd",
//             product_data: {
//               name: "Shoes",
//             },
//             unit_amount: 50 * 100,
//           },
//           quantity: 1,
//         },
//       ],
//       mode: "payment",
//       success_url: "http://localhost:5173/complete",
//       cancel_url: "http://localhost:5173/",
//     });
//     console.log(session);
//   } catch (error) {
//     console.log(error);
//   }
// });

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
