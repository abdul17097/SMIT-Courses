// let name = "John";

// let message = "your name is " + name;
// let message = `your name is ${name}`;

// console.log(message);

// const person = [1, 2, 3, 4, 5];
// const [one, two, ...rest] = person;

// console.log(person, name, age);
// console.log(rest);

// backend response
// const userDetails = {
//   name: "John",
//   age: 30,
//   address: {
//     city: "New York",
//     country: "USA",
//   },
//   password: "123123@#$3$%#$%34%#$%#$%#$%#$%#$",
// };

// const { password, ...rest } = userDetails;

// console.log(rest);

// function add(a = 3, b = 6) {
//   return a + b;
// }

// console.log(add(5, 10));

// function sum(a, b, c) {
//   return a + b + c;
// }
// const numbers = [1, 2, 3];
// // console.log(sum(...numbers)); // Outputs: 6
// console.log(sum(...numbers)); // Outputs: [1, 2, 3]

// const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

console.log([...array1, ...array2]); // Outputs: [1, 2, 3, 4, 5, 6]
