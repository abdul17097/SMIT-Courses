import mongoose from "mongoose";

export const connectiondb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected " + conn.connection.host);
  } catch (error) {
    console.log(error.message);
  }
};
