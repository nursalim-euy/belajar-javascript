// A RangeError is thrown if you use a number that is outside the range of legal values.
// For example: You cannot set the number of significant digits of a number to 500.
let num = 1;
try {
  num.toPrecision(500);
} catch (err) {
  console.log(err.name);
}
