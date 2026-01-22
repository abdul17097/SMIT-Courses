let form = document.getElementById("user-form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let username = event.target.username.value;
  let email = event.target.email.value;
  //   console.log(username.value, email.value);
  //   console.log(username.value.length);

  let userCrediential = {
    username: "test123",
    email: "test@gmail.com",
  };

  console.log(email);

  if (!username || !email) {
    alert("Please fill the fields");
  } else if (userCrediential.username !== username.trim()) {
    alert("Invalid Crediential");
  } else if (userCrediential.email !== email) {
    alert("Invalid Crediential");
  } else {
    alert("user Login Successfully!");
  }
});
