/**
 * Write a Python program to capitalize the first and last letters of each word in a given string.
 */

// my sol
function capitalize_first_last_letters(str) {
    const re = /\b[a-z]|[a-z]\b/g
    return str.replace(re, (chr) => chr.toUpperCase())
}

console.log(capitalize_first_last_letters("python exercises practice solution"))
console.log(capitalize_first_last_letters("w3resource"))