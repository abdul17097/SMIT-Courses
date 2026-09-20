import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
  fees: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
  attendance: {
    type: Number,
    required: true,
  },
});

export const Student = mongoose.model("students", studentSchema);
