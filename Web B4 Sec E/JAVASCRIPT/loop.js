// Definition of Loop:
// A loop is a programming construct that allows you to repeat a block of code multiple times until a certain condition is met. Loops are useful for automating repetitive tasks and iterating over data structures like arrays or objects.

// // Different Types of Loops in JavaScript:
// 1. For Loop:
// The for loop is used when the number of iterations is known beforehand. It consists of three parts: initialization, condition, and increment/decrement.
// Example:
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
// This loop will print numbers from 0 to 4.

// 2. While Loop:
// The while loop continues to execute a block of code as long as a specified condition is true.
// Example:
// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }
// This loop will also print numbers from 0 to 4.

// 3. Do...While Loop:
// The do...while loop is similar to the while loop, but it guarantees that the block of code will be executed at least once before checking the condition.
// Example:
// let i = 0;
// do {
//     console.log(i);
//     i++;
// } while (i < 5);
// This loop will print numbers from 0 to 4 as well.

// 4. For...In Loop:
// The for...in loop is used to iterate over the properties of an object.
// Example:
// const person = {name: "John", age: 30, city: "New York"};
// for (let key in person) {
//     console.log(key + ": " + person[key]);
// }
// This loop will print the keys and values of the person object.

// 5. For...Of Loop:
// The for...of loop is used to iterate over iterable objects like arrays, strings, maps, and sets.
// Example:
// const arr = [10, 20, 30];
// for (let value of arr) {
//     console.log(value);
// }
// This loop will print the values 10, 20, and 30.

// // How Loops Execute:
// When a loop is executed, the following steps occur:
// 1. Initialization: The loop initializes a counter variable (if applicable).
// 2. Condition Check: Before each iteration, the loop checks if the specified condition is true.
// 3. Code Execution: If the condition is true, the block of code inside the loop is executed.
// 4. Increment/Decrement: After executing the code, the loop updates the counter variable (if applicable).
// 5. Repeat: The loop goes back to the condition check and repeats the process until the condition is false.
// 6. Exit: Once the condition is false, the loop exits, and the program continues with the next line of code after the loop.
// // Example of a For Loop Execution:
// for (let i = 0; i < 3; i++) {
//     console.log("Iteration: " + i);
// }
// // Execution Steps:
// 1. i is initialized to 0.
// 2. Condition (i < 3) is checked: true.
// 3. "Iteration: 0" is printed.
// 4. i is incremented to 1.
// 5. Condition (i < 3) is checked: true.
// 6. "Iteration: 1" is printed.
// 7. i is incremented to 2.
// 8. Condition (i < 3) is checked: true.
// 9. "Iteration: 2" is printed.
// 10. i is incremented to 3.
// 11. Condition (i < 3) is checked: false.
// 12. Loop exits.
// This is how loops work in JavaScript, and understanding them will help you write efficient and effective code!

// const posts = [
//   { title: "Post 1", body: "This is post 1" },
//   { title: "Post 2", body: "This is post 2" },
//   { title: "Post 3", body: "This is post 3" },
// ];

// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// for loop
// for (let a = 1; a < 11; a++) {
//   console.log("hello " + a);
// }

// let a = 0;
// a = 1;
// a = 2;
// a = 3;
// a = 4;
// a = 5;
// and so on

// while loop
// syntax
// while (condition) {

// }

// let i = 1;

// while (i < 5) {
//   console.log("Hello While Loop");
//   i++;
// }

// do while loop

// write an example of do while loop
// syntax
// do {
//     // code block
// } while (condition);

// let j = 6;

// do {
//   console.log("Hello Do While Loop");
//   j++;
// } while (j < 5);

// for in loop
// syntax
// for (key in object) {
//     // code block
// }
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York",
// };

// console.log(person.name);

// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }

// console.log(name + ":" + perseon[name]);

// for of loop
const colors = ["red", "green", "blue"];
const numbers = [1, 2, 3, 4, 5];

let sum = 0;
// sum = 1
// sum = 3
// sum = 5
// sum = 9
// sum = 14

for (let number of numbers) {
  // sum = 0 + 1
  // sum = 1 + 2
  // sum = 3 + 3
  // sum = 6 + 4
  // sum = 10 + 5
  sum = sum + number;
}

console.log(sum);

// for (let color of colors) {
//   console.log("color: " + color);
// }

let name = "John";
for (let char of name) {
  console.log(char);
}
