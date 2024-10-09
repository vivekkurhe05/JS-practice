/**
 * Write a Java program to move all lower case letters to the front of a given word keeping the relative
 * position all the letters(both upper and lower case) same.
 */

// my solution
function validate(str) {  
    const re = /[^a-z]+/g
    const str1 = str.replace(re, "")
    const str2 = str.replace(/[^A-Z]+/g, "")
    return str1+str2
}

console.log(validate("Java")); // avaJ
console.log(validate("JavaScript")); // avacriptJS
console.log(validate("SQLite")); // iteSQL