// Constraint: basic rules dewa 
// example
type student ={id:number; name:string; dob:string; classs:string}
const addStudentToCourse=<T extends student>(studentInfo:T)=>{
    return {
        course:"Next Level Programming",
        ...studentInfo
    }
}
const stu1={
    id:123,
    name:"saif",
    dob:"09 jusy 1998",
    classs:"university",
    hasPen: true,
}
const stu2={
    id:123,
    name:"jibon",
        dob:"09 jusy 1998",
    classs:"university",
    hasCar: true,
    isMarried:true
}
const stu3={
    id:12,
    name:"hossain",
        dob:"09 jusy 1998",
    classs:"university",
    hasCar: true,
}
const res2=addStudentToCourse(stu1)
const res3=addStudentToCourse(stu2)
const res4=addStudentToCourse(stu3)
console.log(res2,res3,res4)