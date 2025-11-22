// let names = "abud";

// let names = ["abdul", "kamran", 123, "waqas", "arif", true];
// let studentName = new Array("abdul", "kamran", "waqas", "arif");
// IQ
// console.log(typeof names);
// console.log(typeof studentName);

// console.log(typeof names[5]);
// console.log(studentName[5]);

// const fruits = ["banana", "apple", "orange", "mango", true, 123];

// console.log("Fruits:" + fruits);
// fruits[1] = "peach";
// console.log("Fruits:" + fruits);

// const fruits_1 = fruits;

// fruits_1[5] = "kuch bi";
// console.log("Fruits_1:" + fruits_1);

// console.log(fruits.length);

// Array Methods
console.log("Array Methods");

// console.log(fruits);

// add last item
// fruits.push("nye value");
// console.log(fruits);

// console.log(fruits[fruits.length - 1]);
// remove last item
// fruits.pop();
// console.log(fruits);

// remove first item
// fruits.shift();

// add firt item
// fruits.unshift(true);
// console.log(fruits);

// IQ
// slice method is used to get multiple values with new array
// fruits.slice(1,4):
// 1 is inculeded
// 4 is excluded
// console.log(fruits.slice(1, 4));
// console.log(fruits);

// finde index of value
// console.log(fruits.indexOf("mango"));

// let names_1 = ["abdul", "kamran", 123, "waqas", "arif"];
// let names_2 = ["maaz", "noman", 1234, "waqasn123", "arif jawan", true];

// let allNames = names_1.concat(names_2, fruits);
// console.log(allNames);

// console.log(names_1);
// console.log(names_2);

// splice: add, delete, replace, get
// fruits.slice(1,4):
// 1 is inculeded
// 4 is excluded
// console.log(fruits);

// console.log(c);
// var c;
// c = 11;
// console.log(c);

// let a = 10;
// let b = a; // store value
// b = 12;
// console.log(a);
// console.log(b);

// const list_1 = [1, 4, 6, 4];
// const list_2 = list_1;
// list_2[1] = 3;
// console.log(list_1);

// console.log(list_1);

// Splice Method
// console.log(fruits.sort());
// console.log(fruits.reverse());
const fruits = ["banana", "apple", "orange", "mango", true, 123];
// console.log(fruits.length);

// fruits[1] = "kuch bi";
// fruits.splice(start, deletecount, end)
fruits.splice(3, 2, "kuch bi");
console.log(fruits);
