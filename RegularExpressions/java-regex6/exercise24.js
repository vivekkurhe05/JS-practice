/**
 * Write a Java program to separate consonants and vowels from a given string.
 */

function validate(str) {
   const re1 = /[^aeiou]/gi;
   const re2 = /[aeiou]/gi;
   let consonants = str.match(re1).join("");
   let vowels = str.match(re2).join("");

   return consonants+vowels;
}

console.log(validate("Java")); // Jvaa
console.log(validate("JavaScript")); // JvScrptaai
console.log(validate("SQLite")); // SQLtie