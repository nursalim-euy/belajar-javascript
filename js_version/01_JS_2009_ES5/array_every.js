// This example checks if all values are over 18:

let numbers = [45, 4, 9, 16, 25];
let over18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}

console.log(over18);
