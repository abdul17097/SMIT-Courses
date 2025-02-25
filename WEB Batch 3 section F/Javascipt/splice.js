let numbers = [1, 2, 3, 4, 5, 6];

// var output = numbers.splice(1, 0);
// console.log(output);
// numbers.splice(2, 1, 10, "hello");
// console.log(numbers);
// numbers.splice(2, 2);
// numbers.splice(1, 1, 9);
// numbers.splice(4, 0, "something");
// console.log(numbers);

// Remove 2 elements starting from index 1.
// let removedElements = numbers.splice(0, 3);
// console.log(removedElements);
// console.log(numbers);

//Remove 1 element and add new elements.
// let replacedElement = numbers.splice(2, 1, 10);
// console.log(replacedElement);
// console.log(numbers);

// Add elements without removing any.
// numbers.splice(2, 0, 8, 9);
// console.log(numbers);

// remove to the end of the array.
// let removedToEnd = numbers.splice(2);
// console.log("removedToEnd:", removedToEnd);
// console.log("Modified numbers:", numbers);

// let subject = ["Math", "Physics", "Chemistry", "Biology"];
// let updateSubject = subject.splice(2, 0, "hello", "world");
// console.log(updateSubject);
// console.log(subject);

// let food = ["Milk", "Bread", "Eggs", "Butter", "Juice"];
// food.splice(3, 1, "cheese");
// console.log(food);

// if (true) {
//   var test = "I'm accessible outside!";
// }
// console.log(test);

// function check() {
//   let test = "I'm accessible inside!";
// }

// console.log(test);

// slice
// exiting array
let subject = ["Math", "Physics", "Chemistry", "Biology"];

// var output = subject.slice(-3);

// console.log(output);
// console.log(subject.length);
// console.log(subject);
// subject.pop();
// console.log(subject);

// var age = 45;
// var studentsAge = [23, 28, 12, 34, 45, 67, 24];

// for (var j = 0; j < studentsAge.length; j++) {
//   if (studentsAge[j] === age) {
//     console.log("you are exit");
//     break;
//   }
// }

for (var i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
