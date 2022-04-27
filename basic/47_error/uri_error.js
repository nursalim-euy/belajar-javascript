// A URIError is thrown if you use illegal characters in a URI function:

try {
  decodeURI("%%");
} catch (err) {
  console.log(err.name);
}
