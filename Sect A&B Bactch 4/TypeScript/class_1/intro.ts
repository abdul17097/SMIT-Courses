function add(a: number, b: number) {
  return a + b;
}

console.log(add(2, 3));

// Type Inferance
let b = 20;

// Type 'string' is not assignable to type 'number'.
// b = "slksfdj";
console.log(b);

let c: number = 10;

// Type 'string' is not assignable to type 'number'.
// c = ""

export {};
