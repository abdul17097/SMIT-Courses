import mongoose from "mongoose";
import { Cart } from "../modals/cart.js";
import { Product } from "../modals/product.js";
import { AppError } from "../utils/appError.js";

export const getCartProducts = async (req, res, next) => {
  try {
    const { id } = req.user;

    const findCart = await Cart.findOne({ user: id });

    if (!findCart) {
      return next(new AppError("Cart Not Found", 404));
    }

    const products = await Cart.aggregate([
      {
        $match: {
          user: new mongoose.Types.ObjectId(id),
        },
      },
      {
        $unwind: "$items",
      },

      {
        $lookup: {
          from: "products",
          localField: "items.product",
          foreignField: "_id",
          as: "product",
        },
      },
      {
        $unwind: "$product",
      },
      {
        $project: {
          _id: 0,
          quantity: "$items.quantity",
          name: "$product.name",
          description: "$product.description",
          price: "$product.price",
          category: "$product.category",
          subtotal: {
            $multiply: ["$items.quantity", "$product.price"],
          },
        },
      },
    ]);
    res.status(200).json({
      message: "All Cart Products",
      success: true,
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

export const addToCart = async (req, res, next) => {
  try {
    const { id, role } = req.user;
    const { productId, requestedQuantity } = req.body;

    if (requestedQuantity <= 0) {
      return next(new AppError("Quantity must be positive", 400));
    }

    const product = await Product.findById(productId);

    if (!product) {
      return next(new AppError("Product Not Found", 404));
    }

    let cart = await Cart.findOne({ user: id });

    if (!cart) {
      if (product.stock < requestedQuantity) {
        return next(new AppError("Insufficent Stock"));
      }

      cart = await Cart.create({
        user: id,
        items: [
          {
            product: productId,
            quantity: requestedQuantity,
          },
        ],
      });
    } else {
      const findIndex = cart.items.findIndex(
        (item) => item.product == productId,
      );

      if (findIndex > -1) {
        let totalQuantity = cart.items[findIndex].quantity + requestedQuantity;

        if (product.stock < totalQuantity) {
          return next(
            new AppError(
              `Cannot add more. Only ${product.stock} items available in stock total.`,
              400,
            ),
          );
        }

        cart.items[findIndex].quantity = totalQuantity;
      } else {
        if (product.stock < requestedQuantity) {
          return next(new AppError("out of stock", 400));
        }
        cart.items.push({
          product: productId,
          quantity: requestedQuantity,
        });
        await cart.save();
      }
    }

    return res.status(200).json({
      message: "Product added to cart successfully",
      success: true,
      data: cart,
    });
  } catch (error) {
    next(error);
  }
};

export const clearCart = async (req, res, next) => {
  try {
    const { id } = req.user;

    const deletedCart = await Cart.findOneAndDelete({
      user: id,
    });

    res.status(200).json({
      message: "Cleared Cart",
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteCartItem = async (req, res, next) => {
  try {
    const { id } = req.user;
    const { productId } = req.params;

    const findCart = await Cart.findOne({ user: id });
    if (!findCart) {
      return next(new AppError("Cart Not Found", 404));
    }

    const findProduct = findCart.items.find(
      (item) => item.product == productId,
    );

    findCart.items = findCart.items.filter((item) => item.product != productId);

    await findCart.save();

    res.status(200).json({
      message: "Product Delted Successfullly",
      success: true,
    });
  } catch (error) {
    next(error);
  }
};
