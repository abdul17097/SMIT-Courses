import mongoose from "mongoose";
import { Cart } from "../models/cart.js";
import { Product } from "../models/product.js";

export const addToCart = async (req, res) => {
  try {
    const { productId, quantity = 1 } = req.body;
    const { userId } = req.user;

    const findProduct = await Product.findById(productId);

    if (!findProduct) {
      return res.status(404).json({
        message: "Product Not Found",
        success: false,
      });
    }

    if (findProduct.stock < quantity) {
      return res.status(404).json({
        message: "Out of Stock",
        success: false,
      });
    }

    const cartProduct = await Cart.create({
      user: userId,
      items: [],
    });

    cartProduct.items.push({ prodcut: productId, quantity: quantity });

    await cartProduct.save();

    res.json({
      message: "test cart",
      data: cartProduct,
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
