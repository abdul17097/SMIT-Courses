// Object
const student = {
  firstName: "muhib",
  "last name": "afridi",
  marks: 85,
  class: 10,
  pass: true,
};

// console.log(student);

student.gender = "male";
student.firstName = "something";

// console.log(student);
// console.log(student.firstName);
// console.log(student["last name"]);
// console.log(student["last name"]);

// const studentCopy = student;
// console.log(studentCopy);
// console.log(studentCopy.firstName);

const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    category: "Electronics",
    price: 25.99,
    currency: "USD",
    inStock: true,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Notebook",
    category: "Stationery",
    price: 3.49,
    currency: "USD",
    inStock: true,
    rating: 4.2,
  },
  {
    id: 3,
    name: "Water Bottle",
    category: "Accessories",
    price: 12.99,
    currency: "USD",
    inStock: false,
    rating: 4.7,
  },
  {
    id: 4,
    name: "Bluetooth Headphones",
    category: "Electronics",
    price: 59.99,
    currency: "USD",
    inStock: true,
    rating: 4.6,
  },
];

console.log(products[0].name);
