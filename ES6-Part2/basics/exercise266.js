/**
 * Write a JavaScript program to clamp a number within the inclusive range specified by the 
 * given boundary values a and b.

If num falls within the range, return num.
Otherwise, return the nearest number in the range.
 */

// w3resource sol
function clampNumber(num, a, b) {
    return Math.max(Math.min(num, Math.max(a,b)), Math.min(a,b));
}

console.log(clampNumber(2, 3, 5));  // Output: 3 (2 is clamped to the lower bound of the range)
console.log(clampNumber(1, -1, -5)); // Output: -1 (1 is clamped to the upper bound of the range)
console.log(clampNumber(-6, -1, -5)); // Output: -1 (1 is clamped to the upper bound of the range)

