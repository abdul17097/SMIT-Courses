let userDetails = {
  name: "John Doe",
  age: 30,
  email: "test@gmail.com",
  city: "New York",
};

let convertObjectToStringify = JSON.stringify(userDetails);
console.log(convertObjectToStringify);

localStorage.setItem("user_detail", convertObjectToStringify);

let getData = JSON.parse(localStorage.getItem("user_detail"));

console.log(getData);

function removeData() {
  localStorage.clear("user_detail");
}
