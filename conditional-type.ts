//  conditional type: je type confition er upor nirvorsil   

// example 1 
type A=null
type B=undefined
// aikhne amer type C , type A, B er upor nirvorshil
// aikhne A extends kore null ke , number ke na  tai baita false hobe & porer condition e jabe 
// porer condition e "B extends undefined" aita true aijonno true return korbe
type C = A extends number ? true : B extends undefined ? true: false; 

// এটাকে যদি simple if else logic এ বুঝাই 
// if (A is number) {
//   C = true
// }
// else {
//   if (B is undefined) {
//     C = true
//   } else {
//     C = false
//   }
// }
// example 2 
type RichPeopleVehicle={
    bike: string;
    car: string;
    ship: string;
}

type CheckVehicle<T>=T extends "bike" | "car" |"ship" ? true:false
// upore normal way te likhlam niche mordern aproach e likhsi 
// type CheckVehicle<T>=T extends keyof RichPeopleVehicle? true:false

type hasBike=CheckVehicle<"bike">

// ---------------------- 
// RichPeopleVehicle object er moddhe 3 ta key ase
/*
type RichPeopleVehicle = {
  bike: string;
  car: string;
  ship: string;
}

এখানে object এর ভিতরে ৩টা vehicle name আছে 👇

bike
car
ship
type CheckVehicle<T> =
  T extends "bike" | "car" | "ship"
    ? true
    : false

এখানে কি হচ্ছে? 😄

👉 T extends "bike" | "car" | "ship"

মানে check করছে:

"T কি এই ৩টার মধ্যে আছে নাকি?" 🤔

যদি থাকে 👉 true
না থাকলে 👉 false

type hasBike = CheckVehicle<"bike">

এখানে T = "bike"

তাহলে internally এমন check হবে 👇

"bike" extends "bike" | "car" | "ship"

✅ হ্যাঁ আছে

তাই result:

type hasBike = true

আর যদি এমন হতো 👇

type hasPlane = CheckVehicle<"plane">

তাহলে check করতো:

"plane" extends "bike" | "car" | "ship"

❌ নাই

তাই result হতো false

এখন নিচের modern approach 👇

type CheckVehicle<T> =
  T extends keyof RichPeopleVehicle
    ? true
    : false

এখানে keyof RichPeopleVehicle automatically নিয়ে আসে 👇

"bike" | "car" | "ship"

মানে manually লিখতে হচ্ছে না 😄

🎯 সহজ ভাষায়:

CheckVehicle check করে কোনো নাম object এর key এর ভিতরে আছে কিনা।
থাকলে true, না থাকলে false 🚀
*/