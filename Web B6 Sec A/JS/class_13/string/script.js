// String: Sequance of Character

// there are way to define string: '' , "" , ``

let fname = "Abdul";
let lname = "Musavir";
let full_name = `My name is ${fname} ${lname}`;

let detail_1 = 'I learn "Javascript"';
let detail_2 = "I learn 'Javascript'";
let detail_3 = `I learn "Javascript"`;

console.log(fname);
console.log(lname);
console.log(full_name);

// string length
console.log(fname.length);

console.log(fname[2]);

console.log(detail_1.slice(2, 7));
console.log(detail_1.slice(-3));
console.log(detail_1.substring(2, 7));
console.log(detail_1.substring(-3));

// trim: can remove extra spaces from start and end
// let username = prompt("Enter username").trim();
// let username = prompt("Enter username").trimStart();
// let username = prompt("Enter username").trimEnd();

// if (username === "Abdul") {
//   console.log("True");
// } else {
//   console.log("False");
// }

// include
let email = prompt("Enter you email");

if (email.includes("@")) {
  console.log("Correct Email");
} else {
  console.log("Incorrect Email");
}
