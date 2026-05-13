type User = {
  name: string;
  age: number;
};
type Role = {
  role: "admin" | "user";
};
type userWithRole = User & Role;

// ------------interface---------------
interface Iuser {
  name: string;
  age: number;
}
interface IuserWithRole extends Iuser {
  role: "admin" | "user";
}


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
  (num1: number, num2: number): number
}
const add: Add = (num1, num2) => {
  return num1 + num2;
};
// example 2 with type aliasing
type Friends=string[];
const friends1 :Friends=['a','b','c']

// example 2 with type interface
interface Ifriends {
  [index: number]: string;
}
const friends2: Ifriends = ['a','b','c'];

interface IData {
  [index: string]: number;
}
const data: IData = {
  age: 20,
  marks: 90,
  score: 100
};
console.log(data)