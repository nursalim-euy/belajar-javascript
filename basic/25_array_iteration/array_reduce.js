// The reduce() method runs a function on each array element to produce (reduce it to) a single value.
// The reduce() method works from left-to-right in the array. See also reduceRight().
const numbers = [45, 4, 9, 16, 25];
let sum = numbers.reduce(myFunction);
let sumWithInitial = numbers.reduce(myFunction, 100);

function myFunction(total, value, index, array) {
  return total + value;
}
console.log(sum);
console.log(sumWithInitial);

// using lambda
let sum2 = numbers.reduce((total, value) => total + value);
console.log(sum2);
