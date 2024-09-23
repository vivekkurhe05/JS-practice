/**
 * Write a Java program to move all lower case letters to the front of a given word keeping the relative
 * position all the letters(both upper and lower case) same.
 */

// my solution
function validate(str){
    const re = /[A-Z]/g
    const str1 = str.match(re).join("")
    return str.replace(re,"")+str1
}

console.log(validate("Java")); // avaJ
console.log(validate("JavaScript")); // avacriptJS
console.log(validate("SQLite")); // iteSQL