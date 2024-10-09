/**
 * Write a Java program to separate consonants and vowels from a given string.
 */

// my solution
function validate(str) {
    const re = /[aeiou]/gi
    const str1 = str.replace(re, "")
    const str2 = str.replace(/[^aeiou]/gi, "")
    return str1+str2
}

console.log(validate("Java")); // Jvaa
console.log(validate("JavaScript")); // JvScrptaai
console.log(validate("SQLite")); // SQLtie