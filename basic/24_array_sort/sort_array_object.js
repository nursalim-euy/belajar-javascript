const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

// sort by year
cars.sort(function (a, b) {
  return a.year - b.year;
});

console.log(cars);

// sort by stype
cars.sort(function (a, b) {
  let x = a.type.toLowerCase();
  let y = b.type.toLowerCase();
  if (x < y) {
    return -1;
  }

  if (x > y) {
    return 1;
  }
});
console.log(cars);
