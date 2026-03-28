/**
 * Write a Python program to remove a newline in Python.
 */


let str1 = 'Python Exercises\n';
const re = /\\n/g;
console.log(str1.replace(re, ''));