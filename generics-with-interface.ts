interface Developer<T,X=null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    rleaseYear: number;
  };
  smartWatch: T;
  bike?:X;
}

interface BrandcharaWatch{
  heartRate: string;
  stopWatch: boolean;
}
interface appleWatch{
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  aiFeature: boolean;
}

// Example no 1
const poorDeveloper: Developer<BrandcharaWatch, {}> = {
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
const richDeveloper: Developer<appleWatch,{
    brand:'yamaha';
    engineCapacity:'200cc';
}> = {
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
console.log({poorDeveloper},{richDeveloper})