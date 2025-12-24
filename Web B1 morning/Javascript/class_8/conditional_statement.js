// Conditional Statement
// if
// if...else
// if...else if...else
// switch
// Ternary Operator

// if (condition){
// body
// }else{
// body
// }

let age = 15;
// if (age >= 18) {
//   console.log("You can apply for a license.");
// } else {
//   console.log("You are too young to apply for a license.");
// }

// else if statement syntax
// if (condition1) {
//   body1
// } else if (condition2) {
//   body2
// } else {
//   body3
// }

// if (age >= 18) console.log("You can apply for a license.");
// else console.log("You are too young to apply for a license.");

// let marks = 15;

// if (marks >= 90) {
//   console.log("Grade A");
// } else if (marks >= 75) {
//   console.log("Grade B");
// } else if (marks >= 60) {
//   console.log("Grade C");
// } else {
//   console.log("Grade D");
// }

// now we use if else, else if with logical operators
// let number = -8;

// if (number > 0 && number % 2 === 0) {
//   console.log("The number is positive and even.");
// } else if (number > 0 && number % 2 !== 0) {
//   console.log("The number is positive and odd.");
// } else {
//   console.log("The number is not positive.");
// }

// Ternary Operator
// condition ? expression1 : expression2
let khan = true;
// let discount = isMember ? 0.1 : 0.05;
// let discount = isMember == true ? 0.1 : 0.05;
let discount = khan == true ? "success" : "failure";
console.log(discount);

// if (isMember) {
//   discount = 0.1;
// } else {
//   discount = 0.05;
// }

// Switch Statement

// switch (expression) {
//   case value1:
//     // body1
//     break;
//   case value2:
//     // body2
//     break;
//   ...
//   default:
//     // bodyN
// }

// let day = 4;
let dayName;
switch (5) {
  case 5:
    dayName = "Friday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  default:
    dayName = "Invalid day";
}
console.log(dayName);
