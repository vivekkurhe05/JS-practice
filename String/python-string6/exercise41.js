/**
 * Write a Python program to strip a vowels from a string.
 */

function strip_chars(str) {
    const re = /[aeiou]/gi;
    return str.replace(re,"");
}

console.log(strip_chars("The quick brown fox jumps over the lazy dog"))
