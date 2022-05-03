// This example also finds the sum of all numbers in an array:
let numbers1 = [45, 4, 9, 16, 25];
let sum = numbers1.reduceRight(myFunction);

function myFunction(total, value) {
  return total + value;
}

console.log(sum);
