const users = [
  { id: 1, name: "Alice", age: 25, isActive: true, score: 88 },
  { id: 2, name: "Bob", age: 32, isActive: false, score: 72 },
  { id: 3, name: "Charlie", age: 28, isActive: true, score: 91 },
  { id: 4, name: "Diana", age: 22, isActive: true, score: 64 },
  { id: 5, name: "Ethan", age: 35, isActive: false, score: 79 },
  { id: 6, name: "Fiona", age: 27, isActive: true, score: 85 },
];

// filter
const studentsAge = [23, 10, 18, 20, 25, 30, 15];
let ageCondition = 18;

// let filterArray = studentsAge.filter((item) => {
//   return ageCondition >= item;
// });

// console.log(filterArray);

// let maximumAge = [];
// for (let i = 0; i < studentsAge.length; i++) {
//   if (studentsAge[i] >= ageCondition) {
//     maximumAge.push(studentsAge[i]);
//   }
// }

// console.log(maximumAge);

// let Ages = users.map((item) => {
//   return item.age;
// });
// let AgesId = users.map((item) => {
//   return item.id;
// });

// let AgesScore = users.map((item) => {
//   return item.score;
// });

// console.log(Ages);
// console.log(AgesId);
// console.log(AgesScore);

// let ages = users.filter((item) => {
//   return item.age <= 27;
// });

// console.log(ages);

// console.log(studentsAge);

// sort method
// let sortedArray = studentsAge.sort((i, j) => j - i);
// console.log(sortedArray);

// let studentsnames = ["John", "Alice", "Bob", "Charlie", "Diana"];
// console.log(sortedNames);

// every methods
// let output = users.every((item) => item.isActive == true);
// console.log(output);

// some
// let output = users.some((item) => item.isActive == true);
// console.log(output);

let marks = [12, 45, 67, 78, 34];

// let sum = 0; // acumolator
// for (let i = 0; i < marks.length; i++) {
//   sum += marks[i];
// }

// console.log(sum);

let sum = marks.reduce((acumolator, current) => {
  return acumolator + current;
});

// console.log(sum);

const cartItems = [
  {
    productId: 1,
    name: "Wireless Mouse",
    price: 25.99,
    quantity: 2,
    image: "mouse.jpg",
  },
  {
    productId: 2,
    name: "Keyboard",
    price: 45.5,
    quantity: 1,
    image: "keyboard.jpg",
  },
  {
    productId: 3,
    name: "USB-C Cable",
    price: 9.99,
    quantity: 3,
    image: "cable.jpg",
  },
];

let totalCartValue = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0,
);
// console.log(totalCartValue);

let findProduct =
  cartItems.find((item) => item.productId === 25) || "Product not found";
console.log(findProduct);

// findIndex
let findIndexProduct = cartItems.findIndex((item) => item.productId === 2);
console.log(findIndexProduct);

// fill()
let filledArray = new Array(5).fill("Hello");
console.log(filledArray);
