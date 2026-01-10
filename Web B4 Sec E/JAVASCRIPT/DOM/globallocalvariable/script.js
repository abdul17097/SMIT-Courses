// Global Variable: A variable declared outside of any function or block is called a global variable.
// Local Variable: A variable declared inside a function or block is called a local variable.

let a = 10; // global variable

function display() {
  let b = 12; //local variable
  console.log(a);
  console.log(b);
}

display();
console.log(b);

if (true) {
  console.log(a);
}
