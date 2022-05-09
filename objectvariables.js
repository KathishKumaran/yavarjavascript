var objTest={
    name:"geetha",
    name1:"jessi",
    name2:"rathina"
};
objTest.name1="varsha";
console.log(objTest);
var read="name1";
var player=objTest[read];
console.log(player);
console.log(objTest["name2"]);
objTest.name3="Abi";
console.log(objTest);
delete objTest.name2;
console.log(objTest);
