import mongoose from "mongoose";
export const cartShcema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "users",
    },
    items: [
      {
        product: {
          type: mongoose.Schema.ObjectId,
          ref: "products",
        },
        quantity: {
          type: Number,
          default: 0,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

export const Cart = mongoose.model("cart", cartShcema);
