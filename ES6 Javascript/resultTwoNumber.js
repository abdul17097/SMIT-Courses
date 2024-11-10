const addTwoNumbers = require("./addTwoNumber.js");

const students = new Map([
  ["John", 85],
  ["Jane", 90],
  ["Alice", 80],
]);

students.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

// console.log(students.get("John"));
// students.set("name", "John");
// console.log(students.size);
