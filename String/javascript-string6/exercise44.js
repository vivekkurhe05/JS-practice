/**
 * Write a JavaScript function to test whether the character at the given (character) index is lower case.
 */

function isLowerCaseAt(str, index) {
    return str[index] === str[index].toLowerCase();
}

console.log(isLowerCaseAt('Js STRING EXERCISES', 1));