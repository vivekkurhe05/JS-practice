/**
 * Write a Python program to extract values between quotation marks of a string.
 */

// my solution
let text1 = '"Python", "PHP", "Java"';
const re = /\w+/g
text1.match(re).forEach(el=>console.log(el))