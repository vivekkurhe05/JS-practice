/**
 * Write a JavaScript program to get an array with n elements 
 * removed from the beginning from a given array.
 */

// my sol
function take(arr, n) {
    if(n===0) return [];
    return arr.slice(-n);
}

console.log(take([1, 2, 3], 5)); // Output: [1, 2, 3]
console.log(take([1, 2, 3], 0)); // Output: []