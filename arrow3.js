const a=[4,5,8.5,-45,-98,6.9,34.9,40];
const square=(arr)=>{
    const squaredInteger=arr.filter(num = (temp) =>Number.isInteger(temp) && temp>0).map(x= (tem) => tem*tem);
    return squaredInteger;
};
const squaredInteger=square(a);
console.log(squaredInteger);
