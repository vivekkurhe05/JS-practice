/**
 * Write a JavaScript function to test whether a string ends with a specified string.
 * Test Data :
 * console.log(endsWith('JS string exercises', 'exercises'));
 * true
 */

function endsWith(str, substr) {
    let arr = str.split(" ");
    return arr[arr.length-1] === substr;
}

console.log(endsWith('JS string exercises', 'exercises'));