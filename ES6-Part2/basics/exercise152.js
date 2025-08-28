/**
 * Write a JavaScript program to round a number to a specified amount of digits.
 */

// w3resource sol
function round(num, decimal) {
    return Number(`${Math.round(`${num}e${decimal}`)}e-${decimal}`);
}

console.log(round(1.005, 2)); // Output: 1.01
console.log(round(1.05, 2));  // Output: 1.05
console.log(round(1.0005, 2)); // Output: 1