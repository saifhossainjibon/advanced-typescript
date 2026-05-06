// Enum
// set of fixed string leteral ek jaygay rakhe 

// type UserRole ='Admin' | 'Editor'| 'Viewer'; // aita aivabe likhele niche vul hower possiblity thake aijonno
// amra "Enum" use korbo


enum UserRoles{
    Admin ="Admin",
    Editor= "Editor",
    Viewer="Viewer",
};

const canEdit=(role : UserRoles)=>{
    if(role===UserRoles.Admin || role===UserRoles.Editor){
        return true ;
    }
    else{
        return false;
    }
}
const isEditPermissable= canEdit(UserRoles.Editor)
console.log(isEditPermissable)