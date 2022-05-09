var collection={
    "45":{
        "album":"auhasas",
        "artist":"john",
        "tracks":["track 1","track 2"]
    },
    "46":{
        "album":"ertyu",
        "artist":"jebaraj",
        "tracks":["track 3","track 4"]
    },
    "47":{
        "album":"xcvb",
        "artist":"rohit",
        "tracks":[]
    },
};
var collectionCopy=JSON.parse(JSON.stringify(collection));
function updateRecords(id,prop,value){
    if(value===""){
        delete collection[id][prop];
    }else if(prop==="tracks"){
    collection[id][prop]=collection[id][prop] || [];
    collection[id][prop].push(value);
    }
    else{
        collection[id][prop]=value;
    }
    return collection;


}
console.log(updateRecords(45,"artist","hana"));
console.log(updateRecords(47,"tracks","ranjith"));
console.log(updateRecords(46,"artist",""));
