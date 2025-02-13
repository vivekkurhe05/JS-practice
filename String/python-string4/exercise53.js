/**
 * Write a Python program to find the first repeated character in a given string.
 */

// my sol
function first_repeating_character(str) {
    let char;
    for(let i=0;i<str.length;i++) {
        if(str.indexOf(str[i])!== str.lastIndexOf(str[i])) {
            char=str[i]
            break;
        }
    }
    return char
}

console.log(first_repeating_character('abcdabcd')) // a
console.log(first_repeating_character('abcd')) // undefined
console.log(first_repeating_character('abcdee')) // e