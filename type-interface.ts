type User = {
  name: string;
  age: number;
};
type Role = {
  role: "admin" | "user";
};
type userWithRole = User & Role;

// interface
interface Iuser {
  name: string;
  age: number;
}

interface IuserWithRole extends Iuser {
  role: "admin" | "user";
}

// const user1: userWithRole = {
//   name: "saif",
//   age: 20,
//   role: "admin",
// };
const user1: userWithRole = {
  name: "saif",
  age: 20,
  role: "admin",
};
const user2: Iuser = {
  name: "jibon",
  age: 10,
};
// -------------function e jaivabe type interface use kora hoy-------------
// using type aliasing
// type Add =(num1:number, num2:number)=>number
// using interface:
interface Add {
  (num1: number, num2: number): number;
}
const add: Add = (num1, num2) => {
  return num1 + num2;
};
// example 2 with type aliasing
// type Friends=string[];
// const friends :Friends=['a','b','c']

// example 3 with type interface
interface Ifriends {
  [index: number]: string;
}
const friends: Ifriends = ["a", "b", "c"];
