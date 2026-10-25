let clickBtn = document.querySelector("#clickBtn");
let message = document.querySelector("#message");

// click event
// element.addEventListener(event, callback funciton)
clickBtn.addEventListener("click", function () {
  message.textContent = "Buttton Clicked";
});

let darkMD = document.getElementById("darkMD");
let lightMD = document.getElementById("lightMD");

darkMD.addEventListener("click", function () {
  document.body.style.backgroundColor = "black";
});

const handleLightMD = function () {
  document.body.style.backgroundColor = "white";
};

lightMD.addEventListener("click", handleLightMD);

// input event
let search = document.getElementById("search");
let output = document.getElementById("output");
let showinputResult = document.getElementById("showinputResult");
let outputResult = "";

search.addEventListener("input", function () {
  outputResult = search.value;
});

showinputResult.addEventListener("click", function () {
  output.textContent = outputResult;
});

let gender = document.querySelectorAll("input[name='gender']");

for (let i = 0; i < gender.length; i++) {
  gender[i].addEventListener("input", function () {
    console.log(gender[i].value);
  });
}

// gender : [male,female]
// loop: [event1, event2]

// 0 : male apply event => value: male
// 1 : female apply event => value: female

// change event

let course = document.getElementById("course");
let selectedCourse = document.getElementById("selectedCourse");

course.addEventListener("change", function () {
  selectedCourse.textContent = `Selected Course ${course.value}`;
});

// submit event

let registrationForm = document.getElementById("registrationForm");
let name = document.getElementById("name");
let result = document.getElementById("result");

registrationForm.addEventListener("submit", function (e) {
  e.preventDefault();
  result.textContent = name.value;
});
