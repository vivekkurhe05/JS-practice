/**
 * Write a Python program to remove multiple spaces in a string.
 */

// my solution
let text1 = "Python      Exercises";
const re = /\s+/g;
text1 = text1.replace(re, " ")
console.log(text1)