const express = require("express");
const userRoutes = require("./router/user");
const mongoose = require("mongoose");
const app = express();
const port = 8000;

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://abdul17097:abdul17097@cluster0.m77sc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log(`Monogodb connection ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

connectDb();

app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
