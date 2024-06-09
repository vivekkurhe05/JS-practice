/**
 * Write a JavaScript function to test whether the character at the provided (character) index is lower case.
 * Test Data :
 * console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));
 * true
 */

// my solution
function isLowerCaseAt(str, pos){
    return str[pos] === str[pos].toLowerCase()
}

console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));