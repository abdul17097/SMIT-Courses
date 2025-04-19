const { Tag } = require("../models/tag");
const slugify = require("slugify");
const createTag = async (req, res) => {
  try {
    const { name } = req.body;
    const isExist = await Tag.findOne({
      name,
    });
    if (isExist) {
      return res.status(409).json({
        message: "This Tag is already Exist",
      });
    }
    const formatSlug = slugify(name, { lower: true });

    const newTag = await Tag.insertOne({
      name,
      slug: formatSlug,
      createdBy: req.user.id,
    });
    res.status(201).json({
      message: "Created",
      data: newTag,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createTag,
};
