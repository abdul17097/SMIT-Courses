// Async & Await

// const products = async () => {
//   const response = await fetch("https://fakestoreapi.com/product");
//   const data = await response.json();
//   console.log(data);
// };

// products();

const getProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/product");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
getProducts();
console.log("sdlkfj");

setTimeout(() => {
  console.log("sdf");
}, 2000);
