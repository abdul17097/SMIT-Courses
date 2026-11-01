import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const connc = await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected: " + connc.connection.host);
  } catch (error) {
    console.log(error.message);
  }
};
