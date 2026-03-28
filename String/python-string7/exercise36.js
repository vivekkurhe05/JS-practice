/**
 * Write a Python program to format a number with a percentage.
 */

let x = 0.25
let y = -0.25

console.log(x.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 2
}));

console.log(y.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 2
}));