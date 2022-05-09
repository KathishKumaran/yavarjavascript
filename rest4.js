function sum(...arguments){
    let sum = 0;
    for(let arg of arguments)
    sum += arg;
    return sum;
}
console.log(sum(1,2,3));