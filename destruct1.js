const AVG_TEMP={
    today:77.5,
    tomorrow:79
};
function getTemOfTmrw(avgTemp){
    "use strict";
    const{tomorrow:tempOfTomorrow}=avgTemp;
    return tempOfTomorrow;
}
console.log(getTemOfTmrw(AVG_TEMP));