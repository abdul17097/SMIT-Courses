function outer() {
  let message = "Hello from outer function";
  //    function inner() {
  //     console.log(message);
  //   }

  const inner = () => {
    console.log(message);
  };
  inner();
}

outer();

let fname = "Khan";
let lname = "Ge";
// console.log("Fname: " + fname + " " + "Lname: " + lname);
console.log(`Fname: ${fname} Lname: ${lname}`);
