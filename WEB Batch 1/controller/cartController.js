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
    const isProductExisInsCart = await Cart.find();

    // const addProduct = await Cart.create({
    //   userId,
    //   products: [{ productId: req.body.productId }],
    //   quantity: req.body.quantity || 1,
    // });
    return res.json({
      success: true,
      message: "Product added to cart",
      data: isProductExisInsCart,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};
