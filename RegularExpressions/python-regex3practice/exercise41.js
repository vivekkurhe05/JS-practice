/**
 * Write a Python program to remove everything except alphanumeric characters from a string.
 */

// my solution
let text1 = "**//Python Exercises// - 12. ";
const re = /[^A-Z0-9]/gi
console.log(text1.replace(re,""))