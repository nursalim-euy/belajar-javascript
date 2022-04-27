// n+
// Matches any string that contains at least one n
let text = "Hellooo World! Hello W3Schools!";
let result = text.match(/o+/g);
console.log(result);

// n*
// Matches any string that contains zero or more occurrences of n

// Do a global search for an "l", followed by zero or more "o" characters:
let text2 = "Hellooo World! Hello W3Schools!";
let result2 = text2.match(/lo*/g);
console.log(result2);

// n?
// Matches any string that contains zero or one occurrences of n
// Do a global search for a "1", followed by zero or one "0" characters:
let text3 = "1, 100 or 1000?";
let result3 = text3.match(/10?/g);
console.log(result3);
