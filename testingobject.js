var objTest={
    name:"geetha",
    name1:"jessi",
    name2:"rathina"
};
function checkObj(checkProp){
    if(objTest.hasOwnProperty(checkProp)){
        return objTest[checkProp];
    }else{
        return "Not Found"
    }
}
console.log(checkObj("name"));