// [abc]
// Find any of the characters between the brackets
let text = "Is this all there is?";
let result = text.match(/[hi]/g);
console.log(result);

// [0-9]
// Find any of the digits between the brackets
let text2 = "123456789";
let result2 = text2.match(/[1-4]/g);
console.log(result2);

// (x|y)
// Find any of the alternatives separated with |
let text3 = "re, green, red, green, gren, gr, blue, yellow";
let result3 = text3.match(/(red|green)/g);
console.log(result3);
