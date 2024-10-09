/**
 * Write a Python program to remove words from a string of length between 1 and a given number.
 */

// my solution
let text = "The quick brown fox jumps over the lazy dog.";
const re = new RegExp('\\b\\w{1,'+3+'}\\b','g')
console.log(text.match(re))