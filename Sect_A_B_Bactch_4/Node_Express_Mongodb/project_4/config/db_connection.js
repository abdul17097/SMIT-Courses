import mongoose from "mongoose";

export const db_connection = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONODB_URI);
    console.log("DB Connected", conn.connection.host);
  } catch (error) {
    console.log(error.message);
  }
};
