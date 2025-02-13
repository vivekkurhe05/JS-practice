/**
 * Write a JavaScript function to test whether a string ends with a specified string.
 * Test Data :
 * console.log(endsWith('JS string exercises', 'exercises'));
 * true
 */

function endsWith(str, substr) {
    return str.endsWith(substr)
}

console.log(endsWith('JS string exercises', 'exercises'));