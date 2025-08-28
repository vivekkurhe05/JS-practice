/**
 * Write a JavaScript program to check if the given argument is a string.
 */

function isString(val) {
    return toString.call(val) === "[object String]";
}

console.log(isString('10'));