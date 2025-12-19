// Logical Operator
// && : And Operator
// || : OR Operator
// ! : Not Operator

// let age = 13;

// let result = age >= 18 && age <= 24

// && Operator
// true true = true
// true false = false
// false true = false
// false false = false

// true true true = true
// true false true = false
// false true true = false
// false false false = false

// let age = prompt("Enter your age:");
let age = 15;
let gender = "false";
// let result = age >= 18 && age <= 24 && gender == "male";

// console.log(result);

// || Operator
// true false = true
// false true = true
// true true = true
// false false = false
let result = age >= 18 || age <= 24 || gender == "male";

// !(contition) Operator
console.log(!result);
