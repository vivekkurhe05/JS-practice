/**
 * Write a JavaScript program that will return true if the specified value is null, false otherwise.
 */

function isNull(val) {
    return val === null;
}

console.log(isNull(null)); // true (the value is null)
console.log(isNull(123));  // false (the value is not null)