import { Product } from "../modals/product.js";

export const createProduct = async (req, res, next) => {
  try {
    const { name, description, price, category, stock } = req.body;
    const { id, role } = req.user;

    if (role !== "SELLER") {
      return;
      next(new AppError("Only sellers can create products", 403));
    }

    const newProduct = await Product.create({
      name,
      description,
      price,
      category,
      stock,
      seller: id,
    });
    res.status(201).json({
      success: true,
      data: newProduct,
    });
  } catch (error) {
    next(error);
  }
};

export const getAllProducts = async (req, res, next) => {
  const { role } = req.user;
  try {
    let products;
    if (role === "SELLER") {
      products = await Product.find({ seller: req.user.id });
    } else if (role === "BUYER" || role === "ADMIN") {
      products = await Product.find();
    } else {
      return next(new AppError("Unauthorized access", 403));
    }
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { id, role } = req.user;
    console.log(role);

    const { productId } = req.params;
    const { name, description, price, category, stock } = req.body;

    const product = await Product.findById(productId);
    if (!product) {
      return next(new AppError("Product not found", 404));
    }

    if (role !== "SELLER" && role !== "ADMIN") {
      return next(new AppError("Unauthorized access", 403));
    }

    product.name = name || product.name;
    product.description = description || product.description;
    product.price = price || product.price;
    product.category = category || product.category;
    product.stock = stock || product.stock;

    await product.save();

    res.status(200).json({
      success: true,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};
