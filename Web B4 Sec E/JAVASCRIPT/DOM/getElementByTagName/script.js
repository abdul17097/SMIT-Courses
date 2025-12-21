let paras = document.getElementsByTagName("p");
console.log(paras);

// paras[1].style.color = "red";

console.log(paras.length);

for (let i = 0; i < paras.length; i++) {
  //   console.log(paras[i]);

  if (i % 2 == 0) {
    paras[i].style.color = "blue";
    paras[i].style.border = "1px solid black";
    paras[i].style.padding = "10px";
  } else {
    paras[i].style.color = "red";
    paras[i].style.border = "1px solid black";
    paras[i].style.padding = "10px";
  }
}
