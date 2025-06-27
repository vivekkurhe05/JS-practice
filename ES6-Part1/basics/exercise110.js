/**
 * Write a JavaScript program to get every element in any of the two arrays at once.
 */

// my sol
function union(...args) {
    let unpackedArr = args.flat();
    return Array.from(new Set(unpackedArr));
}

console.log(union([1, 2, 3], [4, 3, 2])); // Output: [1, 2, 3, 4]
console.log(union([1, 2, 3], [1, 2, 3])); // Output: [1, 2, 3]