/**
 * Write a Java program to separate consonants and vowels from a given string.
 */

// my solution
function validate(str) {
    const re1 = /[aeiou]/gi;
    const re2 = /[^aeiou]/gi;

    const str1 = str.replace(re1, "");
    const str2 = str.replace(re2, "");

    return str1+str2;
}

console.log(validate("Java")); // Jvaa
console.log(validate("JavaScript")); // JvScrptaai
console.log(validate("SQLite")); // SQLtie