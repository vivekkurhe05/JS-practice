/**
 * Write a JavaScript function to Uncapitalize the first letter of each word of a string.
 * Test Data :
 * console.log(unCapitalize_Words('Js String Exercises'));
 * "js string exercises"
 */

// my sol
function unCapitalize_Words(str) {
    const re = /\b[A-Z]/g
    return str.replace(re, (chr)=>chr.toLowerCase())
}
console.log(unCapitalize_Words('Js String Exercises'));