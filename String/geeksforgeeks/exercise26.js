/**
 * Check if an array is empty or not in JavaScript
 */

// my solution
function isArrayEmpty(input) {
    return Array.isArray(input) && input.length === 0
}

console.log(isArrayEmpty([]));
console.log(isArrayEmpty(undefined));
console.log(isArrayEmpty([1,2,3,4,5]));