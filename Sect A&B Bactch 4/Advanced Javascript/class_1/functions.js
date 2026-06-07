// function parameters
// default parameters
// function test(a = 3) {
//   console.log("hello world!", a);
// }

// // arguments
// test();

// function addition(a = 9, b = 8) {
//   return a + b;
// }

// // addition() : 17
// console.log(addition());

// // function expression
// const output = () => {
//   return 1 + 3;
// };

// console.log(output());

// Anonymous Functions
// (function () {
//   console.log("helle world!");
// })();

// Higher Order Fuctions
const test = (a, fn) => {
  fn();
};

const fn = () => {
  console.log("fn function!");
};

test(2, fn);
