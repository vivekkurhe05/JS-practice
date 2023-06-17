/**
 *
 * Write a method that verifies an argument is a plain object, not an array or null
 * Expected Result: True if object is plain, false otherwise. ({ a: 1 }) => true, ([1, 2, 3]) => false
 * Task complexity: 1 of 5
 */

// my solution
function isPlainObject(obj) {
    return toString.call(obj) === '[object Object]'
}

console.log(isPlainObject({ a: 1 }));
console.log(isPlainObject([1, 2, 3]));
console.log(isPlainObject(null));