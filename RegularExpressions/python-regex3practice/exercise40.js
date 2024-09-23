/**
 * Write a Python program to remove all whitespaces from a string.
 */

// my solution
text1 = " Python    Exercises ";
const re = /\s+/g
console.log(text1.replace(re,""))