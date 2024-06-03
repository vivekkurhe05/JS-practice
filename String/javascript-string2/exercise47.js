/**
 * Write a JavaScript function to test whether a string ends with a specified string.
 * Test Data :
 * console.log(endsWith('JS string exercises', 'exercises'));
 * true
 */

function endsWith(str, substr){
    return str.lastIndexOf(substr) === (str.length - substr.length)
}

console.log(endsWith('JS string exercises', 'exercises'));