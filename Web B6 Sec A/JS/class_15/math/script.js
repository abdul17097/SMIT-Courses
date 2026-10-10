// Math Object: Used Mathematical Calculation
// Math.round()
// 4.5 -> 5
// 4.1 -> 4

// console.log(Math.round(4.5));
// console.log(Math.round(4.1));
// console.log(Math.round(45.9));

// Math.floor(): round down
// 2.1 -> 2
// 4.9 -> 4

// console.log(Math.floor(2.1));
// console.log(Math.floor(4.9));

// Math.ceil(): round up
// 3.5 -> 4
//  6.9 -> 7
// console.log(Math.ceil(3.5));
// console.log(Math.ceil(6.9));

// Math.truc(): remove decimal part
// 4.5 -> 4
// 2.1 -> 2
// 2.9 -> 2

// console.log(Math.trunc(4.5));
// console.log(Math.trunc(2.9));

// Math.abs(): convert native into positive number
// -2.45 -> 2.45

// console.log(Math.trunc(Math.abs(-2.45)));

// Math.sqrt()

// 25 -> 5
// 81 -> 9
// console.log(Math.sqrt(25)); 5
// console.log(Math.sqrt(26)); 5.345345

// 3^3 -> 27
// Math.pow()
// 2^3 -> 8

// console.log(Math.pow(2, 3));
// console.log(Math.pow(3, 0.5));

// Math.max(): largetst number
// 3,4,53,234,4,4 -> 234

// console.log(Math.max(3, 4, 53, 234, 4, 4));

// Math.min(): smallest number
// 3,4,53,234,4,4 -> 3
// console.log(Math.min(3, 4, 53, 234, 4, 4));

// Math.random(); range 0 to 1

// console.log(Math.random());

// Random integer from 1 to 10:
// const randomNumber = Math.floor(Math.random() * 7) + 1;
// console.log(randomNumber);

function generateRandomNum(max, min) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let result = generateRandomNum(45, 31);
console.log(result);
