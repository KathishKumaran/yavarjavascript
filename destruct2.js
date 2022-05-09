const AVG_TEMP={
    today:{min:77.5,max:83},
    tomorrow:{min:79,max:84.9}
};
function getTemOfTmrw(avgTemp){
    "use strict";
    const{tomorrow:{max:tempOfTomorrow}}=avgTemp;
    return tempOfTomorrow;
}
console.log(getTemOfTmrw(AVG_TEMP));