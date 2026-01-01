// PadStart()
// padEnd()
// repeat()

let phoneNumber = "1234545454";

let addPakCode = phoneNumber.padStart(14, "+92 ");

// console.log(addPakCode);

function addPrefix(phone, len) {
  return phone.padStart(len, "+92 ");
}

// console.log(addPrefix("3453454567", 14));
// console.log(addPrefix("3453454567", 14));
// console.log(addPrefix("3453454567", 14));
// console.log(addPrefix("3453454567", 14));
// console.log(addPrefix("3453454567", 14));
// console.log(addPrefix("3453454567", 14));
// console.log(addPrefix("3453454567", 14));

// repate()
let text = "hello world ";

// console.log(text.repeat(3));

// replace()
let greet = "How are you? How are you?";

// console.log(greet.replace("are", "r"));
// console.log(greet.replaceAll("are", "r"));

// split() : convert string into an array

let message = "how are you";
// console.log(cta);

// console.log(message.split(" "));

// join(): it convert array into string
let cta = message.split(" ");
let rs = cta.reverse();
// console.log(cta);
// let cts = cta.join("|");
// console.log(cts);

console.log(rs);

console.log(rs.join(" "));
