let container = document.getElementById("container");
let output = document.getElementById("output");
// console.log(container.innerText);
// console.log(container.innerHTML);
// console.log(container.textContent);
output.innerHTML = container.innerHTML;

// Attribute Manipultion
console.log(container.getAttribute("id"));
console.log(container.getAttribute("class"));
console.log(container.getAttribute("class"));

let nameLabel = document.getElementsByTagName("label")[0];
console.log(nameLabel.getAttribute("for"));

console.log(nameLabel.getAttribute("id"));
nameLabel.setAttribute("id", "nameLabel");

console.log(nameLabel.getAttribute("id"));

// image

// let img = document.getElementsByTagName("img")[0];
// img.setAttribute("src", "../../images/pamir-9883842_1280.jpg");
// img.setAttribute("width", "200px");
// img.setAttribute("height", "200px");

// console.log(img);

function changeImage() {
  let img = document.getElementsByTagName("img")[0];
  //   img.setAttribute("src", "../../images/pamir-9883842_1280.jpg");
  //   img.setAttribute("width", "200px");
  //   img.setAttribute("height", "200px");
  img.removeAttribute("src");
}
