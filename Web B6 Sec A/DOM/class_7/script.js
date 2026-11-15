// select parent element through child

const heading = document.querySelector("h2");
const para = document.querySelector("p");
console.log(heading.parentElement);

// select child element through parent

const card = document.getElementById("card");

console.log(card.children);

// first element
console.log(card.firstElementChild);
// last element
console.log(card.lastElementChild);

// next sibling
console.log(heading.nextElementSibling);
// previous sibling
console.log(para.previousElementSibling);
