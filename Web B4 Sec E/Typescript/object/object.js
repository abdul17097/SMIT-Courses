"use strict";
// Object
Object.defineProperty(exports, "__esModule", { value: true });
var userDetails = {
    fname: "test",
    lname: "khan",
    age: 23,
    getFullName: function () {
        return "First Name: ".concat(this.fname, " Last Name: ").concat(this.lname);
    },
    gender: "male",
};
console.log(userDetails.getFullName());
console.log(userDetails);
