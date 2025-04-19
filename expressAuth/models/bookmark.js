const mongoose = require("mongoose");

const bookMarkSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "posts",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
});

const BookMark = mongoose.model("Bookmark", bookMarkSchema);
module.exports = {
  BookMark,
};
