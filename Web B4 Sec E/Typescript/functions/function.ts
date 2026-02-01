console.log("Functions");

function test() {
  return "kajsdfl";
}

test();

type Prameter = {
  a?: number;
  b: number;
};

function add({ a = 4, b = 5 }: Prameter): number {
  return a + b;
  // return "laksdjf"
}

console.log(add({ b: 2 }));

// type Prameter = {
//   a: number;
//   b: number;
// };

// function add(hello: Prameter): number {
//   return hello.a + hello.b;
//   // return "laksdjf"
// }
