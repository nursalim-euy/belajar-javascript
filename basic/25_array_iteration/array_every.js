// The every() method check if all array values pass a test.
// const numbers = [45, 4, 9, 16, 25];
const numbers = [45, 75, 20, 19, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value) {
  return value > 18;
}

console.log(allOver18);
