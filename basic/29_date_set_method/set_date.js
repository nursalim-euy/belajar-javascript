// The setDate() method sets the day of a date object (1-31):
const d = new Date();
console.log(d.setDate(15));

// The setDate() method can also be used to add days to a date:
console.log(d.setDate(d.getDate() + 50));
