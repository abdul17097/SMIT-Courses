function cNP() {
  let createParaEle = document.createElement("p");
  createParaEle.innerText = "Element Created!";
  createParaEle.setAttribute("class", "para");
  document.body.appendChild(createParaEle);
  console.log(createParaEle);
}

let mylist = document.getElementById("myList");
let newItem = document.createElement("li");
newItem.innerText = "second";
mylist.appendChild(newItem);
console.log(mylist);
