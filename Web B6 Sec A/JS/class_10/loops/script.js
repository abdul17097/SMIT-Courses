// let students = ["test1", "test2", "test9", "test4"];
// let inputStudentName = prompt("Enter Student NAme: ");

// for (let student of students) {
//   if (inputStudentName === student) {
//     // break;
//     continue;
//   }
//   console.log(student);
// }

// for (let a = 0; a < 10; a++) {
//   if (a % 2 == 0) {
//     continue;
//   }
//   console.log(a);
// }

let total = 0;
let marks = [78, 92, 65, 88, 55, 73];

for (let num of marks) {
  console.log(num);

  total = total + num;
}

console.log(total);
