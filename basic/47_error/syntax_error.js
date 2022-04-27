// A SyntaxError is thrown if you try to evaluate code with a syntax error.
try {
  eval("alert('hello)"); // missing '
} catch (err) {
  console.log(err.name);
}
