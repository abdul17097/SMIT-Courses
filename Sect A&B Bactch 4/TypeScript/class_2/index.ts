function displayName(name: string): string {
  return name;
}

displayName("test");

let b: string | number = "hello";
b = 34;

console.log(b);
// nothing return
// function addTwoNum(a: number, b: number): void {
//   console.log(a + b);
// }

// return array
// function addTwoNum(a: number, b: number): string[] {
//   return []
// }

// return object
// function addTwoNum(a: number, b: number): { a: number; b: number } {
//   return { a, b };
// }

// return boolean
// function addTwoNum(a: number, b: number): boolean {
//   let result = a + b;
//   return result > 5;
// }

// return function
// function addTwoNum(a: number, b: number): () => void {
//   return () => {};
// }

// addTwoNum(2, 4);

// function mutipleTwoNum(a: number = 12, b: number): void {
//   console.log(a * b);
// }

// addTwoNum(2, 4);

// not accept union
// interface Status = "pending" | "success" | "promises";
// accept union
export type Status = "pending" | "success" | "promises";

interface UserDetails {
  username: string;
  email: string;
  age: number;
  admin: boolean;
  address: {
    city: string;
    postalCode: number;
  };
  displayName: () => string;
  status?: Status;
}

interface UserDetails {
  id?: string;
}

const userDetails: UserDetails = {
  displayName() {
    return "er";
  },
  username: "test",
  email: "test@gmail.com",
  age: 23,
  admin: true,
  address: {
    city: "peshawar",
    postalCode: 234234,
  },
};

console.log(userDetails);

export {};
