/**
 * Write a Python program to find the first repeated character in a given string.
 */

// work on this
function first_repeating_character(str) {
    let obj = {}
    for(let i=0; i<str.length;i ++) {
        if (str[i] in obj) return str[i]
        obj[str[i]] = 1
    }
}

console.log(first_repeating_character('abcdabcd'))
console.log(first_repeating_character('abcd'))
console.log(first_repeating_character('abcdee'))


// my solution
function first_repeating_character2(str) {
    for(let i=0; i<str.length; i++) {
        if(str.indexOf(str[i])!=str.lastIndexOf(str[i])) return str[i]
    }
}

console.log(first_repeating_character2('abcdabcd'))
console.log(first_repeating_character2('abcd'))
console.log(first_repeating_character2('abcdee'))