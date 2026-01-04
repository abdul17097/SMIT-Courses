// let btn = document.getElementById("createElement");

// btn.addEventListener("click", () => {
//   let newElement = document.createElement("p");
//   newElement.innerHTML = "New Paragraph";
//   document.body.appendChild(newElement);
// });

// let createImageBtn = document.createElement("button");
// createImageBtn.innerHTML = "Create Image";
// document.body.appendChild(createImageBtn);

// createImageBtn.addEventListener("click", () => {
//   let posterContainer = document.getElementById("poster");
//   let newImageTag = document.createElement("img");
//   newImageTag.setAttribute("src", "../../images/Rectangle 1.png");
//   newImageTag.classList.add("posterImage");
//   posterContainer.appendChild(newImageTag);
// });

document.getElementById("addItemBtn").addEventListener("click", () => {
  let todoItems = document.getElementById("todoItems");
  let newData = document.getElementById("newItem").value;
  let newItem = document.createElement("li");

  newItem.addEventListener("click", () => {
    newItem.remove();
  });

  console.log(typeof newData);
  if (newData.length > 0) {
    newItem.innerHTML = newData;
    todoItems.appendChild(newItem);
    document.getElementById("newItem").value = "";
    document.getElementById("error").style.display = "none";
  } else {
    document.getElementById("error").style.display = "block";
  }
});

let paraent1 = document.getElementById("paraent1");
let newPara = document.createElement("p");
let textNode = document.createTextNode("This is new Para");
newPara.appendChild(textNode);

let para3 = document.getElementById("para3");

// creating new Element
paraent1.insertBefore(newPara, para3);
// paraent1.appendChild(newPara);

// Remove child
// paraent1.removeChild(para3);

// Replace child
// paraent1.replaceChild(newPara, para3);

// const para = document.createElement("p");
// const node = document.createTextNode("This is new.");
// para.appendChild(node);

// const parent = document.getElementById("div1");
// const child = document.getElementById("p1");
// parent.replaceChild(para, child);
