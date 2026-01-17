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

console.log(sum);
