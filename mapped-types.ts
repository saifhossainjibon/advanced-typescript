// mapped types 

// map
const arrayNumber: number[]=[1,4,6];
const arrayString: string[]=["1","4","6"];

const arrayOfStringUsingMap: string[]=arrayNumber.map((num)=>num.toString());
// console.log(arrayOfStringUsingMap)

type AreaOfNum={
    height:number;
    width:number;
}
// type AreaOfString={
//     height:string;
//     width:string;
// }

// type AreaOfString ={
//     [key in keyof AreaOfNum]:string
// }
type Area<T>={
    [key in keyof T]:T[key]
}

const area1:Area<{height:string;width:number}> ={
    height:"40",
    width:90,
}