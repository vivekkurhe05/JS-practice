// Calculate the number of years since Jan 1, 1970

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

// Divide Time with a year
const d = new Date();
let years = Math.round(d.getTime() / year);

console.log(years)