// function keyPressed(event) {
//   console.log(event.key);
// }

// window.addEventListener("keydown", keyPressed);
// window.addEventListener("keyup", keyPressed);

let searchInput = document.getElementById("search");
let output = document.getElementById("output");
searchInput.addEventListener("input", (event) => {
  //   console.log(event.data);
  console.log(searchInput.value);
  output.innerText = searchInput.value;
});
