/**
 * Write a JavaScript function to test whether a string ends with a specified string.
 * Test Data :
 * console.log(endsWith('JS string exercises', 'exercises'));
 * true
 */

// my solution
function endsWith(str, substr){
    return str.endsWith(substr)
}

console.log(endsWith('JS string exercises', 'exercises'));

// or

function endsWith2(str, substr){
    return str.lastIndexOf(substr) === (str.length - substr.length)
}
console.log(endsWith2('JS string exercises', 'exercises'));