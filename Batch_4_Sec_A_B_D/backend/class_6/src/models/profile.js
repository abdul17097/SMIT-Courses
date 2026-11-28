import mongoose from "mongoose";

const profileSchema = new mongoose.Schema({
  bio: {
    type: String,
  },
  phone: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "users",
    unique: true,
  },
});

export const Profile = mongoose.model("profiles", profileSchema);
