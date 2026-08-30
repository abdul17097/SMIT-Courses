// let student1 = "Ahmed";
// let student2 = "Waqas";
// let student3 = "Saqib";
// let student4 = "Ali";
// let student5 = "Ihtisham";

// let students = "Ahmaed", "Waqas", "Saqib"

let students = ["Ahmed", "Waqas", "Ali", "saqib", "umar"];
// console.log(students.length);

// console.log(students[1]);
// console.log(students[3]);
// console.log(students[students.length - 1]);

// console.log(students);
// add last element in array
// students.push("hello");
// students.push("hello123");

// console.log(students);

// remove last element in array
// students.pop();

// console.log(students);

// add first element in array
// students.unshift("arshid");

// console.log(students);

// remove first element in array
// students.shift();

// console.log(students);

// array_name.slice(start_index, ending_index)
// starting_index : included
// ending_index : excluded
// let top_10_student = students.slice(0, 1);
// console.log(students.slice(0, 2));
// console.log(students.slice(1, 4));
// console.log(students);

// students[2] = "Naseeb";
// students[10] = "hello";

console.log(students);

// students.splice(starting_index, delete_count, add_element | replace_element);

// delete 'saqib'
students.splice(3, 1);
console.log(students);
