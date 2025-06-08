/**
 * Write a JavaScript program to convert a value to a safe integer.
 */

// w3resource sol
function to_Safe_Integer(num) {
    return Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));
}

console.log(to_Safe_Integer('5.2'));    // Output: 5
console.log(to_Safe_Integer('5.52'));   // Output: 6
console.log(to_Safe_Integer(Infinity)); // Output: 9007199254740991 (MAX_SAFE_INTEGER)