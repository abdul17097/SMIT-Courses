// Variable Scoping
// Closure
// Template literals
// Destructuring
// Default parameters
// Rest parameter
// Spread Operator
// Arrow functions
// Enhanced object literals
// Iterators & For..of
// Array methods
// Higher-order function
// CallBack
// Promises
// Exponentiation Operator
// Classes
// Ternary Operator
// Optional chaining

// enhance_object_literal

let age = 23;
let name = "test";

const studentDetails = {
  student_age: age,
  student_name: name,
};

// console.log(studentDetails);

function displayUserDetail(name, age, gender) {
  // let name = name;
  // let age = age;
  // let gender = gender;

  const userDetails = {
    name: name,
    // name,
    age,
    gender,
    display: function () {
      console.log(this.name);
    },
    // display() {
    //   console.log(this.name);
    // },
  };
  return userDetails.display();
}

displayUserDetail("jawad", 23, "male");
