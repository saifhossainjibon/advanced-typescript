// keyOf operator is a type operator

type RichPeopleVehicle={
    car :string;
    bike:string;
    cng: string;
}

type MyVehicle1='bike' | 'car' | 'cng';
type MyVehicle2=keyof RichPeopleVehicle;

const myVehicle : MyVehicle2='bike'

type UserType={
    id: number;
    name:string;
    address:{
        city: string;
    }
}
// upore amra keyof somporke jansi niche amra janbo keyof constraint 
const user:UserType={
    id: 2222,
    name:"saif",
    address:{
        city: "dhaka"
    }
}
// const myName= user.name // amra aita onno vabeo likhte pari
const myId= user['id'];
const myName= user['name'];
const myAddress= user['address'];
// console.log({myId,myName,myAddress})

// const getPropertyFromObj = (obj:UserType, key:keyof UserType)=>{
    const getPropertyFromObj =<X> (obj:X, key:keyof X)=>{
    return obj[key] // aikhe error dewer karon holo amra je aikhne obj er vitore jai value ta 
    // pathabo saita ki ase nake saita sure hote parce na aijonno amra ikhne keyOf constaints use korbo
    //  aijonno upore amra type define kore dibo
} 
const result1=getPropertyFromObj(user,"name") 
console.log(result1)

const product={
    brand: "hp"
}

const result2=getPropertyFromObj(product,"brand")
