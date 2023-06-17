// Calculate the number of years between Jan 1, 1970 and March 12, 2012

const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;

// Compute years
const d = Date.parse("March 21, 2012");
let years = Math.round(d / year);

console.log(years)