// The some() method check if some array values pass a test.
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, arra) {
  return value > 18;
}

console.log(someOver18);
