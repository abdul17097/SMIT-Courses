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
