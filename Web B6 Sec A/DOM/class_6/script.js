const username = document.getElementById("username");
const result = document.getElementById("result");
const showBtn = document.getElementById("btn");

let selectedLanguages = [];

showBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const gender = document.querySelector("input[name='gender']:checked");
  const country = document.getElementById("country");
  console.log(country.value);

  const languages = document.querySelectorAll(
    "input[name='languages']:checked",
  );
  for (let lan of languages) {
    selectedLanguages.push(lan.value);
  }
  console.log(selectedLanguages);

  let name = username.value.trim();
  if (name === "") {
    alert("Please fill username field");
    return;
  }

  if (name.length < 4 || name.length > 12) {
    alert("username length should b/w 4 & 12 char  ");
    return;
  }

  result.textContent = username.value;
});

const country = document.getElementById("country");

// country.addEventListener("change", function (event) {
//   console.log(event.target.value);
// });
