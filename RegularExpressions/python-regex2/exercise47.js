/**
 * Write a Python program to split a string with multiple delimiters.
 */

// my solution
let text = "The quick brown\nfox jumps*over the lazy dog.";
const re = /[\\\n\s*]/g
console.log(text.split(re))