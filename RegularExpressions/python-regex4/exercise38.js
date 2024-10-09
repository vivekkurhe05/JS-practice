/**
 * Write a Python program to extract values between quotation marks of a string.
 */

// my solution
let text1 = '"Python", "PHP", "Java"';
const re = /\w+/g
console.log(text1.match(re))