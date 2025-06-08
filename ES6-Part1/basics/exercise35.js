/**
 * Write a JavaScript program to get an array of given n random integers in the specified range.
 */

// w3resource sol
function random_intArray_In_Range(min, max, n) {
    return Array.from({length: n}, () => Math.floor(Math.random() * (max - min + 1) + min));
}

console.log(random_intArray_In_Range(1, 20, 10));  // Output: Array of 10 random integers between 1 and 20
console.log(random_intArray_In_Range(-10, 10, 5)); // Output: Array of 5 random integers between -10 and 10