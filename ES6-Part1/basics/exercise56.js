/**
 * Write a JavaScript program to check whether all elements in a given array are equal or not.
 */

// my sol
function allEqual(arr) {
    return arr.every(el => el === arr[0]);
}

console.log(allEqual([1, 2, 3, 4, 5, 6])); // Output: false (not all elements are equal)
console.log(allEqual([12, 12, 12, 12]));    // Output: true (all elements are equal)