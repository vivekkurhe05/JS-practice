/**
 * 
 * Write a JavaScript function check if a string ends with specified suffix. 
 * Test Data :
 * console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
 * true
 * console.log(string_endsWith('JS PHP PYTHON',' '));
 * false
 */

function string_endsWith(str, suffix) {
    return str.endsWith(suffix)
}

console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
console.log(string_endsWith('JS PHP PYTHON',' '));

// or

function string_endsWith2(str, suffix) {
    return str.split(" ")[str.split(" ").length-1] === suffix
}

console.log(string_endsWith2('JS PHP PYTHON','PYTHON'));
console.log(string_endsWith2('JS PHP PYTHON',' '));