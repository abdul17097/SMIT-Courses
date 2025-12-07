// Javascript Dates

let currentDate = new Date();
let hours = currentDate.getHours();
let min = currentDate.getMinutes();
let second = currentDate.getSeconds();
console.log(hours, ":", min, ":", second);

let date = currentDate.getDate();
let year = currentDate.getFullYear();
let month = currentDate.getMonth();
// console.log(day, year, month + 1);
// Templete Literal
console.log(`${date}-${month + 1}-${year}`);

// const d = new Date("October 13, 2014 11:13:00");
// console.log(d);
// year: 0 to 11
const newDates = new Date();
// let newMonth = newDates.setMonth(1);
// let newDate = newDates.setDate(10);
let newYear = newDates.setFullYear(2024, 10, 3);
console.log(newDates);
// anonymous function
// setInterval(callback function, time)

// let para = document.getElementById("date");

// setInterval(
//     () => {
//   const now = new Date(); // Get the current date and time
//   const hours = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = now.getSeconds();

//   // Format the time to display as HH:MM:SS
//   const timeString = `${hours}:${minutes}:${seconds}`;

//   // Update the paragraph with the current time
//   para.innerHTML = timeString;
// }
// , 1000);
