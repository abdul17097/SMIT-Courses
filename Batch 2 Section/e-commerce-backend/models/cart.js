import mongoose from "mongoose";

export const cartItemSchema = new mongoose.Schema({
  prodcut: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "products",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
    defaul: 1,
  },
});

export const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  items: [cartItemSchema],
});

export const Cart = mongoose.model("carts", cartSchema);
