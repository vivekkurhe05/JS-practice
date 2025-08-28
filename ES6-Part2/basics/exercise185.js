/**
 * Write a JavaScript program that returns true if the specified value is undefined, false otherwise.
 */

// my sol
function isUndefined(value) {
    return typeof value === "undefined";
}

console.log(isUndefined(undefined));