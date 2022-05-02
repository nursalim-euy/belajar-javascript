class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }

  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }

  age2(x) {
    return x - this.year;
  }
}

let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);

console.log(myCar1);
console.log(myCar2);
console.log("My car is " + myCar1.age() + " years old.");
console.log(
  "My car is " + myCar1.age2(new Date().getFullYear()) + " years old."
);
