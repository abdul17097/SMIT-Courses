let favorite = document.getElementById("favorite");
let cart = document.getElementById("cart");
let detail = document.getElementById("detail");

// Capturing Phase
// detail.addEventListener(
//   "click",
//   () => {
//     console.log("product Dteails");
//   },
//   true,
// );
// favorite.addEventListener(
//   "click",
//   () => {
//     console.log("favorite");
//   },
//   true,
// );
// cart.addEventListener(
//   "click",
//   () => {
//     console.log("addtocart");
//   },
//   true,
// );

// Bubbling Phase
// detail.addEventListener("click", () => {
//   console.log("product Dteails");
// });
// favorite.addEventListener("click", () => {
//   console.log("favorite");
// });
// cart.addEventListener("click", (e) => {
//   e.stopPropagation();
//   console.log("addtocart");
// });

// Event Delegation

detail.addEventListener("click", (event) => {
  const { id } = event.target;
  if (event.target) {
    if (id === "detail") {
      console.log("detail");
    } else if (id === "cart") {
      console.log("cart");
    } else {
      console.log("favorite");
    }
  }
});
