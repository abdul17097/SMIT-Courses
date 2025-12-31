// Default Paremters

// function addition(a = 4, b = 6) {
//   //   console.log(a + b);
//   return a + b;
// }

// console.log(addition(10, 12));

// Imediate Invoke Fuction

// (function () {
//   console.log("kuch bi");
// })();

// Callback Function
// function callMe() {
//   return "I am callback function");
// }

// function greet(name, callMe) {
//   console.log("Hello " + name);
//   callMe();
// }

// greet("Ankit", callMe);

// function addition() {
//   return 1 + 2;
// }

// function finalOutPut(value, add) {
//   console.log(value * add());
// }

// finalOutPut(5, addition);

function addition(a, b) {
  return a + b;
}

function finalOutPut(value, add) {
  console.log(value * add(10, 12));
}

finalOutPut(5, addition);
