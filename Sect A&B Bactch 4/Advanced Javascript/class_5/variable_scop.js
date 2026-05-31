// variable
// var | let | const

// Global & Local Scope
// let name = "hello";

// function test() {
//   var roll_no = 1234;
//   console.log(`inside of the funcion: ${name} | Roll No: ${roll_no} `);
// }

// test();

// console.log(`outside of the funcion: ${name} | Roll No: ${roll_no} `);

// Function & Block

function test2() {
  var product_1 = "product_1";
  console.log(product_1);
}

test2();
if (true) {
  //   var product_2 = "product_2";
  let product_2 = "product_2";
  console.log(product_2);
}

// console.log(product_1);
console.log(product_2);
