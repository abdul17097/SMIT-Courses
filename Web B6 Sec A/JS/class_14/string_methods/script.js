// split method: convert string into an array

let skills = "html,css,javascript,script";
let skills_2 = "html|css|javascript|script, xyz|abc";
let skills_3 = "html#css#javascript#script#xyz#abc";

let skills_list = skills.split(",");
let skills_list_1 = skills.split("");
let skills_list_2 = skills_2.split("|");
let skills_list_3 = skills_3.split("#");

// console.log(skills_list_1);
// console.log(skills_list_2);
// console.log(skills_list_3);

// console.log(skills_list);

// join: conver array into string

let message = ["Welcome", "to", "SMIT"];

// let convert_into_string = message.join(" ");

// console.log(convert_into_string);

// interviw question

// let word = "madam";
let word = prompt("Enter your input");

let conert_into_array = word.split("");
let reverse_array = conert_into_array.reverse();
let convert_into_string = reverse_array.join("");
// console.log(word);

if (word === convert_into_string) {
  console.log("This string Palondrom");
} else {
  console.log("This string is not Palondrom");
}
// console.log(reverse_array);
// console.log(convert_into_string);

// console.log(conert_into_array);
