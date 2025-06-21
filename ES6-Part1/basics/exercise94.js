/**
 * Write a JavaScript program to move the specified amount of elements to the end of the array.
 */

// w3resource sol
function offset(arr, offset) {
    return [...arr.slice(offset), ...arr.slice(0,offset)];
}

console.log(offset([1, 2, 3, 4, 5], 2)); // Output: [3, 4, 5, 1, 2]
console.log(offset([1, 2, 3, 4, 5], -2)); // Output: [4, 5, 1, 2, 3]