const mongoose = require("mongoose");

const mongodbConn = async () => {
  try {
    //   127.0.0.0.1
    // const conn = await mongoose.connect("mongodb://localhost:27017/eCom");
    mongoose
      .connect(process.env.MONGO_URL)
      .then(() => {
        console.log("Connection Successfully");
      })
      .catch((error) => console.log(error.message));

    // console.log(conn.connection.host);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = mongodbConn;
