import { Product } from "../schema/productSchema.js";

export const createProduct = async (req, res) => {
  try {
    const userId = req.userId;
    console.log(userId);

    const { title, description, price, image } = req.body;
    if (!title || !description || !price) {
      return res.json({
        success: false,
        message: "All fields are required",
      });
    }

    const newProduct = await Product.create({
      title,
      description,
      price,
      image,
    });
    return res.json({
      success: true,
      message: "Product created successfully",
      data: newProduct,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export const allProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    return res.json({
      success: true,
      data: allProducts,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;

    const isExistProduct = await Product.findById({
      _id: productId,
    });
    if (!isExistProduct) {
      return res.json({
        success: false,
        message: "Product not found",
      });
    }
    await Product.findByIdAndUpdate({ _id: productId }, req.body);

    return res.json({
      success: true,
      message: "Product updated",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const isExistProduct = await Product.findById({
      _id: productId,
    });

    if (!isExistProduct) {
      return res.json({
        success: false,
        message: "Product not found",
      });
    }
    await Product.findByIdAndDelete({ _id: productId });
    return res.json({
      success: true,
      message: "Product deleted",
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};
