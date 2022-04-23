function myArray(arr) {
  return Math.min.apply(null, arr);
}

const myPoints = [100, 50, 20, 300];
console.log(myArray(myPoints));
