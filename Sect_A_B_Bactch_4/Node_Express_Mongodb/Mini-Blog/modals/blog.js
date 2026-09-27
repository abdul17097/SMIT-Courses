import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
  },
  image: String,
  content: String,
});

export const Blog = mongoose.model("blogs", blogSchema);
