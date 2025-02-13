/**
 * Write a JavaScript function to validate whether a given value type is NaN or not.
 */

function is_nan(val) {
    return val !== val
}

console.log(is_nan(NaN)); // true

console.log(is_nan('bar')); // false