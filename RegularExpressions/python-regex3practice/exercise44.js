/**
 * Write a Python program to do a case-insensitive string replacement.
 * php Exercise
 */

// my solution
let text = "PHP Exercises";
const re = /[A-Z]+(?=\s)/g
console.log(text.replace(re, (word)=>word.toLowerCase()))