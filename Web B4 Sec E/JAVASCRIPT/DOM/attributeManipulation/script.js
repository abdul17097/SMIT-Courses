// Manipulating attributes: in the DOM (Document Object Model) allows you to interact with and modify the elements of an HTML document. You can change attributes such as class, src, href, id, and many others using JavaScript.

// 1. getAttribute() - Get the value of an attribute
// element.getAttribute("attributeName");

// 2. setAttribute() - Set the value of an attribute
// element.setAttribute("attributeName", "value");

// 3. removeAttribute() - Remove an attribute
// element.removeAttribute("attributeName");

// 4. hasAttribute() - Check if an element has a specific attribute
// element.hasAttribute("attributeName");

// 5. classList.add() - Add a class to the class list
// element.classList.add("new-class");

// 6. classList.remove() - Remove a class from the class list
// element.classList.remove("old-class");

// 7. classList.toggle() - Toggle a class on or off
// element.classList.toggle("toggle-class");

let image = document.getElementById("image");
console.log(image.getAttribute("width"));
console.log(image.getAttribute("height"));
console.log(image.getAttribute("alt"));
console.log(image.getAttribute("src"));

console.log(image.hasAttribute("id"));

function changePic() {
  image.setAttribute("src", "../../images/dolomites-5076487_1280.jpg");
  //   image.setAttribute("width", "300");
  //   image.setAttribute("height", "300");
  //   image.removeAttribute("width");
  //   image.removeAttribute("height");
}
