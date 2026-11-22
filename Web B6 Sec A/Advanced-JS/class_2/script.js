const products = [
  {
    id: 1,
    name: "Laptop",
    price: 120000,
    category: "Electronics",
    inStock: true,
  },
  { id: 2, name: "Mouse", price: 1500, category: "Accessories", inStock: true },
  {
    id: 7,
    name: "Keyboard",
    price: 3500,
    category: "Accessories",
    inStock: false,
  },
  {
    id: 4,
    name: "Monitor",
    price: 45000,
    category: "Electronics",
    inStock: true,
  },
  {
    id: 5,
    name: "Headphones",
    price: 5000,
    category: "Accessories",
    inStock: true,
  },
  {
    id: 6,
    name: "Mouse",
    price: 500,
    category: "Accessories",
    inStock: false,
  },
];

// forEach

// products.forEach((product, index) => {
//   console.log(product.price + "  " + index);
// });

// map

console.log(products);

// let updateProductList = products.map((item, index) => {
//   //   return item.price * 2;
//   return { ...item, price: item.price * 2 };
// });

// let updateProductList = products.map((item, index) => ({
//   ...item,
//   price: item.price * 2,
// }));

// console.log(updateProductList);

// filter

// const filterProduct = products.filter((product) => product.price > 3500);
// console.log(filterProduct);

// find

// const isExistPrduct = products.find((product) => product.id == 3);
// console.log(isExistPrduct);

// some

// const someProduct = products.some((product) => product.id == 3);
// console.log(someProduct);

// every
// const everyProduct = products.every((product) => product.id != 3);
// console.log(everyProduct);

// let count = 0;

// for (let a = 0; a < 10; a++) {
//   count = count + a;
// }

// console.log(count);

// reduce

let marks = [2, 4, 2, 5];

// let result = marks.reduce((count, a) => {
//   return count + a;
// }, 5);

// let result = marks.reduce((accumulatoer, item) => {
//   return accumulatoer + item;
// }, intialvalue);

// let totalPrductPrice = products.reduce(
//   (total, product) => total + product.price,
//   0,
// );

// console.log(totalPrductPrice);

// sort
// marks.sort((first, second) => second - first);
// console.log(marks);

// products.sort((item1, item2) => item2.price - item1.price);

// console.log(products);

// let sortProductArray = [...products].sort(
//   (item1, item2) => item2.id - item1.id,
// );

// console.log(sortProductArray);
