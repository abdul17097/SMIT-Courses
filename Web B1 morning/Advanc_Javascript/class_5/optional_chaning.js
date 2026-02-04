// Optional Chaining
// const studentDetails = {
//   id: 1,
//   stu_name: "test",
//   age: 24,
//   //   addresss: {
//   //     city: "Peshawar",
//   //     country: "Pakistan",
//   //   },
// };

// console.log(studentDetails?.addresss?.city);

const users = [
  {
    id: 1,
    name: "Alice",
    age: 28,
    address: {
      city: "New York",
      country: "USA",
      zip: "10001",
    },
    preferences: {
      theme: "dark",
      notifications: true,
    },
  },
  {
    id: 2,
    name: "Bob",
    address: {
      city: "London",
      // country is missing
      // zip is missing
    },
    preferences: {
      // theme is missing
      notifications: false,
    },
  },
  {
    id: 3,
    name: "Charlie",
    age: 35,
    // address is completely missing
    preferences: {
      theme: "light",
      // notifications is missing
    },
  },
  {
    id: 4,
    name: "Diana",
    age: 22,
    address: {
      country: "Canada",
      // city and zip are missing
    },
    // preferences is missing
  },
];

users?.forEach((item) => {
  if (item?.address?.city) {
    console.log(item?.address?.city);
  } else {
    console.log("Does not Exit!");
  }
});
