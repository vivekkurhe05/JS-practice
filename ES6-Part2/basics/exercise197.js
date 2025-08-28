/**
 * Write a JavaScript program to check whether a string is lower case or not.
 */

// my sol
function isLowerCase(str) {
    return str === str.toLowerCase();
}

console.log(isLowerCase('abc'));   // true (all letters are lowercase)
console.log(isLowerCase('a3@$'));  // true (all letters are lowercase)
console.log(isLowerCase('Ab4'));   // false (one letter is uppercase)