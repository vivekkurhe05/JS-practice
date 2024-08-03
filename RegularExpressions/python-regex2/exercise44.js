/**
 * Write a Python program to do a case-insensitive string replacement.
 * php Exercise
 */

// my solution
let text = "PHP Exercises";
const re = /\b[A-Z]+\b/g
console.log(text.replace(re, (chr) => chr.toLowerCase()))