// The replace() method replaces a specified value with another value in a string:
let text = "Please visit Microsoft";
let newText = text.replace("Microsoft", "W3Schools");
console.log(newText);

newText = text.replace("MICROSOFT", "W3Schools");
console.log(newText);

// insensitive
newText = text.replace(/MICROSOFT/i, "W3Schools");
console.log(newText);

// global
let text2 = "Please visit Microsoft and Microsoft!";
newText = text2.replace(/Microsoft/g, "W2Schools");
console.log(newText);
