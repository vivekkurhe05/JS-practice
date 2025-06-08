/**
 * Write a JavaScript program to generate a random integer in the specified range.
 */

// w3resource sol
function randomIntegerInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(randomIntegerInRange(0, 5));   // Output: Random integer between 0 and 5
console.log(randomIntegerInRange(2, 5));   // Output: Random integer between 2 and 5
console.log(randomIntegerInRange(5, -5));  // Output: Random integer between 5 and -5
console.log(randomIntegerInRange(-2, -7));