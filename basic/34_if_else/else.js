// Use the else statement to specify a block of code to be executed if the condition is false.

/*

syntax:

if (condition) {
  //  block of code to be executed if the condition is true
} else {
  //  block of code to be executed if the condition is false
}

*/
const hour = new Date().getHours();
if (hour < 18) {
  console.log("Good Day");
} else {
  console.log("Good Evening");
}
