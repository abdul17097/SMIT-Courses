let btn = document.getElementById("btn");

// btn.addEventListener("click", () => {
//   alert("hello");
// });

// btn.addEventListener("dblclick", () => {
//   alert("double click");
// });

// btn.addEventListener("mouseenter", () => {
//   alert("Mouse Enter");
// });

// btn.addEventListener("mouseover", () => {
//   alert("Mouse Over");
// });

// btn.addEventListener("mousemove", () => {
//   alert("Mouse Move");
// });

// btn.addEventListener("mouseout", () => {
//   alert("Mouse out");
// });

// btn.addEventListener("mouseup", () => {
//   alert("Mouse up");
// });

// btn.addEventListener("mousedown", () => {
//   alert("Mouse down");
// });

// target html element through css attribute selector
let para = document.querySelector("div[id='para1']");
console.log(para);

para.innerHTML = "hello world";

let btnCreate = document.getElementById("btnCreate");

function createElement() {
  let newPara = document.createElement("p");
  newPara.innerHTML = "This is new Paragraph";
  //   document.body.appendChild(newPara);
  para.appendChild(newPara);
}

btnCreate.addEventListener("click", createElement);

function addItem() {
  let list = document.getElementById("list");
  let item = document.getElementById("item").value;
  let newItem = document.createElement("li");
  newItem.innerHTML = item;

  list.appendChild(newItem);
  document.getElementById("item").value = "";
}
