/**
 * Write a JavaScript function to test whether the character at the provided (character) index is lower case.
 * Test Data :
 * console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));
 * true
 */

function isLowerCaseAt(str, index){
    return str[index] === str[index].toLowerCase()
}

console.log(isLowerCaseAt ('Js STRING EXERCISES', 1));