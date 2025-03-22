/**
 * Write a Java program to move all lower case letters to the front of a given word keeping the relative
 * position all the letters(both upper and lower case) same.
 */

function validate(str) {
    const re = /[^a-z]+/g;
    return str.replace(re,"") + str.match(re).join("");
}

console.log(validate("Java")); // avaJ
console.log(validate("JavaScript")); // avacriptJS
console.log(validate("SQLite")); // iteSQL