// how to use promises in JavaScript and their states like pending, fulfilled, and rejected write a simple definition and example
// Promises in JavaScript are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value.
// A promise can be in one of three states:
// 1. Pending: The initial state, neither fulfilled nor rejected.
// 2. Fulfilled: The operation completed successfully, resulting in a value.
// 3. Rejected: The operation failed, resulting in a reason for the failure (usually an error).
// Example of using a promise in JavaScript

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     // Simulating an asynchronous operation using setTimeout
//     setTimeout(() => {
//       const success = true; // Change this to false to simulate an error
//       if (success) {
//         resolve("Data fetched successfully!");
//       } else {
//         reject("Error fetching data.");
//       }
//     }, 2000); // 2 seconds delay
//   });
// }

// fetchData()
//   .then((data) => {
//     console.log(data); // This will run if the promise is resolved
//   })
//   .catch((error) => {
//     console.error(error); // This will run if the promise is rejected
//   })
//   .finally(() => {
//     console.log("Fetch operation completed."); // This will run regardless of the outcome
//   });

//  how async await works with promises
// Async/await is a syntax that allows you to work with promises in a more synchronous-like manner. It makes your code easier to read and write by allowing you to use `async` functions and the `await` keyword.
// async function fetchDataAsync() {
//   try {
//     const data = await fetchData(); // Wait for the promise to resolve
//     console.log(data); // This will run if the promise is resolved
//   } catch (error) {
//     console.error(error); // This will run if the promise is rejected
//   } finally {
//     console.log("Fetch operation completed."); // This will run regardless of the outcome
//   }
// }
// fetchDataAsync();

// In this example, `fetchDataAsync` is an `async` function that uses `await` to pause execution until the promise returned by `fetchData` is resolved or rejected. This allows you to handle the result or error in a more straightforward way without chaining `.then()` and `.catch()`.
// The `try...catch` block is used to handle errors, making it clear where the error handling occurs. The `finally` block ensures that some code runs regardless of whether the promise was fulfilled or rejected, similar to the `.finally()` method on promises.
// Async/await is built on top of promises, so you can still use `.then()`, `.catch()`, and `.finally()` if you prefer that style, but async/await often leads to cleaner and more readable code, especially in complex scenarios with multiple asynchronous operations.
// Example of using async/await with a promise

// async function exampleAsyncAwait() {
//   try {
//     const result = await fetchData(); // Wait for the promise to resolve
//     console.log(result); // This will run if the promise is resolved
//   } catch (error) {
//     console.error(error); // This will run if the promise is rejected
//   } finally {
//     console.log("Async operation completed."); // This will run regardless of the outcome
//   }
// }

// const newPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const success = false;
//     if (success) {
//       resolve("Üser Login Successful");
//     } else {
//       reject("User Login Failed");
//     }
//   }, 3000);
// });

// newPromise
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Promise operation completed.");
//   });

// const data = fetch("https://jsonplaceholder.typicode.com/posts");
// data
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log("Error fetching data:", error);
//   });

const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error fetching posts:", error.message);
  }
};

fetchPosts();
