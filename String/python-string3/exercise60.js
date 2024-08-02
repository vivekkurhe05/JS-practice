/**
 * Write a Python program to capitalize the first and last letters of each word in a given string.
 */

// my solution
function capitalize_first_last_letters(str) {
    return str[0].toUpperCase() + str.substring(1,str.length-1) + str[str.length-1].toUpperCase()
}

console.log(capitalize_first_last_letters("python exercises practice solution"))
console.log(capitalize_first_last_letters("w3resource"))