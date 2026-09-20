import express from "express";
import { db_connection } from "./config/db_connection.js";
import { Student } from "./models/student.js";
import { config } from "dotenv";

config();
const app = express();
db_connection();

app.get("/", async (req, res) => {
  // const students = await Student.find({ age: { $nin: [20, 30, 24] } });
  // const students = await Student.find().limit(3).skip(6);
  // const students = await Student.find().sort({ age: -1 });
  // const students = await Student.find({
  //   $and: [{ age: { $eq: 20 } }, { marks: { $gte: 91 } }],
  // });
  // const students = await Student.find({
  //   $or: [{ age: { $eq: 20 } }, { marks: { $gt: 91 } }],
  // });
  // const students = await Student.find({
  //   age: { $not: { $eq: 20 } },
  // });
  const students = await Student.find({
    $nor: [{ age: { $eq: 20 } }, { marks: { $gt: 91 } }],
  });
  const numOfstudents = await Student.find();

  res.json({
    message: "Student register successfully",
    students: [...students, { totalStudent: numOfstudents.length }],
  });
});

// 3/15 =

app.listen(5000, () => {
  console.log("http://localhost:5000");
});
