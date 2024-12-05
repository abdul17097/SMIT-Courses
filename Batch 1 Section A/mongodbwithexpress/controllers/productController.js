import { Product } from "../schemas/productSchema.js";

export const newProduct = async (req, res) => {
  try {
    if (!req.body.title || !req.body.price) {
      return res.json({
        success: false,
        message: "Please fill all the fields",
      });
    }
    const newProduct = await Product.create({
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      category: req.body.category,
    });

    res.json({
      success: true,
      message: "Product added successfully",
      data: newProduct,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Failed to add product",
      error: error.message,
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    console.log(products);

    return res.json({
      success: true,
      message: "All products",
      data: products,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Failed to get all products",
      error: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const isExistProduct = await Product.findById({ _id: id });
    if (!isExistProduct) {
      return res.json({
        success: false,
        message: "Product not found",
      });
    }

    await Product.findByIdAndUpdate({ _id: id }, req.body);

    return res.json({
      success: true,
      message: "Product updated successfully",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Failed to update product",
      error: error.message,
    });
  }
};
