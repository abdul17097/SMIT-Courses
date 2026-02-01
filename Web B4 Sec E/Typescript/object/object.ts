// Object

const userDetails: {
  fname: string;
  lname: string;
  age: number;
  //   getFullName: () => string;
  getFullName(): string;
  gender: string;
} = {
  fname: "test",
  lname: "khan",
  age: 23,
  getFullName: function () {
    return `First Name: ${this.fname} Last Name: ${this.lname}`;
  },
  gender: "male",
};

console.log(userDetails.getFullName());
console.log(userDetails);

export {};
