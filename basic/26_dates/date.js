// new Date() creates a new date object with the current date and time:

const d = new Date();
console.log(d);

// new Date(year, month, ...) creates a new date object with a specified date and time.
// 7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):
const d2 = new Date(2022, 0, 11, 10, 33, 30, 0);
console.log(d2);

// 6 numbers
console.log(new Date(2018, 11, 24, 10, 33, 30));

// 5 numbers
console.log(new Date(2018, 11, 24, 10, 33));

// 4 numbers
console.log(new Date(2018, 11, 24, 10));

// 3 numbers
console.log(new Date(2018, 11, 24));

// 2 numbers
console.log(new Date(2018, 11));
