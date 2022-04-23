// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: the start position, and the end position (end not included).
// This example slices out a portion of a string from position 7 to position 12 (13-1):

let str = "Apple, Banana, Kiwi";
console.log(str.slice(7, 13));
console.log(str.slice(-12, -6));
console.log(str.slice(7));
console.log(str.slice(-12));
