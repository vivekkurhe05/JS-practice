/**
 * Write a Python program to remove multiple spaces in a string.
 */

// my solution
let text1 = "Python      Exercises";
const re = /\s+/g
console.log(text1.replace(re, " "))