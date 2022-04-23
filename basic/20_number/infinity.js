// Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.

let myNumber = 2;
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
  console.log(myNumber);
}

let x = 2 / 0;
let y = -2 / 0;
console.log(x);
console.log(y);

console.log(typeof Infinity);
