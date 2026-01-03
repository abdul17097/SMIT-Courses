let list = document.getElementById("parent");

// Accessing first child element
let firstChild = list.firstElementChild;
let lastChild = list.lastElementChild;

console.log("First Child:", firstChild.textContent);
console.log("Last Child:", lastChild.textContent);

console.log("next sibling:", firstChild.nextElementSibling.textContent);
