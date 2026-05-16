interface Developer<T, X = null> { // aikhne T diye smartWatch er value dynamically dewa holo
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    rleaseYear: number;
  };
  smartWatch: T; // aikhne T diye smartWatch er value dynamically newa holo
  bike?: X;
}

interface BrandCharaWatch {
  heartRate: string;
  stopWatch: boolean;
}
interface appleWatch {
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  aiFeature: boolean;
}

// Example no 1
const poorDeveloper: Developer<BrandCharaWatch, {}> = {
  // aikhene "BrandCharaWatch" watch use kore amra Developer interface e jai T niyecilam
  // saita pass kore dicci aikhne poor developer er jonno smartWatch 2 ta value
  //  and {} er X value dewa hoise kintu aikhne X er value(array) te kicu nai
  name: "saif",
  salary: 200000,
  device: {
    brand: "Apple",
    model: "M1 air",
    rleaseYear: 2020,
  },
  smartWatch: {
    heartRate: "100",
    stopWatch: true,
  },
};
// Example no 2
const richDeveloper: Developer<
// aikhne Developer<> er vitore smartWatch er jonno alada akta type dewa hoise jaikhn 4 ta value genaralised
//  and {} er 
  appleWatch,
  {
    brand: "yamaha";
    engineCapacity: "200cc";
  }
    //  upore {} er X value faka dewa hoise
    //  kintu aikhne X er value(array) te brand, engineCapacity dewa ace
> = {
  name: "saif",
  salary: 200000,
  device: {
    brand: "Apple",
    model: "M1 air",
    rleaseYear: 2020,
  },
  smartWatch: {
    heartRate: "100",
    callSupport: true,
    calculator: true,
    aiFeature: true,
  },
};
console.log({ poorDeveloper }, { richDeveloper });
