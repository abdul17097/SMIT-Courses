// BODMAS
// B: Brackets ()
// O: order (power) **
// D: Division /
// M: Multiplication *
// A: Addition +
// S: Subtraction -

let expresion = 1 + (4 * (5 - 3)) / 2 ** 4;

// 1 + (4 * 2) / 2** 4
// 1 + 8 / 2**4
// 1 + 8 / 16
// 1 + .5
// 1.5
// console.log(expresion);

// Assignment Operator
let x = 10;
// x++;
// x = x + 1
// x += 1;
x += 2; // 12
x += 2; // 14
x += 2; // 16
x += 2; // 18
// console.log((x += 2));

let y = 5;
// y--;
// y = y-1
y -= 2;
// console.log(y);

let z = 2;
// z = z * 2;
z *= 3;
// console.log(z);

let L = 8;
// L = L / 2;
L /= 4;
// console.log(L);

let u = 2;
// u = u ** 2;
u **= 4;
// console.log(u);

let o = 5;
// o = o % 2;
o %= 2;
console.log(o);
