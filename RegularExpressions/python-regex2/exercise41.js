/**
 * Write a Python program to remove everything except alphanumeric characters from a string.
 */

let text1 = "**//Python Exercises// - 12. ";
const re = /[^A-Za-z0-9]/g
console.log(text1.replace(re, ""))