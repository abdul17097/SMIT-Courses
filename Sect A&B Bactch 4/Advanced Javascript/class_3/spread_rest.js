// spread with Array
const numbers_1 = [1, 3, 5, 6, 3];
const numbers_2 = [4, 1, 7, 0, 4];

// 1,3,5,6
// 4,6,7,8
const newArray = [...numbers_1, ...numbers_2, 2, 4, 6];
const stu_names = ["fahad", "khsif"];
const modify_stu_names = [...stu_names, "waqas"];
// console.log(newArray);

// spread with Object

const userDetails = {
  id: 2,
  name: "test",
  email: "test@gmail.com",
};

const userAddress = {
  country: "pak",
  city: "peshawar",
  postal_code: 32423,
  street: "kuch bi",
  displayCity: function () {
    console.log(this.city);
  },
};
// userAddress.displayCity();

const fullUserDetails = {
  ...userDetails,
  ...userAddress,
  gender: "male",
};
// console.log(fullUserDetails);

const data = [1, 1, 1, 1, 1, 1];

const mapResult = data.map((item) => item);
const filterResult = data.filter((item) => item);
const findResult = data.find((item) => item);

console.log(mapResult);
console.log(filterResult);
console.log(findResult);
