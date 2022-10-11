$(document).ready(function(){
function showTime(){
// To get current time/date
var date = new Date();
// make variable to in hours, minutes and second
var hours = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();
// AM/PM Setting
var session = "AM";
// conditions for time behaviour
if(hours == 0){
hours = 12;
}
if(hours >= 12){
session="PM";
}
if(hours > 12){
hours = hours - 12;
}
hours = hours < 10 ? "0" + hours : hours;
min = min < 10 ? "0" + min : min;
sec = sec < 10 ? "0" + sec : sec;

// set the variable span
$("#hours").text(hours);
$("#min").text(min);
$("#sec").text(sec);
$("#period").text(session);

// To change the time in every second
setTimeout(showTime,1000);

}
showTime();
})