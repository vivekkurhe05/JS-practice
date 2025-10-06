/**
 * Write a JavaScript function to uncapitalize the first letter of each word of a string.
 */

function unCapitalize_Words(str) {
    const re = /\b[A-Z]/g;
    return str.replace(re, chr => chr.toLowerCase());
}

console.log(unCapitalize_Words('Js String Exercises'));