// 1. Basic Function with Type Annotations
// 2. Arrow Functions
// 3. Optional Parameters (?)
// 4. Default Parameters
// 5. Rest Parameters (...)
// 6. Async Functions with Promises

// function displayFullName(fname: string, lname: string = "test"): void {
//   //   return `Full Name: ${fname} ${lname}`;
//   // return 123;
//   console.log(`Full Name: ${fname} ${lname}`);
// }

// // console.log(displayFullName("2323", "31324"));
// displayFullName("hello");

// type DisplayFullNameTypes = {
//   fname?: string | number;
//   lname: string;
// };

// function displayFullName({
//   fname = "Asdf",
//   lname,
// }: DisplayFullNameTypes): void {
//   //   return `Full Name: ${fname} ${lname}`;
//   // return 123;
//   console.log(`Full Name: ${fname} ${lname}`);
// }

// type NumTypes = {
//   a: number;
//   b: number;
// };

// const addTwoNum = ({ a, b }: NumTypes): number => {
//   return a + b;
// };

// console.log(addTwoNum({ a: 2, b: 4 }));

// const allProducts = function (): Promise<string> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("All Products");
//     }, 2000);
//   });
// };

// allProducts().then((res) => console.log(res));

// // using async await
// // use this api: https://fakestoreapi.com/products

// const fetchProducts = async (): Promise<void> => {
//   try {
//     const response = await fetch("https://fakestoreapi.com/products");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error fetching products:", error);
//   }
// };

// fetchProducts();

// function addNums(...nums: number[]) {
//   return nums.reduce((sum, num) => sum + num, 0);
// }

// addNums(1, 4, 6, 6, 7, 7);

export {};
