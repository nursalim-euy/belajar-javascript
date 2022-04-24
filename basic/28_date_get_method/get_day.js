// The getDay() method returns the weekday of a date as a number (0-6):
const d = new Date();
console.log(d.getDate());

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[d.getDay()];
console.log(day);
