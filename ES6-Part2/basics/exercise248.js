/**
 * Write a JavaScript program to deep flatten an array.
 */

// my sol
function deepFlatten(arr) {
    return arr.flat(Infinity);
}

console.log(deepFlatten([1, [2], [[3], 4], 5]));