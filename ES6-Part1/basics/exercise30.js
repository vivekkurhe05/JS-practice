/**
 * Write a JavaScript program to filter out the element(s) of a given array 
 * that have one of the specified values.
 */

// my sol
function without(arr, ...args) {
    return arr.filter(el => !args.includes(el));
}

console.log(without([2, 1, 2, 3], 1, 2)); // Output: [3]
console.log(without([2, 1, 2, 3], 3));    // Output: [2, 1, 2]