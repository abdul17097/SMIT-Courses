const { BookMark } = require("../models/bookmark");

const toggleBookMark = async (req, res) => {
  try {
    const { postId } = req.params;

    const isExist = await BookMark.findOne({
      post: postId,
      user: req.user.id,
    });

    if (!isExist) {
      const newEntry = await BookMark.insertOne({
        post: postId,
        user: req.user.id,
      });
      return res.status(200).json({
        success: true,
        message: "Added Bookmark Success",
        data: newEntry,
      });
    }
    await BookMark.deleteOne({
      _id: isExist._id,
    });

    res.status(200).json({
      message: "Remove from Bookmark",
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  toggleBookMark,
};
