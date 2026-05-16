// Enum
// set of fixed string leteral ek jaygay rakhe

// type UserRole ='Admin' | 'Editor'| 'Viewer'; // aita aivabe likhele niche vul hower possiblity thake aijonno
// amra "Enum" use korbo

type UserRole = "Admin" | "Editor" | "Viewer";
const canEdit = (role: UserRole) => {
  if (role === "Admin" || role === "Editor") {
    return true;
  } else {
    return false;
  }
};
const isEditPermissable1 = canEdit("Admin"); //amra aikhne use korte parci shudhumatro type hisebe
// value hisebe bebohar korte parci na 
// aber Admin word ta bar bar likha lagce repeat hocce jar jonno vul hower possibilty thake 


// now we'll use enum
enum UserRoles {
  Admin = "Admin",
  Editor = "Editor",
  Viewer = "Viewer",
}

const canEdit1 = (role: UserRoles) => {
  if (role === UserRoles.Admin || role === UserRoles.Editor) {
    return true;
  } else {
    return false;
  }
};
const isEditPermissable = canEdit1(UserRoles.Editor);
console.log(isEditPermissable);
