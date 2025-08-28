/**
 * Write a JavaScript program to get a list of elements that exist in both arrays.
 */

// w3reseource sol
function intersection(arr1, arr2) {
    let s = new Set(arr2);
    return arr1.filter(el => s.has(el));
}

console.log(intersection([1, 2, 3], [4, 3, 2]));

// or my sol

function intersection2(arr1, arr2) {
    return arr1.filter(el => arr2.includes(el));
}

console.log(intersection2([1, 2, 3], [4, 3, 2]));