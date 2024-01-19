/**
 * Write a Python program to find the first non-repeating character in a given string.
 */

function first_non_repeating_character(str) {
    
    for(let i=0; i<str.length; i++) {
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) return str[i]
    }
}

console.log(first_non_repeating_character('abcdef'))
console.log(first_non_repeating_character('abcabcdef'))
console.log(first_non_repeating_character('aabbcc'))