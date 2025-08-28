/**
 * Write a JavaScript program to check if a given string is upper case or not.
 */

function isUpperCase(str) {
    return str === str.toUpperCase();
}

console.log(isUpperCase('ABC')); // true (all characters are uppercase)
console.log(isUpperCase('A3@$')); // true (all characters are uppercase)
console.log(isUpperCase('aB4')); // false (contains lowercase characters)