// // function add() {
// //   let num = 10;
// //   if (num > 5) {
// //     return "Number is greater than 5";
// //   }
// // }

// // add();

// // const subtract = () => {
// //   return 10 - 5;
// // };

// // subtract();

// // create function with this keyword
// const person = {
//   name: "Alice",
//   age: 25,
//   greet: () => {
//     console.log(
//       `Hello, my name is ${this.name} and I am ${this.age} years old.`
//     );
//   },
// };

// person.detail = 10;
// console.log(person);
// console.log(person["name"]);

// const userDetails = new Map();
// userDetails.set("name", "Bob");
// userDetails.set("age", 30);
// console.log(userDetails.entries());

// let count = 0;

// for (let i = 0; i < 5; i++) {
//   count += i;
// }
// console.log(count); // Output: 10

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((count, currentValue) => {
//   return count + currentValue;
// });

// console.log(1);
// console.log(2);
// setTimeout(() => {
//   console.log("Timeout executed after 1 second");
// }, 0);
// console.log(3);
// console.log(4);

// higher order function
function higherOrderFunction(callback) {
  callback();
  console.log("Executing higher order function");
}

const callbackFunction = () => {
  console.log("Callback function executed");
};

higherOrderFunction(callbackFunction);
