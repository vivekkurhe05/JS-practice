/**
 * Write a JavaScript function to validate whether a given value is number or not.
 */

function is_number(val) {
    return !isNaN(val) && toString.call(val) === '[object Number]'
}

console.log(is_number(NaN));

console.log(is_number(42.32));

console.log(is_number(72));