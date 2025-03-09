const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    min: 8,
    max: 16,
    required: true,
  },
});

const userModel = mongoose.model("users", registerSchema);
module.exports = {
  userModel,
};
