const stats={
max:56.89,
standard:5.89,
median:45.09,
mode:23.87,
min:-0.56
};
const half=(function(){
    return function half({max,min}){
        return (max+min)/2.0;
    }
})();
console.log(stats);
console.log(half(stats));