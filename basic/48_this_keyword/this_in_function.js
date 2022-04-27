// In a function, the global object is the default binding for this.
// In a browser window the global object is [object Window]:

function myFunction() {
  return this;
}

console.log(myFunction());

// JavaScript strict mode does not allow default binding.
// So, when used in a function, in strict mode, this is undefined.
