/**
 * Write a Python program to extract values between quotation marks of a string.
 */

// my solution
let text1 = '"Python", "PHP", "Java"';
const re = /["]/g;
console.log(text1.replace(re,""));