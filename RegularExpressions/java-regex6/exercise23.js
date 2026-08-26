/**
 * Write a Java program to move all lower case letters to the front of a given word keeping the relative
 * position all the letters(both upper and lower case) same.
 */

function validate(str) {
  const re = /[a-z]+/g;
  let lowerCase = str.match(re).join("");
  let upperCase = str.match(/[^a-z]+/g).join("")
  return lowerCase+upperCase;
}

console.log(validate("Java")); // avaJ
console.log(validate("JavaScript")); // avacriptJS
console.log(validate("SQLite")); // iteSQL