// select element by className

// let container = document.getElementsByClassName("container");
// let output = document.getElementsByClassName("output");
// // console.log(output);

// // console.log(container);

// // console.log(container[0].innerHTML);
// // console.log(container[0].innerText);

// output[0].innerHTML = container[0].innerHTML;

// let paras = document.getElementsByClassName("para");
// console.log(paras);

// paras[0].style.color = "red";
// paras[1].style.color = "red";
// paras[2].style.color = "red";
// paras[3].style.color = "red";
// paras[4].style.color = "red";
// paras[5].style.color = "red";

// for (para of paras) {
//   para.style.color = "red";
// }

// for (let i = 0; i < paras.length; i++) {
//   if (i % 2 == 0) {
//     paras[i].style.color = "blue";
//   } else {
//     paras[i].style.color = "green";
//   }
// }

let headings = document.getElementsByTagName("h2");
// console.log(headings);

let para = document.querySelector("#paraId");
let paras = document.querySelectorAll(".para");
console.log(paras);
