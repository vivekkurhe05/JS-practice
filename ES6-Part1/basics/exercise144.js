/**
 * Write a JavaScript program to get an array of elements that appear in both arrays.
 */

// my sol
function similarity(arr1, arr2) {
    return arr1.filter(el => arr2.includes(el));
}

console.log(similarity([1, 2, 3], [1, 2, 4])); // Output: [1, 2]