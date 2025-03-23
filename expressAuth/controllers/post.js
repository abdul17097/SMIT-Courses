const { postModel } = require("../models/post");

const newPost = async (req, res) => {
  try {
    if (!req.user.id) {
      res.json({
        message: "required user id",
      });
    }

    const createPost = await postModel.insertOne({
      title: req.body.title,
      description: req.body.description,
      user: req.user.id,
    });

    res.json({
      message: "kush bi",
      data: createPost,
    });
  } catch (error) {
    console.log(error.message);
  }
};
const getPost = async (req, res) => {
  try {
    if (!req.user.id) {
      res.json({
        message: "required user id",
      });
    }

    const allPost = await postModel
      .find({
        user: req.user.id,
      })
      .populate({
        path: "user",
        select: "userName",
        options: { limit: 2 },
      });

    res.json({
      message: "all post",
      data: allPost,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  newPost,
  getPost,
};
