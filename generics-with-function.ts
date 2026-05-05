// const createArrayWithString = (value: string) => [value];
// const createArrayWithNumber = (value: number) => [value];
// const createArrayWithUserObject = (value: { id: number; name: string }) => [
//   value,
// ];
// const arrString = createArrayWithString("Apple");
// const arrNumber = createArrayWithNumber(122);
// const arrObj = createArrayWithUserObject({
//   id: 122,
//   name: "saif",
// });

// jehetu amra bhujhe gesi value ak ak somoy ak ak rokom aste pare tai amra generic use korbo
const createArrayWithGeneric = <T>(value: T) => [value];
const arrString = createArrayWithGeneric("Apple");
const arrNumber = createArrayWithGeneric(122);
const arrObj = createArrayWithGeneric({
  id: 122,
  name: "saif",
});
// normal type 
const createArrayWithTuple = (param1: string, param2: string) => [
  param1,
  param2,
];
// generic type 
const createArrayWithGenericTuple = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2,
];
const res1= createArrayWithGenericTuple(12,11)

// another example
const addStudentToCourse=<T>(studentInfo:T)=>{
    return {
        course:"Next Level Programming",
        ...studentInfo
    }
}
const stu1={
    id:123,
    name:"saif",
    hasPen: true,
}
const stu2={
    id:123,
    name:"saif",
    hasCar: true,
    isMarried:true
}
const res2=addStudentToCourse(stu1)
const res3=addStudentToCourse(stu2)
console.log(res2,res3)
