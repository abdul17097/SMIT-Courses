const { default: slugify } = require("slugify");
const { postModel } = require("../models/post");
const cloudinary = require("cloudinary").v2;

const newPost = async (req, res) => {
  console.log(req.file);
  const tags = JSON.parse(req.body.tags);
  console.log(tags);

  try {
    if (!req.user.id) {
      return res.json({
        message: "required user id",
      });
    }

    const isExit = await postModel.findOne({
      title: req.body.title,
    });
    if (isExit) {
      return res.status(409).json({
        message: "Already Exist this post",
      });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "expressAuth",
    });

    const createPost = await postModel.insertOne({
      title: req.body.title,
      description: req.body.description,
      tags,
      slug: slugify(req.body.title, {
        lower: true,
      }),
      image: result.secure_url,
      author: req.user.id,
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
