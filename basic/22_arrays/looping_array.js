const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

// using for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// using foreach
// fruits.forEach(myFunction);

// function myFunction(value) {
//   console.log(value);
// }

fruits.forEach((val) => console.log(val));
