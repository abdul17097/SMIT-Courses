// Rest Parameter

// function numbers(par1, par2, para3, para4, para5) {
//   console.log(par1, par2, para3, para4, para5);
// }

function numbers(...rest) {
  console.log(rest);
}

numbers(1, 2, 3, 4, 5);
const obj = {
  name: "sadf",
  age: 23,
  gender: "male",
  city: "peshawar",
};

// const { gender, city, ...remain } = {
//   name: "sadf",
//   age: 23,
//   gender: "male",
//   city: "peshawar",
// };
// console.log(remain);

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3, d: 4 };
const combined = { ...obj1, ...obj2 };
console.log(combined);
console.log(obj2);

// Spread Operator
// array Destructuring
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let mergedArray = [...arr1, ...arr2];
const a1 = [1, 2];
const a2 = [3, 4];
const merged = [...a1, ...a2];
console.log(merged);
