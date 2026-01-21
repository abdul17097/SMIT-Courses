let studentDetails = {
  firstName: "Alice",
  lastName: "Smith",
  age: 20,
  getFullName: function () {
    console.log(this.firstName, this.lastName);
  },
};

let students = [
  {
    firstName: "Alice",
    lastName: "Smith",
    age: 20,
    getFullName: function () {
      console.log(this.firstName, this.lastName);
    },
  },
  {
    firstName: "Jhon",
    lastName: "Doa",
    age: 20,
    getFullName: () => {
      console.log(this.firstName, this.lastName);
    },
  },
];

// students[0].getFullName();
// students[1].getFullName();
// console.log(studentDetails);
// studentDetails.getFullName();

function remove(self) {
  // self.remove();
  self.style.backgroundColor = "red";
}

let changeBodyColor = document.getElementById("changeBodyColor");

// changeBodyColor.addEventListener("click", () => {
//   document.body.style.backgroundColor = "black";
// });

// changeBodyColor.addEventListener("mouseenter", () => {
//   document.body.style.backgroundColor = "black";
// });

// changeBodyColor.addEventListener("mouseleave", () => {
//   document.body.style.backgroundColor = "black";
// });

changeBodyColor.addEventListener("mousemove", () => {
  document.body.style.backgroundColor = "black";
});
