import mongoose from "mongoose";

export const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true },
);

export const Post = mongoose.model("Post", postSchema);
