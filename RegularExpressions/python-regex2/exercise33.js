/**
 * Write a Python program to find all five characters long word in a string.
 */

// my solution
let text = "The quick brown fox jumps over the lazy dog.";
const re = /\b[A-Za-z]{5}\b/g
console.log(text.match(re))