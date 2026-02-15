/**
 * 
 * Write a JavaScript function to capitalize the first letter of a string.
 * Test Data :
 * console.log(capitalize('js string exercises'));
 * "Js string exercises"
 */

function capitalize(input) {
    return input[0].toUpperCase() + input.substring(1);
}


console.log(capitalize('js string exercises'));