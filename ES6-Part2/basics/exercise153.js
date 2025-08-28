/**
 * Write a JavaScript program to reverse the order of characters in the string.
 */

// my sol
function reverseString(str) {
    return [...str].reverse().join("");
}

console.log(reverseString('php')); // Output: 'php' (reversed)
console.log(reverseString('foobar')); // Output: 'raboof' (reversed)