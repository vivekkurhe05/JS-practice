/**
 * Write a JavaScript function to validate whether a given value type is char or not.
 */

function is_char(val) {
    return typeof val === 'string' && val.length===1
}

console.log(is_char('f'));
console.log(is_char('*'));
console.log(is_char(1));
console.log(is_char(true));