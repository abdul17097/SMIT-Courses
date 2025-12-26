// Loops
// for loop
// while loop
// for of loop
// for in loop
// do while loop

// for loop
// syntax
// for(initialization; condition; increment/decrement){
//     // code block to be executed
// }

// let i = 0;
// i < 5;
// i++;

// for (let i = 10; i > 5; i--) {
//   console.log("hello world: " + i);
// }

// let i = 0;
// i = 0; // "helo world"
// i = 1; // "helo world"
// i = 2; // "helo world"
// i = 3; // "helo world"
// i = 4; // "helo world"
// i = 5; // loop ends

// for (let j = 1; j < 9; j++) {
//   if (j % 2 === 0) {
//     console.log("Even: " + j);
//   } else {
//     console.log("Odd: " + j);
//   }
// }

// while loop
// syntax
// while(condition){
//     // code block to be executed
// }
// def: A while loop executes a block of code as long as a specified condition is true.

// while (true) {
//   console.log("infinite loop");
// }

// let k = 0;
// while (k < 5) {
//   k++;
//   console.log("kuch bi: " + k);
// }

// do while loop
// syntax
// do{
//     // code block to be executed
// }while(condition);
// def: A do...while loop is similar to a while loop, except that the code block is executed at least once before the condition is tested.

let m = 0;

do {
  console.log("do while loop: " + m);
  m++;
} while (m > 5);
