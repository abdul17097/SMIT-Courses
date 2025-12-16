// Data Types
// Primitive Data Types
// Number
// String
// Boolean
// BigInt
// null
// undefined
// Symbol

// Number
// let a = 10;
// let a = -10.4;
// console.log(a);
// console.log(typeof a);
// camel case
// let userName = "hello";
// Pascal case
// let UserName = "hello";
// snake case
// let user_uame = "hello";
// kebab case
// let user-uame = "hello";

// String
let userName = "hello";
// console.log(typeof userName);
// let question = 'Do you want to learn JavaScript? "Yes!"';
let question = 'Hello, what\'s your name? Is it "Mike"?';
// Templete Literal
let question2 = `your name is ${userName}`;
console.log(question2);

console.log(question);

// Boolean
// let lightMode = true; // false
// console.log(lightMode);
// console.log(typeof lightMode);

// BigInt
// let kuchbi = BigInt(1234567890123456789012345);
// console.log(kuchbi);
// console.log(typeof kuchbi);

// null
// null passed as intentionaly
// let userName = null;
// console.log(typeof userName);

// undefined
// let a;
// console.log(typeof a);

// Symbol
// use for uniquely identifier
const x = Symbol("userId");
const y = Symbol("userId");
console.log(x);
console.log(typeof y);

console.log(x == y);
