const { default: mongoose } = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String, required: true },
    isActive: { type: Boolean, default: true }, // soft delete
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = {
  Comment,
};
