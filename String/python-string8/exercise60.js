/**
 * Write a Python program to capitalize the first and last letters of each word in a given string.
 */

function capitalize_first_last_letters(str) {
    return str.replace(/\b\w/g, (chr) => chr.toUpperCase()).replace(/\w\b/g, (chr) => chr.toUpperCase());
}

console.log(capitalize_first_last_letters("python exercises practice solution"))
console.log(capitalize_first_last_letters("w3resource"))