let user={
    firstName:"john"
};
function func(){
    console.log(this.firstName);
}
let funcUser=func.bind(user);
console.log(funcUser());