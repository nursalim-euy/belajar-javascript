// Object.defineProperty() is a new Object method in ES5.
// It lets you define an object property and/or change a property's value and/or metadata.

// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "NO",
};

// Change a property
Object.defineProperty(person, "language", {
  //   value: "EN",
  //   writable: true,
  //   enumerable: false,
  //   configurable: true,

  // This example creates a setter and a getter to secure upper case updates of language:
  get: function () {
    return language;
  },

  set: function (value) {
    language = value.toUpperCase();
  },
});

person.language = "en";

// Enumerate Properties
// for (let x in person) {
//   console.log(person[x]);
// }

//
console.log(person.language);
