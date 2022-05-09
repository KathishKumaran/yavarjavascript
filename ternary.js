function ter(a,b){
    return a==b ? "true":"false";
}
console.log(ter(1,1));

//multiple ternary
function ter1(c){
    return c>0 ? "positive":c<0?"negative":"zero";
}
console.log(ter1(0));