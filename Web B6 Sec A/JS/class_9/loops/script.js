/*
for (initialize; condition; update){
    body
}

*/

// for (let i = 1; i <= 10; i++) {
//   //   if (i % 2 == 0) console.log("Yosha " + i);
//   if (i % 2 != 0) console.log("Yosha " + i);
// }

// Experiment
// how many even number in range of 15 to 45
// how many odd number in range of 15 to 45
// find odd number in range of 15 to 45
// find even number in range of 15 to 45

let evenNums = [];

for (let i = 15; i < 45; i++) {
  if (i % 2 == 0) {
    evenNums.push(i);
    // console.log(i);
  }
}

// console.log(evenNums);
// console.log(evenNums.length);

// const fruits = ["banana", "apple", "mango"];
// const input_fruit = prompt("Enter Fruit Name: ");

// for (const item of fruits) {
//   if (input_fruit === item) {
//     console.log("Yes Avaiable: " + item);
//   }
// }

// let fruit_1 = "banna";
// let fruit_2 = "apple";
// let fruit_3 = "mango";

const cartProducts = [
  { id: 1, name: "Wireless Headphones", price: 59.99 },
  { id: 2, name: "Mechanical Keyboard", price: 89.99 },
  { id: 3, name: "Gaming Mouse", price: 39.99 },
  { id: 4, name: "USB-C Cable", price: 12.99 },
  { id: 5, name: "Laptop Stand", price: 34.99 },
];

let totalProductPrice = 0;

for (let product of cartProducts) {
  totalProductPrice = totalProductPrice + product.price;
}

console.log(totalProductPrice);

// totalProductPrice = 0 + 59;
// totalProductPrice = 59 + 89
// totalProductPrice = 148 + 39
// totalProductPrice = 187 + 12
// totalProductPrice = 199 + 34
// totalProductPrice = 233

const studentDetails = {
  name: "Test",
  roll_no: 234,
  age: 20,
  section: "B",
};

for (let item in studentDetails) {
  console.log(item + ":" + studentDetails[item]);
}

// studentDetails.name
// studentDetails.roll_no
// studentDetails.age
// studentDetails.section
