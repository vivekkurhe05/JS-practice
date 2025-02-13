/**
 * Write a Python program to find the first repeated character in a given string.
 */

// my sol
function first_repeating_character(str) {
    let arr = []
    for(let i=0;i<str.length;i++) {
        if(arr.includes(str[i])) return str[i]
        else arr.push(str[i])
    }
}

console.log(first_repeating_character('abcdabcd'))
console.log(first_repeating_character('abcd'))
console.log(first_repeating_character('abcdee'))