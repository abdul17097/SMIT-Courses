// var keyword(function scoped)
// function test() {
//   if (true) {
//     var x = 10;
//   }

//   for (var i = 0; i < 5; i++) {
//     // some code
//     console.log("loop out", i);
//   }
//   console.log(i);

//   console.log(x);
// }

// test();

// Block Scope (let and const)
// function test() {
//   if (true) {
//     let x = 10;
//   }

//   for (let i = 0; i < 5; i++) {
//     // some code
//     console.log("loop out", i);
//   }
//   //   console.log(i);

//   console.log(x);
// }

// test();

// if (true) {
//   var y = 20;
// }

// console.log(y);

// Closure

function outer() {
  let count = 0;
  inner();
  function inner() {
    count++;
    console.log(count);
  }
}

outer();

// Inhansed Object Literal

let fname = "test";
let lname = "khan";

const userDetails = {
  first_name: fname,
  lname: lname,
  age: 21,
  gender: "male",
};
function getFullName() {
  console.log(this.fname, this.lname);
}
const userDetails2 = {
  fname,
  lname,
  age: 21,
  gender: "male",

  getFullName() {
    console.log(this.fname, this.lname);
  },
};

userDetails2.getFullName();

const students = ["Ali", "Sara", "Zain"];

// for(let i=0; i<students.length; i++){
//   console.log(students[i]);
// }

// for (let student of students) {
//   console.log(student);
// }

// const user = {
//   id: 1,
//   name: "Alice",
//   address: {
//     city: "New York",
//     country: "USA",
//   },
// };

// console.log(user?.address?.geo?.lat);

class Person {
  // constructor runs when a new object is created
  constructor(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
  }

  // instance method
  greet() {
    return `Hi, I'm ${this.name} and I work as a ${this.job}.`;
  }

  // another instance method
  haveBirthday() {
    this.age += 1;
    return `Happy birthday! I am now ${this.age} years old.`;
  }

  // getter
  get info() {
    return `${this.name} (${this.age}) - ${this.job}`;
  }

  // static method (belongs to the class, not instances)
  static isAdult(age) {
    return age >= 18;
  }
}

// Creating an object (instance) of the class
const person1 = new Person("Alex", 25, "Developer");

console.log(person1.greet());
console.log(person1.haveBirthday());
console.log(person1.info);

console.log(Person.isAdult(person1.age));
