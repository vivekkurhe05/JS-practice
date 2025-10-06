/**
 * Write a JavaScript function to test whether the character at the index provided is upper case.
 */

function isUpperCaseAt(str, index) {
    return str[index] === str[index].toUpperCase();
}

console.log(isUpperCaseAt('Js STRING EXERCISES', 1));