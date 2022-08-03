// Date from moment.js in UTC 
var nowDate = moment.utc().format("LLLL");
console.log(nowDate, "- now in UTC"); 
// Date converted to local time (user's time zone)
var localNowDate = moment.utc(nowDate).local().format('[Today is] dddd' + ' ' + 'LL');
// Attention to coder, this is the author's time zone (EST)
console.log(localNowDate, "- UTC now to EST"); 

document.querySelector("#currentDay").textContent = localNowDate;

var nowTime = moment.utc().format("HH:mm");
console.log(nowTime, "- now in UTC");

var localNowTime = moment.utc(nowDate).local().format('[Time is now]' + ' ' + 'HH:mm');
console.log("The time is now", localNowTime)

document.querySelector("#currentTime").textContent = localNowTime;