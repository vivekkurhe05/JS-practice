/**
 * Write a JavaScript program to get the symmetric difference between two given arrays, 
 * after applying the provided function to each array element of both.
 */

// my sol
function symmetricDifferenceBy(arr1, arr2, fn) {
    let num1 = arr1.map(el => fn(el));
    let num2 = arr2.map(el => fn(el));

    arr1 = arr1.filter(el => !num2.includes(fn(el)));
    arr2 = arr2.filter(el => !num1.includes(fn(el)));

    return [...arr1, ...arr2];
}

console.log(symmetricDifferenceBy([2.1, 1.2], [2.3, 3.4], Math.floor)); // Output: [1.2, 3.4]