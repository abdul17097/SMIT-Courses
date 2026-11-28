import mongoose from "mongoose";
const blogSchema = mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
  },
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
});

export const Blog = new mongoose.model("blogs", blogSchema);
