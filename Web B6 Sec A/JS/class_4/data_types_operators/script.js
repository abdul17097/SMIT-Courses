/*
Data Types
-> There are types data type
> Primitive : its hold single value
> Non Primitive : its hold group of values

-> number
-> string
-> boolean // true | false
-> undefined
-> null
-> Symbol


comparasion operators:
== -> equality (don't check datatype)
=== -> equality (check datatype)


> : grater then
< : less then
>= : grater then or equal
=< : less then or equal
!= : not equal (don't check datatype)
!== : not equal (check datatype)

Logical Operator:
&&: And Logical operator
|| : Or Logical Operator
! : Not Operator


*/

// Comparaision Operator

// let a = 20;
// let b = "20";
// let b = 20;

// Equality
// console.log(a == b); // true
// console.log(a === b); // false

// Grater then | Less Then

// console.log(a > b);
// console.log(a < b);
// console.log(a >= b);
// console.log(a !== b);

// Logical Operator

let email = "test@gmail.com";
let password = "asdf123";
let termcondtion = true;

// Table (AND)
/*
true true = true
false false = false
true false = fasle
false true = fasle
*/
// console.log(
//   email === "test@gmail.com" && password === "asdf123" && termcondtion == true,
// );

// Table (OR)
/*
true true = true
false false = false
true false = true
false true = true
*/

console.log(
  email === "test@gmail.com" && password === "asdf123" && termcondtion == true,
);

// Data Types (Primitive)

// let a = 10;
// console.log(typeof a);

// let name = "Test";
// console.log(typeof name);

// let isLogin = true;
// console.log(typeof isLogin);

// let b;
// console.log(b);
// console.log(typeof undefined);

// let c = null;
// console.log(c);
// console.log(typeof null);

// let d = Symbol("hello");
// let e = Symbol("hello");

// console.log(typeof d);

// console.log(d == e); // false
