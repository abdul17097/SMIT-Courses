// Rest Parameter

function numbers(...rest) {
  console.log(rest);
}

numbers(1, 2, 3, 4, 5);

const { gender, city, ...remain } = {
  name: "sadf",
  age: 23,
  gender: "male",
  city: "peshawar",
};
console.log(remain);

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3, d: 4 };
const combined = { ...obj1, ...obj2 };
console.log(combined);
console.log(obj2);

const a1 = [1, 2];
const a2 = [3, 4];
const merged = [...a1, ...a2];
console.log(merged);
