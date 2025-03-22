/**
 * Write a Java program to separate consonants and vowels from a given string.
 */

function validate(str) {
    const re = /[aeiou]+/gi;
    let consonants = str.replace(re,"");
    let vowels = str.match(re).join("");
    return consonants+vowels;
}

console.log(validate("Java")); // Jvaa
console.log(validate("JavaScript")); // JvScrptaai
console.log(validate("SQLite")); // SQLtie