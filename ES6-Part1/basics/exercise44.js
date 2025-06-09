/**
 * Write a JavaScript program to remove false values from a given array.
 */

// w3resource sol
function compact(arr) {
    return arr.filter(Boolean);
}

console.log(compact([0, 1, false, 2, '', 3, 'a', 'e' * 23, NaN, 's', 34])); // Output: [1, 2, 3, 'a', 's', 34]
console.log(compact([false, NaN, 'e' * 23])); // Output: []