/**
 * Write a JavaScript function to Uncapitalize? the first character of a string.
 * Test Data :
 * console.log(Uncapitalize('Js string exercises'));
 * "js string exercises"
 */

function Uncapitalize(input) {
    return input.charAt(0).toLowerCase(0)+input.slice(1);
}

console.log(Uncapitalize('Js string exercises'));