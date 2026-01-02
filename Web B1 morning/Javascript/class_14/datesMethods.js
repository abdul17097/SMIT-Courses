// Dates Methods
let currentDate = new Date();
let year = currentDate.getFullYear();
let date = currentDate.getDate();
let month = currentDate.getMonth();
console.log(year, date, month + 1);
let fullFormatedDate = `${date}-${month + 1}-${year}`;
console.log(fullFormatedDate);

console.log(currentDate);

let dates = new Date("2020-05-17");
console.log(dates);
console.log(dates.getMonth() + 1);

let mintus = currentDate.getMinutes();
let hours = currentDate.getHours();
let seconds = currentDate.getSeconds();
let milliseconds = currentDate.getMilliseconds();
console.log(`Time is : ${hours} : ${mintus} : ${seconds} : ${milliseconds}`);
