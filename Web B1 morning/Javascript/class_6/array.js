// Array
let names = ["kamran", "muhib", "ahmad", "salman"];

// console.log(names);

// console.log(names.length);
// read operation
// console.log(names[2]);
// console.log(names[3]);

// create operation
// names[2] = "mohsin";

// console.log(names);

// push method: add item in end
// names.push("jawad");
// names.push("salman");
// console.log(names);

// unshift method : add item in start
// names.unshift("noman");
// names.unshift("faheem");
// console.log(names);

// pop method: remove item from end
// names.pop();
// names.pop();
// console.log(names);

// shift method: remove item from start
// names.shift();
// names.shift();
// console.log(names);

// slice mehod : extract items from an array
// names.slice(start, end)
// end parameter: excluded
// return new array
// let subarray = names.slice(2);
let subarray = names.slice(1, 2);
// console.log(subarray);

// console.log(names);

// sort method
// console.log(names.sort());

// reverse method
// console.log(names.reverse());

// concat method
let names_2 = ["first", "second", "third"];
// let newArray = names.concat(names_2);
// let newArray = names_2.concat(names);
// console.log(newArray);

// indexOf method
// names.push("mohsin");
// console.log(names);

// console.log(names.indexOf("mohsin"));

// includes method
// return: boolean
// console.log(names.includes("Muhib"));

// splice method
console.log(names);
// names.splice(1, 1);
// names.splice(1, 1, "waseem");
names.splice(1, 0, names_2);

console.log(names);
