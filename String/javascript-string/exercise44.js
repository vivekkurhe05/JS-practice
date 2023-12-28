/**
 * Write a JavaScript function to test whether the character at the provided (character) index is lower case.
 * Test Data :
 * console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));
 * true
 */

// my solution
function isLowerCaseAt(str, index) {
    return str.at(index) === str.at(index).toLowerCase()
}

console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));