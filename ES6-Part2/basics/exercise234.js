/**
 * Write a JavaScript program to flatten a given array to the specified depth.
 */

// my sol
function flatten(arr, depth=1) {
    return arr.flat(depth);
}

console.log(flatten([1, [2], 3, 4])); // Output: [1, 2, 3, 4]
console.log(flatten([1, [2, [3, [4, 5], 6], 7], 8], 2)); // Output: [1, 2, 3, [4, 5], 6, 7, 8]