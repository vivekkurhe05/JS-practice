/**
 * Write a JavaScript program to remove specified elements from the left of a 
 * given array of elements.
 */

// my sol
function remove_from_left(arr, num=1) {
    return arr.slice(num)
}

console.log(remove_from_left([1, 2, 3])); // [2, 3]
console.log(remove_from_left([1, 2, 3], 1)); // [2, 3]
console.log(remove_from_left([1, 2, 3], 2)); // [3]
console.log(remove_from_left([1, 2, 3], 4)); // []