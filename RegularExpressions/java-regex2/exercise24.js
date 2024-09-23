/**
 * Write a Java program to separate consonants and vowels from a given string.
 */

// my solution
function validate(str){
    const re = /[aeiou]/gi
    let str1 = str.match(re).join("")
    return str.replace(re,"")+str1
}

console.log(validate("Java")); // Jvaa
console.log(validate("JavaScript")); // JvScrptaai
console.log(validate("SQLite")); // SQLtie