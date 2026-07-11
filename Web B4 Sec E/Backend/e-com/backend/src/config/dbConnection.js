import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    const connc = await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");
  } catch (error) {
    console.log("DB Connection Failed", error.message);
  }
};
