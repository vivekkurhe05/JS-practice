/**
 * Write a JavaScript function to test whether a string starts with a specified string.
 */

function startsWith(str, substr) {
    return str.startsWith(substr, 0);
}

console.log(startsWith('js string exercises', 'js'));