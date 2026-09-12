/* 
student details:-
name "test"
age  22
gender "male"
marks 880
class 12
contact "+928475983745"
address "Peshawar"



object:-
-> key value pairs (age: 22)
*/

// let name = "test";
// let age = 22;
// let gender = "male";
// let marks = 880;
// let stu_class = 12;
// let contact = "+928475983745";
// let address = "Peshawar";

let student_details = {
  name: "test",
  age: 22,
  gender: "male",
  marks: 880,
  stu_class: 12,
  contact: "+928475983745",
  address: [
    {
      city: "Peshawar",
      country: "Pakistan",
    },
    {
      city: "Lahore",
      country: "Pakistan",
      street: "234",
    },
  ],
  skills: ["Html", "CSS", "JS"],
};

console.log(student_details.address.country);
console.log(student_details.address[1].city);

console.log(student_details.age);
console.log(student_details.name);
console.log(student_details["contact"]);

student_details.id = 234234;
student_details.age = 20;
console.log(student_details);

console.log(student_details.skills[1]);

delete student_details.age;

console.log(student_details);

let students = [
  {
    name: "test",
    age: 22,
    gender: "male",
    marks: 880,
    stu_class: 12,
    contact: "+928475983745",
    address: [
      {
        city: "Peshawar",
        country: "Pakistan",
      },
      {
        city: "Lahore",
        country: "Pakistan",
        street: "234",
      },
    ],
    skills: ["Html", "CSS", "JS"],
  },
];

students.push({
  name: "test123",
  age: 20,
  gender: "male",
  marks: 980,
  stu_class: 12,
  contact: "+923475983745",
  address: [
    {
      city: "Mardan",
      country: "Pakistan",
    },
    {
      city: "Nowshara",
      country: "Pakistan",
      street: "234",
    },
  ],
  skills: ["Html", "CSS", "JS"],
});

console.log(students);
