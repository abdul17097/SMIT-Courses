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

// console.log(mapResult);
// console.log(filterResult);
// console.log(findResult);

// rest
// function sum(...data) {
//   const total = data.reduce((acco, cur_val) => acco + cur_val);
//   console.log(total);
// }
// sum(2, 4, 3, 5, 6, 3, 4, 3);

const { password, ...rest } = {
  id: 1,
  name: "test",
  email: "test@gmail.com",
  password: "4567uiopdgfghjkldfgrtyuiopgdgh56789o0pdgjjkl",
  gender: "male",
  profile_img: "http:localhost:5099/profileImage",
};

const numbers = [3, 5, 6, 7];
const new_nums = [...numbers, 4];
const updateUserDetail = {
  ...rest,
  age: 18,
  // displayName: function () {
  //   console.log(this.name);
  // },
  displayName() {
    console.log(this.name);
  },
};

// enhance object literal
// const frontedData = { email, gender, profile_img, name };

// updateUserDetail.displayName();

// Ternary Operator
const isLogin = false;

// isLogin === true
// isLogin
//   ? console.log("You Have Login Successfully!")
//   : console.log("Plese Login First then Try!");

// condition ? success : Faild

// nullish coalescing
// null
// undefined

// const role = null;
const role = undefined;

const showName = role ?? "user";

console.log(showName);

// optional Chaning
const productDetails = {
  id: 4,
  title: "test product",
  description: "test Description",
  price: 433,
  colors: {
    red: {
      primary: "#5678i",
      secondry: "#5678",
    },
    pink: "#456788",
    lightBrown: "#78678",
  },
  images: [
    "http://localhost:5000/image_1",
    "http://localhost:5000/image_2",
    "http://localhost:5000/image_3",
  ],
};
const productData = productDetails?.color?.red?.lightSecondry;
console.log(productData);
