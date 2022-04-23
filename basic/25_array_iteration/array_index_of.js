// The indexOf() method searches an array for an element value and returns its position.
// array.indexOf(item, start)
// item	Required. The item to search for.
// start	Optional. Where to start the search. Negative values will start at the given position counting from the end, and search to the end.

const fruits = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits.indexOf("Apple") + 1;
console.log(position);
