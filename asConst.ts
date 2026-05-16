// As const assertion

// enum UserRoles{
//     Admin ="Admin",
//     Editor= "Editor",
//     Viewer="Viewer",
// };
// enum deakhte JS er object er moto tai amra same way te akti object declare korbo niche

const UserRoles = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;
// UserRoles.Admin='Guest'; 
// aikhne amra admin er value change korte parci jaita kora jabe na
// aijonno as Const use korbo

// as const use korar fole aikhne sobar samne "readonly" modifier cole ase
/*
    readonly Admin :"Admin",
    readonly Editor: "Editor",
    readonly Viewer:"Viewer",
*/
    // 1. typeof operator
    // 2. keyof operator

    // amra niche UserRoles ke type hisebe bebohar korte caile 
    const user ={
    id:122,
    name:"saif"
    };
    typeof user;
    // aikhne typeof user likher pore typescript behind the scene nicher moto kore akta type declare korbe
    type user = {
    id: number,
    name: string,
    }
    // jehetu typeof diye amra propertyer type define korte partasi tahole amra ai 
    // typeof use kore UserRoles e use kori tahole amer behind the scene airokom akta 
    // key: value property pair create hobe

    // typeof UserRoles
    //{
    // Admin: "Admin",
    // Editor: "Editor",
    // Viewer: "Viewer",
    // }
    // tahole typeof mane ki UserRoles theke value gula ber kore niya asa 


    // akhon jokhon e ami keyof operator use korbo , keyof ki kaaj kore mone ace?
    // key gulo niye union leteral type create kore
    // keyof typeof UserRoles = "Admin" | "Editor" | "Viewer"

// akhon amra ar akta jinish bhujher chesta korbo dhore naw aikhne key:value exactly same orthat Admin er value
// admin (key and value er spelling same) aijonno amra aikhne shudhu matro "keyof typeof UserRoles" likhse
// akhon jodi value ta amon hoy Admin: "ADMIN"
// jokhon amra aita pathacci -> role === UserRoles.Admin tokhon kintu amder ai value "ADMIN" ta jacce
// akhon amader "ADMIN" pawer jonno aivabe likhte hobe "(role: (typeof UserRoles)[keyof typeof UserRoles])"
// karon dhoro UserRoles["Admin"] dile "ADMIN" pabo thik aivabe (typeof UserRoles)[keyof typeof UserRoles])
//                                                                      ^                     ^
//                                                            aikhne type create korbe | ar aikhne value pabo
// dile "ADMIN" pabo

// const canEdit = (role: keyof typeof UserRoles) => {
const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else {
    return false;
  }
};
const isEditPermissable = canEdit(UserRoles.Editor);
console.log(isEditPermissable);
