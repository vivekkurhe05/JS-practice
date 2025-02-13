/**
 * Write a JavaScript function to validate whether a given value type is error or not.
 */

function is_Error(val) {
    return toString.call(val) === '[object Error]'
}

console.log(is_Error(new Error('foo')));
console.log(is_Error(Error('foo')));
console.log(is_Error(100));
console.log(is_Error('foo'));