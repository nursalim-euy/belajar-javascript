// This example checks if some values are over 18:
let numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.some(myFunction);

function myFunction(value) {
  return value > 18;
}

console.log(allOver18);
