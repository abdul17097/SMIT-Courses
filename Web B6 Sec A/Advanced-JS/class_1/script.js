// Destructuring
// Array Destrucuring

let colors = ["red", "green", "blue", "red", "green", "blue"];

let [first, second, third] = colors;

// console.log(second);

// Object Destructuring

// const userDetails = {
//   name: "test",
//   age: 24,
//   id: 123,
//   gender: "male",
// };

// const { name, age, id, xyz } = {
//   name: "test",
//   age: 24,
//   id: 123,
//   gender: "male",
// };

// console.log(name);
// console.log(age);
// console.log(xyz);

const {
  name: firstname,
  age: useAge,
  id: userId,
} = {
  name: "test",
  age: 24,
  id: 123,
  gender: "male",
};

// console.log(firstname);

// Nested Destructuring
const student = {
  name: "Sara",
  address: {
    city: "Peshawar",
    country: "Pakistan",
  },
};

const {
  name,
  address: { city, country },
} = student;

// console.log(name);
// console.log(city);
// console.log(country);

// Spread Sytax/operator (...data)
const original = [1, 4, 6, 8, 98, 4];

const pa = [...original];

// pa.splice(1, 1);
// console.log(pa);
// console.log(original);

const frontend = ["HTML", "CSS", "JavaScript"];
const backend = ["Node.js", "Express"];

const fullstack = [...frontend, ...backend];
console.log(fullstack);

// Copy and update objects
// const user = {
//   name: "Ahmed",
//   role: "Student",
// };

// const updatedUser = {
//   user: { ...user },
// };

// updatedUser.user.name = "Khan";

// console.log(updatedUser);
// console.log(user);

// const user1 = {
//   name: "Ahmed",
//   role: "Student",
// };

// const user2 = {
//   name1: "Khan",
//   role1: "Teacher",
// };

// const bothUser = {
//   ...user1,
//   ...user2,
// };

// console.log(bothUser);

// Rest Parameter (...rest)

function caculateTotal(...allNum) {
  let total = 0;
  for (let num of allNum) {
    total = total + num;
  }
  console.log(total);
}

caculateTotal(230, 345, 3, 457, 34557, 35, 67, 78, 35);

function totalProductPrice(...products) {
  let totalPrice = 0;
  for (let product of products) {
    totalPrice = totalPrice + product.price;
  }
  console.log(totalPrice);
}

totalProductPrice(
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: 249.99,
    currency: "USD",
  },
  {
    id: 2,
    name: "Smartphone",
    category: "Electronics",
    price: 699.99,
    currency: "USD",
  },
  {
    id: 3,
    name: "Laptop",
    category: "Computers",
    price: 1299.99,
    currency: "USD",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    category: "Accessories",
    price: 89.99,
    currency: "USD",
  },
  {
    id: 5,
    name: "Smart Watch",
    category: "Wearables",
    price: 199.99,
    currency: "USD",
  },
  {
    id: 6,
    name: "Bluetooth Speaker",
    category: "Audio",
    price: 79.99,
    currency: "USD",
  },
  {
    id: 7,
    name: "Gaming Mouse",
    category: "Accessories",
    price: 49.99,
    currency: "USD",
  },
  {
    id: 8,
    name: "USB-C Hub",
    category: "Electronics",
    price: 39.99,
    currency: "USD",
  },
);
