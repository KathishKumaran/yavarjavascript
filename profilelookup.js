var contacts=[
    {
        "firstname":"sgdjdg",
        "lastname":"sEARX",
        "NUMBER":"4235365"
    },
    {
        "firstname":"ram",
        "lastname":"kumar",
        "NUMBER":"4233726365"
    },
    {
        "firstname":"sasi",
        "lastname":"ram",
        "NUMBER":"4235393865"
    },
    {
        "firstname":"tilak",
        "lastname":"varma",
        "NUMBER":"42353234623768465"
    },

]
function lookupProfile(name,prop){
    for(i=0;i<contacts.length;i++){
        if(contacts[i].firstname===name){
            return contacts[i][prop];
        }
        
    }
    return "no such contact";
}
var data=lookupProfile("ram","NUMBER");
console.log(data);