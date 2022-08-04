
// DATE and TIME Section
// Date from moment.js in UTC 
var nowDate = moment.utc().format("LLLL");
console.log(nowDate, "- now in UTC");
// Date converted to local time (user's time zone)
var localNowDate = moment.utc(nowDate).local().format('[Today is] dddd' + ' ' + 'LL');
// Attention to coder, author's time zone in EST
console.log(localNowDate, "- UTC now to EST");

document.querySelector("#currentDay").textContent = localNowDate;

var nowTime = moment.utc().format("HH:mm");
console.log(nowTime, "- now in UTC");

var localNowTime = moment.utc(nowDate).local().format('[Time is now]' + ' ' + 'HH:mm');
console.log("The time is now", localNowTime)

document.querySelector("#currentTime").textContent = localNowTime;
// END DATE and TIME Section

// jQuery ready() function executes only when the DOM is fully loaded. 
// $(document).ready(function () {
$(".saveIcon").on("click", function () {
    var inputValue = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // inputValue by user is stored in localStorage
    localStorage.setItem(time, inputValue);
})

// Loads the text from local storage to the input fields
$("#8 .description").val(localStorage.getItem("8"));
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

// Past, present, future color coding
function timePointer() {
    // current web app time 
    var timeNow = moment().hour();

    // past, present, future color coding
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id"));
        // past color coding
        if (blockHour < timeNow) {
            $(this).addClass("past");
            // present color coding
        } else if (blockHour === timeNow) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        // future color coding
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    }

}

timePointer();