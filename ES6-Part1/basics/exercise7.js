/**
 * Write a JavaScript program to convert a specified number into an array of digits.
 */

function digitize(num) {
    return num.toString().split("").map(el=>Number(el));
}

console.log(digitize(123));
console.log(digitize(1230));