// dynamically genaralised kora
// const fdName: string[] = ["saif", "rafi", "safi"];
// const fdName: Array<string> = ["saif", "rafi", "safi"];

// const roll: number[] = [11, 23, 13];
// const roll: Array<number> = [11, 23, 13];

// const isEligible: boolean[] = [true, false,true];
// const isEligible: Array<boolean> = [true, false,true];

// type GenericArray = Array< string | number | boolean>
type GenericArray<value> = Array<value>;
const fdName: GenericArray<string> = ["saif", "rafi", "safi"];
const roll: GenericArray<number> = [11, 23, 13];
const isEligible: GenericArray<boolean> = [true, false, true];

// type Cordinates = [number, number]
type Cordinates<num1, num2> = [num1, num2];
const cordinates1: Cordinates<number, number> = [20, 30];
const cordinates2: Cordinates<string, string> = ["20", "30"];


type User ={
  name:string;
  age:number
}
// object
const userList: GenericArray<User> = [
  {
    name: "saif",
    age: 22,
  },
  {
    name: "hossain",
    age: 24,
  },
  {
    name: "jibon",
    age: 27,
  },
];
console.log(userList)