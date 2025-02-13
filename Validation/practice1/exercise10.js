/**
 * Write a JavaScript function to check whether given value types are same or not.
 */

function is_sameType(val1, val2) {
    return typeof val1 === typeof val2
}

console.log(is_sameType('12', 100));
console.log(is_sameType('12', '100'));
console.log(is_sameType(12, 100));