import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "users",
      required: true,
    },
    blogImage: {
      type: String,
      required: true,
      default:
        "https://res.cloudinary.com/dzjv9h6wq/image/upload/v1700000000/default-blog-image.jpg",
    },
  },
  {
    timestamps: true,
  },
);

export const Blog = mongoose.model("blogs", blogSchema);
