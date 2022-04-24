// Use the else if statement to specify a new condition if the first condition is false.

/*

Syntax:

if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}

*/
const hour = new Date().getHours();
if (hour < 10) {
  console.log("Good Morning");
} else if (hour < 20) {
  console.log("Good Day");
} else {
  console.log("Good Evening");
}
