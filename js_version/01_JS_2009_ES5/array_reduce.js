// This example finds the sum of all numbers in an array:
let numbers1 = [45, 4, 9, 16, 15];
let sum = numbers1.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}

console.log(sum);
