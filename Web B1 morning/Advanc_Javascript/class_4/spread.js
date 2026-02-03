// // spread operator

// let array1 = [2, 4, 6, 7];
// array1.push(0);

// let array2 = [2, 6, 8, 2];

// let array3 = [...array1, ...array2];
// // console.log(array3);

// let array1Copy = [...array1];

// array1Copy.push(12);
// console.log(array1Copy);
// console.log(array1);

// let class_1 = ["hamad", "ahmad", "yaseen", "farhan"];
// let class_2 = ["shahid", "mohsin", "rizwan", "jawad"];
// console.log(class_1);
// console.log(...class_1);

// let class_1_2 = [...class_1, ...class_2, "hello"];
// console.log(class_1_2);
// console.log(...class_1_2);

const student_1 = {
  gender: "male",
  fname: "adsf",
  address: "asdf",
};
const student_2 = {
  id: 2,
  name: "kamran",
  age: 25,
};

const allStudent = {
  ...student_1,
  ...student_2,
};

allStudent.pass = "aslkdjf";

// console.log(allStudent);

// Array Destructuring with Spread Operator
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [first, second, ...rest] = numbers;

console.log(rest);
