// map:
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

// syntax
// array.map(()=>{
// body
// })
let numbers = [2, 5, 7, 2, 8, 4];

// let modifiedNumbers = numbers.map((ele, index) => ele + index);
let modifiedNumbers = numbers.map((ele, index) => {
  let newValue = ele + index;
  return newValue;
});

// console.log(modifiedNumbers);
// console.log(numbers);

// forEach
// numbers.forEach((ele, index) => {
//   console.log(ele);
// });

// filter
let filterdNumbers = numbers.filter((ele, index) => {
  return ele == 2;
});
// console.log(filterdNumbers);

let count = 0;

for (let i = 0; i < numbers.length; i++) {
  count = count + numbers[i];
}
// console.log(count);

// reduce method
let sum = numbers.reduce((acc, cvalue) => acc + cvalue);

// console.log(sum);

// sort
// let names = ["chinmay", "sarika", "poorva", "amol", "ram"];
let numbers2 = [5, 9, 0, 3, 7, 2, 1];

// let sortedNumbers = numbers2.sort();
let sortedNumbers = numbers2.sort((a, b) => b - a);
// console.log(sortedNumbers);

const users = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    age: 28,
    isActive: true,
    role: "admin",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    age: 34,
    isActive: false,
    role: "user",
  },
  {
    id: 3,
    name: "Carol Davis",
    email: "carol@example.com",
    age: 22,
    isActive: true,
    role: "editor",
  },
];

// let sortedArrayOfUsers = users.sort((a, b) => b.age - a.age);

// console.log(sortedArrayOfUsers);

// findIndex
let numbers3 = [5, 9, 0, 3, 7, 2, 1];
let index = numbers3.findIndex((item) => {
  return item === 10;
});
console.log(index);

// indexOf
let index2 = numbers3.indexOf(10);
console.log(index2);

// fill
let newArray = new Array(10);
newArray.fill(10);
// console.log(newArray);
