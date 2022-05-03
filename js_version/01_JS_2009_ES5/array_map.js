// This example multiplies each array value by 2:
let numbers = [45, 4, 9, 16, 25];
let numbers2 = numbers.map(myFunction);

function myFunction(value) {
  return value * 2;
}

console.log(numbers2);
