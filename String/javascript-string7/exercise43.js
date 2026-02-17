/**
 * Write a JavaScript function to test whether the character at the provided (character) index is upper case.
 * Test Data :
 * console.log(isUpperCaseAt('Js STRING EXERCISES', 1));
 * false
 */

function isUpperCaseAt(input, index) {
    return input[index] === input[index].toUpperCase();
}

console.log(isUpperCaseAt('Js STRING EXERCISES', 1));