/**
 * Write a JavaScript program to get the n maximum elements from the provided array. 
 * If n is greater than or equal to the provided array's length, 
 * return the original array (sorted in descending order).
 */

// my sol
function maxN(arr, n=1) {
    return n > arr.length ? arr : arr.sort((a,b) => b-a).slice(0,n);
}

console.log(maxN([1, 2, 3])); // Outputs: [3] (maximum value in the array)
console.log(maxN([1, 2, 3], 2)); // Outputs: [3, 2] (maximum 2 values in the array)