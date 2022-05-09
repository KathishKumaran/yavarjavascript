const incre=(function(){
    return function incre(number,value){
        return number+value;
    };
})();
console.log(incre(5,2));
console.log(incre(5));
