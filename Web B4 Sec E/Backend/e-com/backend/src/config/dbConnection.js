import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    const connc = await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");
  } catch (error) {
    throw new Error(error.message);
  }
};
