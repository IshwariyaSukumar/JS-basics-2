let hour="2:30";
const arr=hour.split(":");
let hours=parseInt(arr[0]);
let minutes=parseInt(arr[1]);
let hoursInMinutes=(hours*60)+minutes;
console.log(hoursInMinutes);