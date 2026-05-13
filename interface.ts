interface IUser{
    name: string;
    age: number;
}
interface IUserWithRole extends IUser{
    role: 'Admin' | 'Guest'
}

const user1: IUserWithRole = {
  name: "saif",
  age: 200,
  role: "Admin",
};
console.log(user1)