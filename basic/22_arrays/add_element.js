// The easiest way to add a new element to an array is using the push() method

const fruits = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");
console.log(fruits);

// New element can also be added to an array using the length property:
fruits[fruits.length] = "Grape";
console.log(fruits);
