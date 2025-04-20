const { Like } = require("../models/like.js");

const toggleLike = async (req, res) => {
  try {
    const { postId } = req.params;

    const isExist = await Like.findOne({
      post: postId,
      user: req.user.id,
    });

    if (!isExist) {
      const newEntry = await Like.insertOne({
        post: postId,
        user: req.user.id,
      });
      return res.status(200).json({
        success: true,
        message: "Liked",
        data: newEntry,
      });
    }
    await Like.deleteOne({
      _id: isExist._id,
    });

    res.status(200).json({
      message: "Unliked",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  toggleLike,
};
