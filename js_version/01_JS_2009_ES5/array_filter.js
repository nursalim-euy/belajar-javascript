// This example creates a new array from elements with a value larger than 18:

let numbers = [45, 4, 9, 16, 25];
let over18 = numbers.filter(myFunction);

function myFunction(value) {
  return value > 18;
}

console.log(over18);
