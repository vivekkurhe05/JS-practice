/**
 * Write a Python program to do a case-insensitive string replacement.
 * php Exercise
 */

// my solution
let text = "PHP Exercises";
const re = /[A-Z][A-Z]+/g;
text = text.replace(re, (chr) => {
    return chr.toLowerCase();
})

console.log(text)