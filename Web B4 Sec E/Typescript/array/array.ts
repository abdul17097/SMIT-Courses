let a: boolean;
a = true;
console.log(a);

// array
const array1: number[] = [1, 3, 4];
console.log(array1);

const arrayName: string[] = [];
arrayName.push("test");
console.log(arrayName);

arrayName.push("test2");

const studentRollNo: [number, string, boolean] = [101, "c-102", true];

console.log(studentRollNo);

const products: {
  id: number;
  title: string;
  price: number;
  isAvaliable?: boolean;
}[] = [
  {
    id: 1,
    title: "test",
    price: 123,
    isAvaliable: true,
  },
  {
    id: 3,
    title: "test3",
    price: 342,
  },
];

products.push({ id: 2, isAvaliable: false, price: 321, title: "test2" });

console.log(products);

export {};
