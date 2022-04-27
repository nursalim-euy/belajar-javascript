// When used alone, this refers to the global object.
// Because this is running in the global scope.
// In a browser window the global object is [object Window]:

let x = this;
console.log(x);

//  In strict mode, when used alone, this also refers to the global object:
