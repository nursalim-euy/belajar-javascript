// Date.parse() returns the number of milliseconds between the date and January 1, 1970:
let msec = Date.parse("March 21, 2012");
console.log(msec);

const d = new Date(msec);
console.log(d);
