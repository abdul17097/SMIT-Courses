// "use strict";
const userDetails = {
  first_name: "abdul",
  last_name: "musavir",
  age: 24,
  gender: "male",
  //   getUserData: () => {
  //     // console.log(this.first_name, this.last_name, this.age);
  //     console.log(this.first_name);

  //     // console.log(`first_name: abdul, last_name: musavir`);
  //   },
  getUserData: function () {
    // console.log(this.first_name, this.last_name, this.age);
    console.log(this.first_name);

    // console.log(`first_name: abdul, last_name: musavir`);
  },
};

// console.log(userDetails);

// console.log(userDetails.first_name);
userDetails.getUserData();

// console.log(userDetails);

console.log(this);
// this.alert("Hello world!");

// x = 10;
// console.log(x);

function dispay() {
  y = "laksdjf";
  console.log(y);
}
dispay();
