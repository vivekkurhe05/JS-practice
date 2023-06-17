/**
 * Write a Python program to find all five characters long word in a string.
 */

// my solution
let text = "The quick brown fox jumps over the lazy dog.";
const re = /\w{5}/g;
let arr = text.match(re)
console.log(arr)