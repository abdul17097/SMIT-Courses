// console.log("fist");
// setTimeout(() => {
//   console.log("second");
// }, 2000);
// console.log("third");

// let newPromis = new Promise((resolve, reject) => {
//   let pass = false;
//   if (pass === true) {
//     resolve("Promise resolved successfully");
//   } else {
//     reject("Promise rejected");
//   }
// });

// newPromis
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("error hai bhai", err);
  });
