/**
 * Write a JavaScript function to Uncapitalize? the first character of a string.
 * Test Data :
 * console.log(Uncapitalize('Js string exercises'));
 * "js string exercises"
 */

// my sol
function Uncapitalize(str) {
    return str[0].toLowerCase()+str.substring(1)
}

console.log(Uncapitalize('Js string exercises'));