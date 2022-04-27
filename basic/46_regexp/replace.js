let text = "Visit Microsoft!";
let result = text.replace("Microsoft", "W3Schools");
console.log(result);

// using replace with regular expression
result = text.replace(/Microsoft/i, "W3Schools");
console.log(result);
