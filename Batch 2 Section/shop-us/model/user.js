import mongoose from "mongoose";

// Define the Mongoose schema for the User model.
const userSchema = new mongoose.Schema(
  {
    // The name of the user, a string that is required.
    name: {
      type: String,
      required: true,
    },
    // The user's email, a string that is required and must be unique.
    email: {
      type: String,
      required: true,
      unique: true, // Ensures no two users can have the same email.
      lowercase: true, // Stores the email in lowercase to prevent duplicates with different cases.
      trim: true, // Removes whitespace from the beginning and end of the string.
    },
    // The user's password, a string that is required.
    // Note: In a real-world application, this should be hashed.
    password: {
      type: String,
      required: true,
    },
    // The user's age, a number. It's a number and must be a positive number.
    age: {
      type: Number,
      required: true,
      min: 0,
    },
    // The city where the user lives.
    city: {
      type: String,
      trim: true,
    },
    // The country where the user lives.
    country: {
      type: String,
      trim: true,
    },
    // A boolean to indicate if the user account is active.
    isActive: {
      type: Boolean,
      default: false,
    },
    // An array of strings to store the user's hobbies.
    hobbies: {
      type: [String],
    },
  },
  {
    // Adds `createdAt` and `updatedAt` timestamps automatically.
    timestamps: true,
  }
);

// Export the User model based on the schema.
export const User = mongoose.model("User", userSchema);
