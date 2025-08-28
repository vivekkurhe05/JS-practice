/**
 * Write a JavaScript program to remove elements from an array until the passed function returns true. 
 * Returns the remaining elements in the array.
 */

// my sol
function dropWhile(arr, fn) {
    return arr.filter(el => fn(el));
}

console.log(dropWhile([1, 2, 3, 4], n => n >= 3)); // Output: [3, 4]