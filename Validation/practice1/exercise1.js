/**
 * Write a JavaScript function to validate whether a given value type is boolean or not.
 */

function is_boolean(val) {
    return toString.call(val) === '[object Boolean]'
}

console.log(is_boolean(true)); // true

console.log(is_boolean('bar')); // false