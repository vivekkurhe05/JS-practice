/**
 * Write a Python program to find all words which are at least 4 characters long in a string.
 */

// my solution
let text = "The quick brown fox jumps over the lazy dog he.";
const re = /\b[A-Za-z]{4,}\b/g;
let arr = text.match(re)
console.log(arr)