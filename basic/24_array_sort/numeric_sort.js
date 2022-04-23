// Sort ascending
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
console.log(points);

// Sort Descending
const points2 = [40, 100, 1, 5, 25, 10];
points2.sort(function (a, b) {
  return b - a;
});
console.log(points2);
