// Type annotation
let a: string = "10";

a = "test";
let check: boolean = true;
console.log(check);

// Type Inferences
let isTrue = 123;
// isTrue = "";
console.log(isTrue);

console.log(a);

let b: any = "343";
b = 123;
console.log(b);

let userNames: (string | number | boolean)[] = [];

userNames.push("skldfj");
userNames.push(123);
userNames.push(true);

console.log(userNames);

// let userDetails = {
//     firstName: "werw",
//     lastName: "asdf",
//     eligiable: true,
//     age: 12
// }

// userDetails.check = false;
// userDetails.firstName ="asdfkjl"
// console.log(userDetails.firstName);

let userDetails: {
  firstName: string;
  lastName: string;
  eligiable: boolean;
} = {
  firstName: "werw",
  lastName: "asdf",
  eligiable: true,
  age: 12,
};

export {};
