// The values() method returns a new iterator object containing all the values in a Set:
const letters = new Set(["a", "b", "c"]);
for (const x of letters.values()) {
  console.log(x);
}
