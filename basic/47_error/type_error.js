// A TypeError is thrown if you use a value that is outside the range of expected types:
let num = 1;
try {
  num.toUpperCase();
} catch (err) {
  console.log(err.name);
}
