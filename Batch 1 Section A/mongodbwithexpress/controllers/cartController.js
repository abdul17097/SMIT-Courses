import { Cart } from "../schemas/cartSchema.js";
import { Product } from "../schemas/productSchema.js";

export const addToCart = async (req, res) => {
  const userId = req.userId;
  console.log(userId);

  try {
    const isExistProduct = await Product.findById({
      _id: req.body.productId,
    });
    if (!isExistProduct) {
      return res.json({
        success: false,
        message: "Product not found",
      });
    }

    await Cart.create({
      user: userId,
      product: req.body.productId,
    });

    return res.json({
      success: true,
      message: "Product added to cart",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Failed to add to cart",
      error: error.message,
    });
  }
};
