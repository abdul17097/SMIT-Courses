import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    if (conn) {
      console.log("Database Connected");
    }
  } catch (error) {
    console.log(error.message);
  }
};
