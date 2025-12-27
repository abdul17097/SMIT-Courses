// function displayMessage() {
//   alert("kuch bi");
// }

// displayMessage();
// let divElement = document.getElementById("divElement");

// function applyBackgroundColor(element) {
//   // alert("Applying background color");
//   // console.log(divElement);

//   element.innerHTML = "BG color applied";
//   console.log(element.style.backgroundColor);

//   element.style.backgroundColor = "lightblue";
//   console.log(element.style.backgroundColor);
//   console.log(element);
// }

let paraId = document.getElementById("paraId");
console.log(paraId.classList);

function toggle() {
  paraId.classList.toggle("hide");
}
