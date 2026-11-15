// const parent = document.querySelector("#parent");
// const child = document.querySelector("#child");

// parent.addEventListener("click", function () {
//   console.log("Parent clicked");
// });

// child.addEventListener("click", function () {
//   console.log("Button clicked");
// });

const outer = document.querySelector("#outer");
const middle = document.querySelector("#middle");
const inner = document.querySelector("#inner");

// outer.addEventListener("click", () => {
//   console.log("Outer");
// });

// middle.addEventListener("click", () => {
//   console.log("Middle");
// });

// inner.addEventListener("click", () => {
//   console.log("Inner");
// });

// outer.addEventListener(
//   "click",
//   () => {
//     console.log("Outer capturing");
//   },
//   true,
// );

// inner.addEventListener("click", () => {
//   console.log("Inner bubbling");
// });

const parent = document.querySelector("#parent");
const child = document.querySelector("#child");

parent.addEventListener("click", () => {
  console.log("Parent clicked");
});

child.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Button clicked");
});
