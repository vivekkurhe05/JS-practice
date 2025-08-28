/**
 * Write a JavaScript program to check if a given argument is a number.
 */

// my sol
function isNumber(val) {
    return val === Number(val);
}

console.log(isNumber('1'));  // false (the value is a string, not a number)
console.log(isNumber(1));    // true (the value is a number)