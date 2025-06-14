/**
 * Write a JavaScript program to cast the provided value as an array if it's not one.
 */

// my sol
function castArray(val) {
    return Array.isArray(val) ? val : [val];
}

console.log(castArray('w3r'));    // Output: ['w3r']
console.log(castArray([100]));    // Output: [100]