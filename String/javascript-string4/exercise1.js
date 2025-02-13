/**
 * 
 * Write a JavaScript function to check whether an `input` is a string or not.
 * Test Data:
 * console.log(is_string('w3resource'));
 * true
 * console.log(is_string([1, 2, 4, 0]));
 * false
 * 
 */

// my sol
function is_string(str) {
    return toString.call(str) === '[object String]'
}
console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));

// or

function is_string2(str) {
    return typeof str === 'string'
}
console.log(is_string2('w3resource'));
console.log(is_string2([1, 2, 4, 0]));