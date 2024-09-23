/**
 * Write a Python program to replace all occurrences of space, comma, or dot with a colon.
 */

// my solution
let text = "Python Exercises, PHP exercises.";
const re = /[\s,\.]/g
console.log(text.replace(re,":"))