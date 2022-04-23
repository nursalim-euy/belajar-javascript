// The map() method creates a new array by performing a function on each array element.
// The map() method does not execute the function for array elements without values.
// The map() method does not change the original array.

const numbers = [45, 4, 9, 16, 25];
numbers.map(myFunction);

function myFunction(value, index, array) {
  console.log(value * 2);
}

// using lambda function
numbers.map((val) => console.log(val * 2));
