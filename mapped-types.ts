// mapped types
// type er upore kivabe loop/map apply kora jai take mapped type bole
// map kivabe kaaj kore ta aktu deakhe naw
const arrayNumber: number[] = [1, 4, 6];
const arrayString: string[] = ["1", "4", "6"];

const arrayOfStringUsingMap: string[] = arrayNumber.map((num) =>
  num.toString(),
);
// console.log(arrayOfStringUsingMap)

type AreaOfNum = {
  height: number;
  width: number;
};
// type AreaOfString={
//     height:string;
//     width:string;
// }

// ai same jinish ta map use kore niche korlam
// type AreaOfString = {
//   [key in "height" | "width"]: string;
// };

// aikhne "height" | "width" hardcoded vabe na likhe "AreaOfNum" er maddhome likhlam 
// type AreaOfString ={
//     [key in keyof AreaOfNum]:string
// }

// niche aita ke aro next level e newer jonno generic use kora holo 
type AreaOfString<T> = {
  [key in keyof T]: T[key];
};

const area1: AreaOfString<{ height: string; width: number }> = {
  height: "40",
  width: 90,
};
