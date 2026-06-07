// every
const numbers = [1, 3, 5, 6, 7, 8, 4];

const output = numbers.every((item, index) => {
  return item < 9;
});

// console.log(output);

// some
// const numbers = [1, 3, 5, 6, 7, 8, 4];

const output_1 = numbers.some((item, index) => {
  return item > 3;
});

// console.log(output_1);

// include
const output_2 = numbers.includes(8);
// console.log(output_2);

// join
const alphabets = ["a", "b", "d", "u", "l"];
const output_3 = alphabets.join("");
const output_4 = output_3.split("");
// console.log(output_3);
// console.log(output_4);

// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
// }

// console.log(sum);

// reduce
const numbers_1 = [1, 3, 5, 6, 7, 8, 4];

const sum = numbers_1.reduce((acc, value) => {
  return acc + value;
}, 0);
// console.log(sum);

// acc = 0
// 1
// 4
// 9

const cartData = [
  {
    id: 1,
    title: "Wireless Mouse",
    description: "Ergonomic wireless mouse with USB receiver",
    quantity: 2,
    price: 25.99,
  },
  {
    id: 2,
    title: "Mechanical Keyboard",
    description: "RGB backlit mechanical gaming keyboard",
    quantity: 10,
    price: 79.99,
  },
  {
    id: 2,
    title: "Keyboard",
    description: "RGB backlit mechanical gaming keyboard",
    quantity: 10,
    price: 79.99,
  },
  {
    id: 2,
    title: "Mechanical Keyboard",
    description: "RGB backlit mechanical gaming keyboard",
    quantity: 10,
    price: 79.99,
  },
  {
    id: 3,
    title: "Laptop Stand",
    description: "Adjustable aluminum laptop stand",
    quantity: 1,
    price: 34.5,
  },
];

const total = cartData.reduce((acco, product) => {
  return acco + product.price * product.quantity;
}, 0);

// console.log(total);

// find
const findProductById = cartData.find((item) => item.id === 2);
// console.log(findProductById);

// findIndex
const findProductIndex = cartData.findIndex(
  (element) => element.title === "Laptop Stand",
);

// console.log(findProductIndex);

// indexOf
const isExist = numbers.indexOf(11);
// console.log(isExist);

const newArray = new Array(5);
const filledArray = newArray.fill(1);
console.log(newArray);
