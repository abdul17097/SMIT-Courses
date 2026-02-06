// promise
// promise with setTimeout

// let loading = true;
// const agePromise = new Promise((resolve, reject) => {
//   const age = 16;

//   if (age >= 18) {
//     setTimeout(() => {
//       loading = false;
//       resolve("You are eligible to vote.");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       loading = false;
//       reject("You are not eligible to vote.");
//     }, 2000);
//   }
// });

// console.log(loading && "loading...");

// console.log(agePromise);

// agePromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const jsonFetch = fetch("https://jsonplaceholder.typicode.com/posts");

jsonFetch
  .then((response) => {
    return response.json();
    //   console.log(response.json());
  })
  .then((data) => {
    console.log(data);
  });
