/**
 * Write a JavaScript function to uncapitalize the first character of a string.
 */

function Uncapitalize(str) {
    const re = /\b[A-Z]/g;
    return str.replace(re, (chr) => chr.toLowerCase());
}

console.log(Uncapitalize('Js string exercises'));