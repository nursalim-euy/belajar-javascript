// The example below calls person1.fullName with person2 as an argument, this refers to person2, even if fullName is a method of person1:

const person1 = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

const person2 = {
  firstName: "John",
  lastName: "Doe",
};

// Return John Doe
let result = person1.fullName.call(person2);
console.log(result);
