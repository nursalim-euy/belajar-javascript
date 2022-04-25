/*
Syntax: 

for (statement 1; statement 2; statement 3) {
  // code block to be executed
}

- Statement 1 is executed (one time) before the execution of the code block.
- Statement 2 defines the condition for executing the code block.
- Statement 3 is executed (every time) after the code block has been executed.

*/

for (let i = 0; i < 5; i++) {
  console.log("The number is : " + i);
}

const cars = ["BMW", "Volvo", "Saab", "Ford"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}
