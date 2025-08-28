/**
 * Write a JavaScript program to remove n elements from the end of a given array.
 */

// my sol
function takeRight(arr, n=1) {
    return arr.slice(-n);
}

console.log(takeRight([1, 2, 3], 2)); // Output: [2, 3]
console.log(takeRight([1, 2, 3])); // Output: [3]