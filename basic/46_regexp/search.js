// The search() method searches a string for a specified value and returns the position of the match:
let text = "Visit W3Schools!";
let n = text.search("W3Schools");
console.log(n);

// Search with regular expression
n = text.search(/W3Schools/i);
console.log(n);
