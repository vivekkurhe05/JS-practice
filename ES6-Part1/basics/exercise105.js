/**
 * Write a JavaScript program that returns true if the given value is a number, false otherwise.
 */

// my sol
function validateNumber(value) {
    value = Number(value);
    return !isNaN(value) && toString.call(value) === '[object Number]';
}


console.log(validateNumber('200')); // Output: true (valid number)
console.log(validateNumber('10')); // Output: true (valid number)
console.log(validateNumber('abc')); // Output: false (not a valid number)