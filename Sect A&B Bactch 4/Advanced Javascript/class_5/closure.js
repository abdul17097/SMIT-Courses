// Closure

// function outerfun() {
//   let name = "hello";
//   return function () {
//     console.log(name);
//   };
// }

// const test1 = outerfun();
// test1();

function outerfun() {
  let name = "hello";
  function test2() {
    console.log(name);
  }
  test2();
}

outerfun();
