// Use the if statement to specify a block of JavaScript code to be executed if a condition is true.
/*
Syntax:

if (condition) {
  //  block of code to be executed if the condition is true
}
*/

const hour = new Date().getHours();

if (hour < 18) {
  console.log("Good Day!");
}
