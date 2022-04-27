// When used in an object method, this refers to the object.
// In the example on top of this page, this refers to the person object.
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log(person.fullName());
