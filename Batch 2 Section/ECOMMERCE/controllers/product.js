import { Product } from "../models/product.js";

export const createProduct = async (req, res) => {
  try {
    const { title, description, price, imageUrl, category, stock } = req.body;

    if (!title || !price || !category || !stock) {
      return res.status(400).json({
        message: "Pleae fill all feilds",
        success: false,
      });
    }
    const newProduct = new Product({
      title,
      description,
      price,
      imageUrl,
      category,
      stock,
    });
    await newProduct.save();
    res.json({
      message: "Product Added Successfully",
      success: true,
      data: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
