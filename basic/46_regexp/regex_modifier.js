// Perform case-insensitive matching
let text = "Visit W3Schools";
let result = text.match(/W3Schools/i);
console.log(result);

// Perform a global match
let text2 = "Is this all there is?";
let result2 = text2.match(/is/gi);
console.log(result2);

// Perform multiline matching
let text3 = "\nIs th\nis it?";
let result3 = text3.match(/^is/m);
console.log(result3);
