// As const assertion

// enum UserRoles{
//     Admin ="Admin",
//     Editor= "Editor",
//     Viewer="Viewer",
// };
const UserRoles = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;
// UserRoles.Admin='Guest';  //aikhne amra admin er value change korte parci jaita kora jabe na
// aijonno as Const use korbo

// as const use korar fole aikhne sobar samne "readonly" modifier cole ase
/*
    readonly Admin :"Admin",
    readonly Editor: "Editor",
    readonly Viewer:"Viewer",

    1. typeof operator
    2. keyof operator
    amra niche UserRoles ke type hisebe bebohar korte caile 
    const user ={
    id:122,
    name:"saif"
    }
    typeof User;
    {
    id: number;
    name: string;
    }
    typeof UserRoles{
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer",
    }
    keyof typeof UserRoles
    "Admin" | "Editor" | "Viewer"
*/

const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else {
    return false;
  }
};
const isEditPermissable = canEdit(UserRoles.Editor);
console.log(isEditPermissable);
