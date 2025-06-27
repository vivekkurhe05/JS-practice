/**
 * Write a JavaScript program to get the nth element of a given array.
 */

// my sol
function nthElement(arr, nth) {
    if(nth < 0) nth=0;
    return arr[nth];
}

console.log(nthElement(['a', 'b', 'c'], 1)); // Output: 'b'
console.log(nthElement(['a', 'b', 'b'], -3)); // Output: 'a'