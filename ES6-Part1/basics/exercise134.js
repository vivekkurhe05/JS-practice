/**
 * Write a JavaScript program to get the symmetric difference between two given arrays.
 */

// my sol
function symmetricDifference(arr1, arr2) {
    let in1 = arr1.filter(el => !arr2.includes(el));
    let in2 = arr2.filter(el => !arr1.includes(el));

    return [...in1, ...in2];
}

console.log(symmetricDifference([1, 2, 3], [1, 2, 4])); // Output: [3, 4]