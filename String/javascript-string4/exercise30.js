/**
 * 
 * Write a JavaScript function check if a string ends with specified suffix. 
 * Test Data :
 * console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
 * true
 * console.log(string_endsWith('JS PHP PYTHON',''));
 * false
 */

// my sol
function string_endsWith(str, substr) {
    return str.startsWith(substr)
}

console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
console.log(string_endsWith('JS PHP PYTHON',''));

// or

// my sol
function string_endsWith2(str, substr) {
    return str.indexOf(substr) === 0
}

console.log(string_endsWith2('JS PHP PYTHON','PYTHON'));
console.log(string_endsWith2('JS PHP PYTHON',''));