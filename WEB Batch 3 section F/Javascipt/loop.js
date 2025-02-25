// 1. Basic Flow of Nested for Loop
// for (let i = 1; i <= 3; i++) {  // Outer loop
//     console.log(`Outer loop iteration i=${i}`);

//     for (let j = 1; j <= 2; j++) {  // Inner loop
//         console.log(`   Inner loop iteration j=${j}`);
//     }
// }
// Flow:
// The outer loop starts with i = 1.
// The inner loop runs completely (j = 1 to 2).
// The outer loop moves to i = 2, and the inner loop runs again.
// This process repeats until the outer loop condition is false.

// Output:
// Outer loop iteration i=1
//    Inner loop iteration j=1
//    Inner loop iteration j=2
// Outer loop iteration i=2
//    Inner loop iteration j=1
//    Inner loop iteration j=2
// Outer loop iteration i=3
//    Inner loop iteration j=1
//    Inner loop iteration j=2

// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// console.log(matrix[0][1]);

// for (let i = 0; i < matrix.length; i++) {
//   // Loop through rows
//   for (let j = 0; j < matrix[i].length; j++) {
//     // Loop through columns
//     console.log(`Element at [${i}][${j}] = ${matrix[i][j]}`);
//   }
// }

// Flags (Boolean Variables) in Loops
// A flag is a boolean variable(true / false) used to track whether a condition has been met.
// Example: Checking if a Number Exists in an Array

// for Loop with Array Length
// When looping through an array, we often use array.length in the condition.
// Example: Iterating Over an Array

// "Loopus Interruptus" (Breaking Out of Loops)
// This term refers to stopping a loop before it naturally ends, typically using break.

// Example: Breaking Loop When a Condition is Met

// Skipping Iterations with continue
// The continue statement skips the current iteration and moves to the next.

// Example: Skipping Even Numbers

// var userInput = "mardan";
// var cities = ["peshawar", "mardan", "charsada", "malakand"];
// // var isCitieExist = "no";

// // for (var i = 0; i < cities.length; i++) {
// //   if (userInput === cities[i]) {
// //     isCitieExist = "yes";
// //     console.log("you are exist in  " + cities[i] + " city.");
// //   } else {
// //     isCitieExist = "no"
// //   }
// // }
// // if (isCitieExist === "no") {
// //   alert("City not found.");
// // }

// // for (var i = 0; i < cities.length; i++) {
// //   if (cities[i] === "charsada") {
// //     console.log(cities[i]);
// //     break;
// //   } else {
// //     console.log(cities[i]);
// //   }
// // }
// // var digit = "mardan";
// // for (var i = 0; i < cities.length; i++) {
// //   if (digit == cities[i]) {
// //     continue;
// //   }
// //   console.log(cities[i]);
// // }

// var twoDArray = [
//   [1, 2, 3],
//   [4, 5, 6, 45, 67],
//   [7, 8, 9],
// ];

// for (var i = 1; i < twoDArray.length; i++) {
//   // twoDArray[0] first
//   // twoDArray[1] second
//   // twoDArray[2] third
//   // Loop through columns of the current row
//   for (var j = 0; j < twoDArray[i].length; j++) {
//     // Loop through elements of the current column
//     // twoDArray[i][0] = 1st element of the first row
//     // twoDArray[i][1] = 2nd element of the first row
//     // twoDArray[i][2] = 3rd element of the first row
//     //...
//     // twoDArray[i][j] = jth element of the ith row
//     //
//     console.log(twoDArray[i][j]);
//   }
// }

//  twoDArray[0][0] = 1
//  twoDArray[0][1] = 2
// twoDArray[0][2] = 3

//  twoDArray[1][0] = 4
//  twoDArray[1][1] = 5
// twoDArray[1][2] = 6
// twoDArray[1][3] = 45
// twoDArray[1][4] = 67

//  twoDArray[2][0] = 7
//  twoDArray[2][1] = 8
//  twoDArray[2][2] = 9

// console.log(twoDArray[0]);
// console.log(twoDArray[1][0]);
// console.log(twoDArray[1][1]);
// console.log(twoDArray[1][2]);
// console.log(twoDArray[2]);

var message = "How ";

// var result = message.toLocaleLowerCase();
var result = message.toLocaleUpperCase();

console.log(result);

// console.log(message.length);
// console.log(message.slice(0, 2));
var firt_name = "hello ";
var last_name = "world";

var full_name = firt_name.concat(last_name);
// console.log(full_name);

console.log(full_name.includes("z"));
