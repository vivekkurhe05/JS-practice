/**
 * Write a Python program to remove lowercase substrings from a given string.
 */

// my solution
let str1 = "KDeoALOklOOHserfLoAJSIskdsf";
const re = /[^A-Z]+/g
console.log(str1.replace(re,""))