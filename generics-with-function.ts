const createArrayWithString = (value: string) => [...value];
const createArrayWithNumber = (value: number) => [value];
const createArrayWithUserObject = (value: { id: number; name: string }) => [
  value,
];
//uporer 3 ta function parameter hisebe akta element nibe and amke akta array baniya dibe
const arrString1 = createArrayWithString("Apple");
console.log(arrString1)
const arrNumber1 = createArrayWithNumber(122);
const arrObj1 = createArrayWithUserObject({
  id: 122,
  name: "saif",
});

// jehetu amra bhujhe gesi value ak ak somoy ak ak rokom aste pare tai amra generic use korbo
const createArrayWithGeneric = <T>(value: T) => [value];
//  jehetu aikhne dynamic type holo  value jaita aksomy number , aksomoy string, aksomoy object aijonno T nilam jehetu 
// value ta dynamic typed hobe aijonno <T> diya value ta dinamically recive korbo
const arrString = createArrayWithGeneric("Apple");
const arrNumber = createArrayWithGeneric(122);
const arrObj = createArrayWithGeneric({
  id: 122,
  name: "saif",
});

// amra niche tuple use kora shikhbo 
// normal type 
const createArrayWithTuple = (param1: string, param2: string) => [
  param1,
  param2,
];
//  upore amra 1 ta generic typed niacilam amra chaile 2 ,3 ta o nite pari
// generic type 
const createArrayWithGenericTuple = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2,
];
const res1= createArrayWithGenericTuple(12,11)

// another example
const addStudentToCourse=<T>(studentInfo:T)=>{ // aikhne student er information er array nilam and saita niche spread kore diye
  // new akta object banalam aikhne T dynamically object nicce
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
// console.log(res2,res3)
