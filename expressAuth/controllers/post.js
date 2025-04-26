const { default: slugify } = require("slugify");
const { postModel } = require("../models/post.js");
const { default: mongoose } = require("mongoose");
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

const allPostForGuest = async (req, res) => {
  try {
    const allPost = await postModel.find();
    if (allPost.length > 0) {
      return res.status(200).json({
        message: "All Post",
        data: allPost,
        success: true,
      });
    }
    res.status(404).json({
      message: "Posts not Available",
      data: allPost,
      success: false,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const allPostForRegisterUser = async (req, res) => {
  try {
    const { searchQuery } = req.query;
    const { id } = req.user;
    console.log(id);

    const pipeline = [
      {
        $match: {
          // author: new mongoose.Types.ObjectId(id),
          // $or: [{ title: { $regex: searchQuery, $options: "i" } }],
          isActive: true,
        },
      },
      {
        $lookup: {
          from: "tags",
          localField: "tags",
          foreignField: "_id",
          as: "allTags",
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "author",
          foreignField: "_id",
          as: "userData",
        },
      },
      {
        $unwind: "$userData",
      },
      {
        $lookup: {
          from: "bookmarks",
          let: { postId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$post", "$$postId"] },
                    { $eq: ["$user", new mongoose.Types.ObjectId(id)] },
                  ],
                },
              },
            },
          ],
          as: "bookmarkByUser",
        },
      },
      {
        $lookup: {
          from: "likes",
          let: { postId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$post", "$$postId"] },
                    { $eq: ["$user", new mongoose.Types.ObjectId(id)] },
                  ],
                },
              },
            },
          ],
          as: "likeByUser",
        },
      },
      {
        $lookup: {
          from: "comments",
          let: { postId: "$_id" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $and: [
                    { $eq: ["$post", "$$postId"] },
                    { $eq: ["$user", new mongoose.Types.ObjectId(id)] },
                  ],
                },
              },
            },
          ],
          as: "CommentByUser",
        },
      },
      {
        $addFields: {
          isBookMark: { $gt: [{ $size: "$bookmarkByUser" }, 0] },
          isLike: { $gt: [{ $size: "$likeByUser" }, 0] },
        },
      },
    ];

    if (searchQuery) {
      pipeline.push({
        $match: {
          $or: [
            {
              title: { $regex: searchQuery, $options: "i" },
              description: { $regex: searchQuery, $options: "i" },
            },
          ],
        },
      });
    }

    const allPost = await postModel.aggregate(pipeline);
    res.status(200).json({
      message: "All Post",
      data: allPost,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

const getPostBySlug = async (req, res) => {
  try {
    const { id } = req.user;
    const { slug } = req.params;
    console.log(id);

    // author: new mongoose.Types.ObjectId(id),
    const allPostBySlug = await postModel.aggregate([
      {
        $match: {
          slug: slug.toLowerCase(),
          // author: new mongoose.Types.ObjectId(id),
          isActive: true,
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "author",
          foreignField: "_id",
          as: "userData",
        },
      },
      {
        $unwind: "$userData",
      },
      {
        $lookup: {
          from: "tags",
          localField: "tags",
          foreignField: "_id",
          as: "tags",
        },
      },

      // {
      //   $lookup: {
      //     from: "likes",
      //     let: { postId: "$_id" },
      //     pipeline: [
      //       {
      //         $match: {
      //           $expr: {
      //             $and: [
      //               { $eq: ["$post", "$$postId"] },
      //               { $eq: ["$user", new mongoose.Types.ObjectId(id)] },
      //             ],
      //           },
      //         },
      //       },
      //     ],
      //     as: "likepost",
      //   },
      // },
    ]);

    res.status(200).json({
      message: "all Post",
      data: allPostBySlug,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

module.exports = {
  newPost,
  getPost,
  allPostForGuest,
  allPostForRegisterUser,
  getPostBySlug,
};
