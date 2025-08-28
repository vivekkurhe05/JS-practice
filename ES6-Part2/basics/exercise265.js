/**
 * Write a JavaScript program to chunk an array into smaller arrays of a specified size.
 */

// w3resource sol
function chunk(arr, size) {
    let num = Math.ceil(arr.length/size);
    return Array.from({length: num}, (el, i) => arr.slice(i * size, i * size + size));
}

console.log(chunk([1, 2, 3, 4, 5], 2)); // Output: [[1, 2], [3, 4], [5]]