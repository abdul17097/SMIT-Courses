const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
  },
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "tags",
    },
  ],
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "comments",
    },
  ],
  bookmarks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "bookmarks",
    },
  ],
  likes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "likes",
    },
  ],
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const postModel = mongoose.model("posts", postSchema);

module.exports = {
  postModel,
};
