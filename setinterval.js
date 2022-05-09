let timeId=setInterval(()=>console.log("tick"),2000);
setTimeout(()=>{clearInterval(timeId);console.log("stop");
},5000);