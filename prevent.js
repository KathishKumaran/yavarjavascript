function fun(){
    "use strict"
    const a={
        pi:3.14
    };
    try{
        a.pi=99;
    }catch(x){
        console.log(x);
    }
    return a.pi;
}
const pi=fun();
console.log(pi);
