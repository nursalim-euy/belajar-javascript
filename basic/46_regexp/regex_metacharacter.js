// \d
// Find a digit
let text = "Give 100%!";
let result = text.match(/\d/g);
console.log(result);

// \s
// Find a whitespace character
let text2 = "Is this all there is?";
let result2 = text2.match(/\s/g);
console.log(result2);

// \b
// Find a match at the beginning of a word like this: \bWORD, or at the end of a word like this: WORD\b
let text3 = "HELLO, LOOK AT YOU!";
let result3 = text3.search(/\bLO/);
console.log(result3);

result3 = text3.search(/LO\b/);
console.log(result3);

// \uxxxx
// Find the Unicode character specified by the hexadecimal number xxxx
let text4 = "Visit W3Schools. Hello World!";
let result4 = text4.match(/\u0057/g);
console.log(result4);
