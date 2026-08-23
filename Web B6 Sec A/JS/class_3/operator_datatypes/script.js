/* 
Operators: (operator , operant)
operator: (+,-,*, //, **, %)
operent: data on which perfome operations

Expression: combinition of operent & opertor
2+4
2,4 -> operent
+ -> operator

= => assignment operator

comparasion operators:
== -> equality (don't check datatype)
=== -> equality (check datatype)


> : grater then
< : less then
>= : grater then or equal
=< : less then or equal
!= : not equal (don't check datatype)
!== : not equal (check datatype)


++ -> increment
-- -> decrement

value ++ -> increment (postfix)
value -- -> decrement (postfix)
++ value -> increment (prefix)
-- value  -> decrement (prefix)

value += 2 => increment by 2 (value = value + 2)
value -= 2 => decrement by 2 (value = value - 2)

console.log(2++); // 3 (2 + 1)
console.log(2--); // 1 (2 - 1)

*/

// let a = 10;
// let b = 20;

// Arthematic operator
// console.log(a + b); // 30
// console.log(a - b); // -10
// console.log(a * b); // 200
// console.log(a / b); // 2
// console.log(b % a); //

// BODMAS: (bracket, order, division, multiplication, addition, suctraction)

// let result = 2 * (4 + 3) / 7;

// console.log(result);

let input = 3;
// console.log(input ++); // 3
// console.log(input); // 4
// console.log(INPUT);

// console.log(++input);
// console.log(--input);

let value = 5;
// value = value + 2; // value = 5 + 2;
// value += 2
// console.log(value);

// value = value - 2; // value = 5 - 2;
value -= 3;
console.log(value);

// int a = 10;
// a = "hello"

// Data Types
// typeof value -> to find data type
// let c = 234;
// let c = 23.4;
// let c = -23.4;
// let c = -234;

// console.log(typeof c); // number

// let name = "Test";
// let name = 'Test';
// console.log(name);
// let intro = 'My name is "Test"';
// let intro = "My name is 'Test'";
let firstName = "Test";
let lastName = "Khan";
// String Cancatinaiton (+) symbol
let fullName = "My name is " + firstName + lastName;
console.log(fullName);

// Templete Literals

/*
    Syntax:
    `My name is ${firstName} ${lastName}`
*/

console.log(`My name is ${firstName} ${lastName}`);

// let names = "test","hello"
