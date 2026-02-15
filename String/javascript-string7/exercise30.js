/**
 * 
 * Write a JavaScript function check if a string ends with specified suffix. 
 * Test Data :
 * console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
 * true
 * console.log(string_endsWith('JS PHP PYTHON',''));
 * false
 */

function string_endsWith(input, substr) {
    if(substr === "") return false;
    return input.endsWith(substr);
}

console.log(string_endsWith('JS PHP PYTHON','PYTHON'));
console.log(string_endsWith('JS PHP PYTHON',''));

// or

function string_endsWith2(input, substr) {
    if(substr === '') return false;
    let index = input.lastIndexOf(substr);
    return input.slice(index) === substr;
}

console.log(string_endsWith2('JS PHP PYTHON','PYTHON'));
console.log(string_endsWith2('JS PHP PYTHON',''));