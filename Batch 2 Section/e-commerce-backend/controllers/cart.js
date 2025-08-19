import mongoose from "mongoose";
import { Cart } from "../models/cart.js";
import { Product } from "../models/product.js";

//  Add product to cart
export const addToCart = async (req, res) => {
  try {
    const { productId, quantity } = req.body;
    const { userId } = req.user;

    if (!userId || !productId) {
      return res.status(400).json({ error: "User and Product are required" });
    }

    // find product to check stock
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // check if cart item already exists
    let cartItem = await Cart.findOne({ user: userId, product: productId });

    if (cartItem) {
      const newQuantity = cartItem.quantity + (quantity || 1);
      // 3 > 8
      if (newQuantity > product.stock) {
        return res
          .status(400)
          .json({ error: `Only ${product.stock} items in stock` });
      }

      // update quantity
      cartItem.quantity = newQuantity;
      await cartItem.save();
      return res.status(200).json({ message: "Cart updated", cartItem });
    }

    // create new cart item
    if ((quantity || 1) > product.stock) {
      return res
        .status(400)
        .json({ error: `Only ${product.stock} items in stock` });
    }

    cartItem = new Cart({
      user: userId,
      product: productId,
      quantity: quantity || 1,
    });

    await cartItem.save();
    return res.status(201).json({ message: "Added to cart", cartItem });
  } catch (err) {
    throw new Error(err.message);
  }
};

// Get all cart products for a user
export const getCart = async (req, res) => {
  try {
    const { userId } = req.user;

    if (!userId) {
      return res.status(400).json({ error: "User required" });
    }

    // Populate product details

    const cartItems = await Cart.aggregate([
      {
        $match: {
          user: new mongoose.Types.ObjectId(userId),
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "product",
          foreignField: "_id",
          as: "productDetails",
        },
      },
      {
        $unwind: "$productDetails",
      },
    ]);

    if (!cartItems.length) {
      return res.status(200).json({ message: "Cart is empty", cart: [] });
    }

    return res.status(200).json({ cart: cartItems });
  } catch (err) {
    console.error("GetCart error:", err);
    res.status(500).json({ error: err.message });
  }
};

// Remove a product from cart
export const removeFromCart = async (req, res) => {
  try {
    const { userId } = req.user;
    const { productId } = req.params; // product id passed in params

    if (!userId || !productId) {
      return res.status(400).json({ error: "User and Product are required" });
    }

    const cartItem = await Cart.findOneAndDelete({
      user: userId,
      product: productId,
    });

    if (!cartItem) {
      return res.status(404).json({ error: "Item not found in cart" });
    }

    return res.status(200).json({ message: "Item removed from cart" });
  } catch (err) {
    console.error("RemoveFromCart error:", err);
    res.status(500).json({ error: err.message });
  }
};
