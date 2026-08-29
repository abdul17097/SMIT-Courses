/* 
conditional statements:
if
else
else if

Ternary Operator:
condition ? "Fullfilled" : "Failed"

Switch Statement:
switch(conditon){
    case 1:
        log
    case 2: 
        log
    default:
        message
}


*/

// let age = Number(prompt("Enter your age: ", 18));
// let gender = prompt("Enter your age: ", "male");

/*
syntax:
if(condition){
    console.log(message);
    
}
    */

// if (age >= 18) {
//   document.write("You are Aligiable");
// } else {
//   document.write("You are Not Aligiable");
// }

// Alternative of If Else
// let result = age >= 18 ? "You are Aligiable" : "You are Not Aligiable";

// if (age >= 18 && gender == "male") {
//   document.write("Please visit XYZ");
// } else if (age >= 18 && gender == "female") {
//   document.write("Please visit xyx");
// } else {
//   document.write("Please Enter Correct Data");
// }

let role = "user";
let eamil = "xyz@gmail.com";
let password = 123;

if (eamil === "xyz@gmail.com" && password == "123") {
  if (role == "admin") {
    document.write("You can post!");
  } else {
    document.write("you can't post");
  }
} else {
  document.write("Invalid Credientails");
}
