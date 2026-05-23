// console.log("start message");

// setTimeout(() => {
//   console.log("setTimeout");
// }, 2000);
// for (let i = 0; i < 400; i++) {
//   console.log("test");
// }

// console.log("ending message");

// Promise
// state:
// pending
// success/fullfilled = resolve
// reject/failed = reject

const userData = {
  id: 1,
  email: "test12@gmail.com",
};

// const newPromise = new Promise((resolve, reject) => {
//   console.log("loading...");

//   setTimeout(() => {
//     if (userData.email === "test123@gmail.com") {
//       resolve("You have login Successfully!");
//     } else {
//       reject("Login Failed");
//     }
//   }, 5000);
// });

// newPromise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Promise Done!");
//   });

// const response = fetch("https://fakestoreapi.com/procts")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("asdf", error);
//   });

// console.log(response);

const fetchProduct = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

fetchProduct();
