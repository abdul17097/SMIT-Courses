const { default: mongoose } = require("mongoose");
const { Comment } = require("../models/comment.js");

const createComment = async (req, res) => {
  try {
    const { id } = req.user;
    const { postId } = req.params;
    const { content } = req.body;
    const newComment = await Comment.insertOne({
      user: id,
      post: postId,
      content,
    });
    res.status(200).json({
      message: "Created Successfully",
      data: newComment,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createComment,
};
