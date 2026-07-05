import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please provide a username"],
    },
    email: {
      type: String,
      required: [true, "Please provide an email"],
      unique: true,
    },
    authProvider: {
      type: String,
      enum: ["LOCAL", "GOOGLE"],
      required: [true, "Please provide an auth provider"],
      default: "LOCAL",
    },
    password: {
      type: String,
      required: function () {
        return this.authProvider === "LOCAL";
      },
    },
    googleId: {
      type: String,
      required: function () {
        return this.authProvider === "GOOGLE";
      },
    },
    avatar: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["SELLER", "BUYER", "ADMIN"],
      default: "BUYER",
    },
    shopName: {
      type: String,
      required: function () {
        return this.role === "SELLER";
      },
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

export const User = mongoose.model("users", userSchema);
