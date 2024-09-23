/**
 * Write a Java program to separate consonants and vowels from a given string.
 */

// my solution
function validate(str) {
    const re = /[aeiou]/g
    return str.replace(re,"")+str.match(re).join("")
}

console.log(validate("Java")); // Jvaa
console.log(validate("JavaScript")); // JvScrptaai
console.log(validate("SQLite")); // SQLtie