// The forEach() method calls a function for each key/value pair in a Map:

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

fruits.forEach(function (value, key) {
  console.log(key + ": " + value);
});
