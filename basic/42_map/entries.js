// The entries() method returns an iterator object with the [key, values] in a Map:

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

for (const x of fruits.entries()) {
  console.log(x);
}
