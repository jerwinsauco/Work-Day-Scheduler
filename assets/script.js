
var nowTime = moment.utc().format("LLLL");
console.log(nowTime, "- now in UTC"); 


var localNowTime = moment.utc(nowTime).local().format('[Today is] dddd' + ' ' + 'LL');
console.log(localNowTime, "- UTC now to EST"); 

document.querySelector("#currentDay").textContent = localNowTime;