// ES5 lets you define object methods with a syntax that looks like getting or setting a property.
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "NO",
  get lang() {
    return this.language;
  },

  set lang(value) {
    this.language = value.toUpperCase();
  },

  get fullName() {
    return this.firstName + " " + this.lastName;
  },
};

// Set an object property using setter
person.lang = "en";

console.log(person.lang);
console.log(person.fullName);
