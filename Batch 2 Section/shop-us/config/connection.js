import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log("host:", conn.connections[0].host);
    console.log("Mongodb Connected");
  } catch (error) {
    console.log(error);
  }
};
