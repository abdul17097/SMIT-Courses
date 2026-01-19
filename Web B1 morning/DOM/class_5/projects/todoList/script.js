let todList = document.getElementById("todoList");
let inputField = document.getElementById("inputField");

function addItem() {
  let listITem = document.createElement("li");
  listITem.setAttribute("class", "listItem");
  listITem.innerHTML = inputField.value;
  todList.appendChild(listITem);

  document.getElementById("inputField").value = "";
}
