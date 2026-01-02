// Math Methods
// max()
// min()
// pow()
// sqrt()

let numbers1 = Math.max(2, 6, 9, 33, 663, 0);
let numbers2 = Math.min(2, 6, 9, 33, 663, 0);
// console.log(numbers1);
// console.log(numbers2);

// console.log(Math.pow(3, 2));
// console.log(Math.sqrt(64));

function power(base, pow) {
  return Math.pow(base, pow);
}

// console.log(power(3, 5));
// console.log(power(3, 2));
// console.log(power(9, 2));

// round
let a = 5.1;
// console.log(Math.round(a));

// console.log(Math.ceil(a));
// console.log(Math.floor(a));

// random
// console.log(Math.random());
// console.log(Math.round(Math.random() * 10) + 1);

function getRandomInteger(max, min) {
  return Math.round(Math.random() * (max - min)) + min;
}

// console.log(getRandomInteger(20, 10));

// turnc()
// console.log(Math.trunc(4.1));

// abs()
// console.log(3 - 4);

// console.log(Math.abs(3 - 4));

// toFixed()
let num = 3.141592653589793238;
console.log(num.toFixed(2));
