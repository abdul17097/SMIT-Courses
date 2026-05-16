// map

// const numbers = [1, 3, 5, 6, 7, 8];
// console.log(numbers.length);

// for (var i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// new array return
// same length return kare ga
// map: HOF
// const data = numbers.map((item, index) => {
//   return item * index;
// });
// const data = numbers.map((item, index) => item);
// const data = numbers.map((item, index) => item);

// console.log(data);
// console.log(numbers);

// filter method

const student_age = [23, 18, 34, 12, 20];

const eligable_stu = student_age.filter((ele, index) => {
  return ele > 18 && ele < 30;
});

// console.log(eligable_stu);
// console.log(student_age);

// sort method

// const sorted_array = student_age.sort((a, b) => (a > b ? -1 : 1));
// console.log(sorted_array);
// const alphabets = ["q", "e", "x", "a"];
// const sorted_array = alphabets.sort((a, b) => (a > b ? 1 : -1));
// console.log(sorted_array);

// const numbers = [1, 3, 5, 6, 7, 8];

// forEach method

// numbers.forEach((ele, index) => {
//   console.log(ele + index);
// });

// cancat
const numbers_1 = [1, 3, 5, 6, 7, 8];
const numbers_2 = [6, 7, 8, 1, 3, 5];

const mergeArray = numbers_1.concat(numbers_2);
const uniqueItems = new Set(mergeArray);
// console.log(mergeArray);

// spread operator
// console.log([...uniqueItems]);
// [1,3,5,6,7,8]

// rest parameter / operator
function calculation(...data) {
  let sum = 0;
  for (var i = 0; i < data.length; i++) {
    sum = sum + data[i];
  }
  return sum;
  //   return a + b + c + d;
}

console.log(calculation(1, 4, 2, 5, 3, 6, 7, 4, 2, 1, 1));
