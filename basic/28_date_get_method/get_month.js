// The getMonth() method returns the month of a date as a number (0-11):
const d = new Date();
console.log(d.getMonth());

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[d.getMonth()];
console.log(month);
