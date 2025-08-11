import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    // Unique identifier for the user (MongoDB automatically adds _id)
    username: {
      type: String,
      required: true,
      unique: true, // Ensures no two users have the same username
      trim: true, // Removes whitespace from both ends of a string
      minlength: 3, // Minimum length for the username
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensures no two users have the same email
      trim: true,
      lowercase: true, // Stores emails in lowercase
      match: [/.+@.+\..+/, "Please enter a valid email address"], // Basic email format validation
    },
    password: {
      type: String,
      required: true,
    },
    role: { type: String, enum: ["customer", "admin"], default: "customer" },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt timestamps automatically
  }
);

export const User = mongoose.model("users", userSchema);

// (function(){})()
