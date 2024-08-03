/**
 * Write a Python program to find all three, four, five characters long words in a string.
 */

// my solution
let text = "The quick brown fox jumps over the lazy dog.";
const re = /\b[A-Za-z]{3,5}\b/g
console.log(text.match(re))