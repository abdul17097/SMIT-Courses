let container = document.getElementById("container");
let para = document.getElementById("para");
// console.log(container);
let firstChild = container.firstElementChild;
let lastChild = container.lastElementChild;
// console.log(firstChild);
// console.log(lastChild);

let parentElement = para.parentElement;
// console.log(parentElement);

let nextSibbling = para.nextElementSibling;
// console.log(sibbling);

let preveiousSibbling = para.previousElementSibling;
console.log(preveiousSibbling);

let deleteChild = container.removeChild(para);
