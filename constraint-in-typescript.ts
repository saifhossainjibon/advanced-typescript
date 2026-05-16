// Constraint: basic rules dewa 
// example

// const addStudentToCourse=<T>(studentInfo:T)=>{ 
// uporer line er function e amra jokhon data dicilam tokhon object er viotre jekono information diya
// pathiya dite partam, jar karone aikhne boro akta vul hoto
// suppose kaw jodi id name chara diye dito tahole saita funtion ta accept kore nito akhon name id chara 
// amra chinbo kivabe kon student
// akhon amon jodi hoy generic er moddhe koekta information amder lagbai tahole Constraint set kore dite hobe
//  id and name thakte hobe must be er pore r kicu thakle amra saita accept korbo
//  aijonno amra akta type define korbo and T ke extends kore dibo
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
    dob:"09 july 1998",
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