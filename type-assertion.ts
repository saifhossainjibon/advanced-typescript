let anything: any;
anything=123;
(anything as number).toFixed(2)

const kgTogram = (input: string | number) => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `concerted output ${Number(value) * 1000}`;
  }
};
const res1 =kgTogram(2) as number;// aikhen 100% sure number value jacce tai type assertion koreci
const res2 =kgTogram("2 kg") as string;// aikhen 100% sure string value jacce tai type assertion koreci
console.log({res1}, {res2})
// anther example 
type CustomError ={
    massage:string;
}
try{

} catch(err){
    console.log((err as CustomError).massage)
}

