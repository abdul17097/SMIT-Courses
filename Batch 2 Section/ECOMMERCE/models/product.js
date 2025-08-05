import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    description: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
    },
    price: {
      type: Number,
      required: true,
      min: 0, // Price cannot be negative
    },
    currency: {
      type: String,
      default: "USD",
      trim: true,
    },
    imageUrl: {
      type: String,
      default: "https://placehold.co/400x300/CCCCCC/000000?text=No+Image", // Default placeholder
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps automatically
  }
);
