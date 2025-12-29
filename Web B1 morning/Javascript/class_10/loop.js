// // loops in JavaScript
// // for of : use for array
// // for (initilization of array){
// // body
// // }
// // for in : use for object
// // for (initilization in object){
// // body
// // }

// let arr = ["apple", "banana", "cherry"];
// let object1 = { a: 1, b: 2, c: 3 };

// const students = [
//   {
//     id: 1,
//     name: "Alice Johnson",
//     age: 16,
//     grade: "10th",
//     subjects: ["Math", "Science", "English"],
//     email: "alice.johnson@email.com",
//     phone: "123-456-7890",
//   },
//   {
//     id: 2,
//     name: "Bob Smith",
//     age: 15,
//     grade: "9th",
//     subjects: ["History", "Math", "Art"],
//     email: "bob.smith@email.com",
//     phone: "987-654-3210",
//   },
//   {
//     id: 3,
//     name: "Charlie Brown",
//     age: 17,
//     grade: "12th",
//     subjects: ["Physics", "Chemistry", "English"],
//     email: "charlie.brown@email.com",
//     phone: "555-123-4567",
//   },
//   {
//     id: 4,
//     name: "Dana Lee",
//     age: 16,
//     grade: "11th",
//     subjects: ["Biology", "Math", "Social Studies"],
//     email: "dana.lee@email.com",
//     phone: "444-555-6666",
//   },
//   {
//     id: 5,
//     name: "Ethan Clark",
//     age: 14,
//     grade: "8th",
//     subjects: ["Geography", "English", "PE"],
//     email: "ethan.clark@email.com",
//     phone: "666-777-8888",
//   },
// ];

// let value = "kuch aur";

// // for (item of arr) {
// //   if (value === item) {
// //     console.log(item);
// //   } else {
// //     console.log("Not Exist");
// //   }
// // }

// // apple === value : false
// // banana === value : false
// // cherry === value : false

// // for (studentDetails of students) {
// //   console.log(studentDetails.name);
// //   console.log(studentDetails.age);
// // }

// let studentDetails = {
//   id: 1,
//   name: "Alice Johnson",
//   age: 16,
//   grade: "10th",
//   subjects: ["Math", "Science", "English"],
//   email: "alice.johnson@email.com",
//   phone: "123-456-7890",
// };

// let username = "Alice Johnson";

// for (item in studentDetails) {
//   if (item === "subjects") {
//     for (element of studentDetails[item]) {
//       console.log(element);
//     }
//     // console.log(studentDetails[item]);
//   }
// }

// let studentMarks = [23, 45, 7, 23, 56];

// for (score of studentMarks) {
//   console.log(score);
// }

let object1 = { a: 1, b: 2, c: 3 };

for (key in object1) {
  console.log("key: " + key + " value: " + object1[key]);

  //   console.log(key);

  //   console.log(object1[key]);
}

// for (let i = 1; i < 8; i++) {
//   if (i === 4) {
//     console.log(i);
//     break;
//   }
// }
for (let i = 1; i < 8; i++) {
  if (i === 2) {
    continue; // skip the value
  }
  console.log(i);
}
