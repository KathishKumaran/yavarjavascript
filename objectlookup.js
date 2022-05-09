function objLookup(val){
    var result="";
    var lookup={
    name:"geetha",
    name1:"jessi",
    name2:"rathina"
    };
    result= lookup[val];
    return result;
}
console.log(objLookup("name1"));