/*
 * Write a JavaScript function to validate whether a given value type is pure json object or not.
 */

function is_object(val) {
    return toString.call(val) === '[object Object]'
}

console.log(is_object({name: 'Robert'}));

console.log(is_object('bar'));

console.log(is_object(72));