/**
 * Write a Python program to find the first repeated character in a given string.
 */

// my solution
function first_repeating_character(str) {
    for(let i=0; i<str.length; i++) {
        if(str.indexOf(str[i])!=str.lastIndexOf(str[i])) return str[i]
    }
}

console.log(first_repeating_character('abcdabcd'))
console.log(first_repeating_character('abcd'))
console.log(first_repeating_character('abcdee'))