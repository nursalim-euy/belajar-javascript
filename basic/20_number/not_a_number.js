// NaN is a JavaScript reserved word indicating that a number is not a legal number.

let x = 100 / "Apple";
console.log(x);
console.log(isNaN(x));

let a = NaN;
let b = 5;
let c = a + b;
console.log(c);

a = NaN;
b = "5";
c = a + b;
console.log(c);
console.log(isNaN(c));
