/**
 * Write a Java program to remove all the vowels of a given string. Return the new string.
 */

// my solution
function validate(str) {
    const re = /[aeiou]/gi;
    return str.replace(re, "");
}

console.log(validate("Hello there!! Count total number of vowels in a string"));