/**
 * Write a Python program to remove all whitespaces from a string.
 */

// my solution
text1 = " Python    Exercises ";
const re = /\s+/g;
text1 = text1.replace(re, "")
console.log(text1)