// const heading1 = document.createElement("h1");
// heading1.textContent = "Hello world";
// heading1.setAttribute("class", "heading");
// document.body.appendChild(heading1);
// document.body.prepend(heading1);

// const removebtn = document.getElementById("removebtn");
// const para = document.getElementById("para");

// removebtn.addEventListener("click", function () {
//   para.remove();
// });

// console.log(heading1);

const students = ["Waqas", "Irshad", "Muaaz", "Bilal"];
const studentsList = document.getElementById("students");

for (const student of students) {
  const createStudent = document.createElement("li");
  createStudent.textContent = `Pakhir Ragle: ${student}`;
  studentsList.appendChild(createStudent);
}

const item1 = document.getElementById("item1");

removebtn.addEventListener("click", function () {
  studentsList.removeChild(item1);
});
