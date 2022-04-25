// The JavaScript for in statement loops through the properties of an Object:

/*
syntax:

for (key in object) {
  // code block to be executed
}

*/
const person = { fname: "John", lname: "Doe", age: 25 };
for (let x in person) {
  console.log(person[x]);
}

const numbers = [45, 4, 9, 16, 25];
for (let x in numbers) {
  console.log(numbers[x]);
}
