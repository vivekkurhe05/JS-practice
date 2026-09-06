/**
 * Write a Python program to abbreviate 'Road' as 'Rd.' in a given string.
 */

// my solution
let street = "21 Ramkrishna Road";
const re = /Road/gi;
console.log(street.replace(re, "Rd."));
