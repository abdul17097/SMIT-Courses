// let a = 10;
// let b = 20;
// let result_1 = a + b;
// console.log("result_1:", result_1);

// let c = 30;
// let d = 15;
// let result_2 = c + d;
// console.log("result_2:", result_2);

// function add(a, b) {
//   console.log(a + b);
// }

// add(10, 20);
// add(14, 20);
// add(11, 40);
// add(1000, 20);

function sum(array) {
  let total = 0;
  for (let num of array) {
    total = total + num;
  }
  console.log(total);
}

// sum([12, 25, 63, 74, 5]);
// sum([12, 25, 33, 45, 63, 74, 5]);
// sum([34, 34, 567, 78, 34]);

// console.log(a);
// var a;

// console.log(a);
// let a;

// let maxNum;
// function findMax(array) {
//   maxNum = array[0];
//   for (let item of array) {
//     if (maxNum < array[item]) {
//       maxNum = array[item];
//     }
//   }
//   console.log(maxNum);
// }

// findMax([4, 6, 3, 6]);

// multiple two nums

// function multiplication(num1, num2) {
//   return num1 * num2;
// }

// function call
// let result = multiplication(2, 5);
// console.log(result);
// console.log(multiplication(3, 5));

// Function Expression
let printName = function (name) {
  console.log(name);
};

// printName("Abdul");
// printName("Masood");
// printName("Arif Jawan");

printFullname("Arif", "Jawan");

// Arrow Function
var printFullname = (firtName, lastName) => {
  let fullName = firtName + " " + lastName;
  console.log(fullName);
};

// mmediately Invoked Function Expression (IIFE)

(function () {
  console.log("mmediately Invoked Function Expression (IIFE)");
})();

// Default Parmater
welcome("Welcome to SMIT");
function welcome(message = "Hello world") {
  console.log(message);
}
