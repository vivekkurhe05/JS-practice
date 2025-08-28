/**
 * Write a JavaScript program to get the native type of a value. Returns the lowercased constructor name 
 * of value, "undefined" or "null" if value is undefined or null.
 */

// w3reseouce sol
function getType(val) {
    return val === undefined ? 'undefined' : val === null ? 'null' : val.constructor.name.toLowerCase();
}

console.log(getType(new Set([1, 2, 3]))); // Output: 'set'
console.log(getType(undefined));
console.log(getType(null));