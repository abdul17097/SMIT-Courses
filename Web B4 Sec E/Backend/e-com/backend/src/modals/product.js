import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a product name"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please provide a product description"],
    },
    price: {
      type: Number,
      required: [true, "Please provide a product price"],
      min: [0, "Price cannot be negative"],
    },
    category: {
      type: String,
      required: [true, "Please provide a product category"],
    },
    images: {
      type: [String],
      default: [],
    },
    stock: {
      type: Number,
      required: [true, "Please provide product stock quantity"],
      min: [0, "Stock cannot be negative"],
      default: 0,
    },
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "Product must belong to a seller"],
    },
  },
  {
    timestamps: true,
  },
);

export const Product = mongoose.model("products", productSchema);
