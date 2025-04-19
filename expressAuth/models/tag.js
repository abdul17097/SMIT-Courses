const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const Tag = mongoose.model("Tag", tagSchema);
module.exports = {
  Tag,
};
