let student_names = ["Alice", "Bob", "Charlie", "David"];
let student_marks = [23, 54, 23, 45];

// for (let item = 0; item < student_names.length; item++) {
//   console.log(student_names[item]);
// }
// map method
// let newArray = student_names.map((element, index) => {
//   return element;
// });

// console.log(newArray);

let newArray = student_marks.map((element) => {
  return element + 34;
});

// console.log(newArray);
// console.log(student_marks);

// forEach method
let updated = student_marks.forEach((element, index) => {
  console.log(element);
  //   return element;
});
