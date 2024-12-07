import mongoose, { Types } from "mongoose";
import { Cart } from "../schema/cartSchema.js";
import { Product } from "../schema/productSchema.js";

export const addToCart = async (req, res) => {
  try {
    const userId = req.userId;
    if (!req.body.productId) {
      return res.json({
        success: false,
        message: "Product ID is required",
      });
    }
    const isExistProduct = await Product.findById({ _id: req.body.productId });
    if (!isExistProduct) {
      return res.json({
        success: false,
        message: "Product not found",
      });
    }

    const addProduct = await Cart.create({
      userId,
      products: [{ productId: req.body.productId }],
      quantity: req.body.quantity || 1,
    });
    return res.json({
      success: true,
      message: "Product added to cart",
      data: addProduct,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export const cartData = async (req, res) => {
  try {
    const userId = req.userId;
    console.log(userId);

    const cartData = await Cart.aggregate([
      {
        $match: {
          userId: new mongoose.Types.ObjectId(req.userId),
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "userId",
          foreignField: "_id",
          as: "user",
        },
      },
      {
        $unwind: "$user", // Deconstruct the user array to get a single object
      },
    ]);

    return res.json({
      success: true,
      message: "Cart data fetched",
      data: cartData,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

// db.users.aggregate([
//   {
//     $lookup: {
//       from: "orders", // Related collection
//       localField: "orderIds", // Field in `users`
//       foreignField: "_id", // Field in `orders`
//       as: "userOrders", // Name for the resulting array
//     },
//   },
// ]);

// User.findOne({ _id: userId })
//   .populate({
//     path: "orders", // Populate `orders` from `User`
//     populate: {
//       // Populate `products` inside `orders`
//       path: "products", // Field in `Order` to populate
//       model: "Product", // Related model name
//     },
//   })
//   .exec((err, user) => {
//     if (err) return console.error(err);
//     console.log(user);
//   });
