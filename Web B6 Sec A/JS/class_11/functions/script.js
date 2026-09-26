// addition function

function add(a, b, c) {
  let result = a + b + c;
  console.log(`${a} + ${b} + ${c} = ${result}`);
}

add(12, 34, 25);
// add(34, 45);

function introduce(name, age, city) {
  console.log("My name is " + name);
  console.log("My age " + age);
  console.log("I am from " + city);
}

// introduce(20, "Ali", "Peshawar");
introduce();

// Default Parameter
function greet(name = "Guest") {
  console.log("Hello " + name);
}

greet();

function login(email, password, role = "Buyer") {
  console.log("Email: " + email + " Password: " + password + " Role: " + role);
}

login("test@gmail.com", "test123", "Seller");

function addNums(a, b) {
  return a + b;
  //   console.log(a + b);
}

function multiply(a, b) {
  return a * b;
  //   console.log(a * b);
}

let result = addNums(2, 6) + multiply(4, 2);
console.log(result);

function addthreeNums(a, b, c) {
  let result = a + b + c;

  console.log(result);
  console.log("hello world");
  return result;
}

console.log(addthreeNums(3, 5, 2));

function findResult(percent) {
  if (percent >= 50 && percent <= 100) {
    // console.log("Pass");""
    return "Pass";
  } else if (percent < 50 && percent > 0) {
    // console.log("Fail");
    return "Fail";
  } else {
    return "Invalide Input";

    // console.log("Invalide Input");
  }
}

// let studentPercent = Number(prompt("Enter your percentage"));
// console.log(findResult(studentPercent));

const userDetails = {
  email: "admin@gmail.com",
  password: "admin123",
  role: "admin",
};

function checkAdminRole(email, password, role) {
  if (role == userDetails.role) {
    console.log("you are allowed");
  } else {
    console.log("Something is wrong!");
  }
}

let userRole = prompt("Enter your role");
checkAdminRole("test@gmail.com", "test123", userRole);
