/**
 * Write a JavaScript function to test whether a string starts with a specified string.
 * Test Data :
 * console.log(startsWith('js string exercises', 'js'));
 * true
 */

// my solution
function startsWith(str, substr){
    return str.indexOf(substr) === 0
}

console.log(startsWith('js string exercises', 'js'));