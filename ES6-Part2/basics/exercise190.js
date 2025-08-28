/**
 * Write a JavaScript program to return a boolean determining if the passed value is primitive or not.
 */

// w3resource sol
function isPrimitive(val) {
    return !['object', 'function'].includes(typeof val) || val === null;
}

console.log(isPrimitive(null)); // true (null is a primitive type)
console.log(isPrimitive(50)); // true (number is a primitive type)
console.log(isPrimitive('Hello!')); // true (string is a primitive type)
console.log(isPrimitive(false)); // true (boolean is a primitive type)
console.log(isPrimitive(Symbol())); // true (symbol is a primitive type)
console.log(isPrimitive([])); // false (array is not a primitive type)