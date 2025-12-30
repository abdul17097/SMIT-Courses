// Javascript Function
// Normal Function: suport 'this' keyword and can defined with function expression and without function expression
// sytax
// function fnName(){
// function body
// }
// function call
// fnName()

// function addition() {
//   console.log(1 + 3);
// }

// addition();
// addition();
// addition();
// addition();
// addition();

function DisplayMessage() {
  console.log("Welcom to");
  console.log(1 + 3);
}

// section 1
// DisplayMessage();

// section 2
// DisplayMessage();

// for (let i = 0; i < 20; i++) {
//   DisplayMessage();
// }

// Function with parameters and arguments
// def:
// Parameters :A function can take inputs, these inputs are called parameters
// Arguments : when we call a function we pass values to these parameters, these values are called arguments

// function DisplayName(kuchbi) {
//   console.log(kuchbi);
// }
function DisplayName() {
  console.log("kuchbi");
}

// DisplayName("Kamal");
// DisplayName("Wahab");
// DisplayName();

// function addition(value1, value2) {
//   console.log(value1, value2);

//   let result = value1 + value2;

//   alert("Your addition result: " + result);
// }

// addition(
//   Number(prompt("Enter first num: ")),
//   Number(prompt("Enter second num: "))
// );

// addition(23, 45);
// addition(3, 5);
// addition(243, 645);
// addition(231, 425);

// Function Expression

// let addition = function () {
//   return 1 + 2;
// };

// console.log(addition());

// Arrow Function: Does't support 'this' keywork and arrow only defined with function exprsssions
// syntax:
// let showName =  (par1, par2) =>{
// }

// showName(argu1, argu2)

let showName = () => {
  console.log("hello world");
};

showName();

// Default Parameters
