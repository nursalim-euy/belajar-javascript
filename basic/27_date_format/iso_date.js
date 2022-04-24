// ISO 8601 is the international standard for the representation of dates and times.

// The ISO 8601 syntax (YYYY-MM-DD) is also the preferred JavaScript date format:

const d1 = new Date("2015-03-25");
console.log(d1);

const d2 = new Date("2015-03");
console.log(d2);

const d3 = new Date("2015");
console.log(d3);

const d4 = new Date("2015-03-25");
console.log(d4);

// ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):
const d5 = new Date("2015-03-25T12:00:00Z");
console.log(d5);

// If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM instead:
const d6 = new Date("2015-03-25T12:00:00-06:30");
console.log(d6);
