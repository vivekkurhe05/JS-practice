/**
 * Write a JavaScript program to get the nth element of a given array of elements.
 */

// my sol
function nthElement(arr, i) {
    i = i < 0 ? 0 : i;
    return arr[i];
}

console.log(nthElement(['a', 'b', 'c'], 1)); // 'b'
console.log(nthElement(['a', 'b', 'b'], -3)); // 'a'