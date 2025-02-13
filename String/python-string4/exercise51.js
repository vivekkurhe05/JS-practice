/**
 * Write a Python program to find the first non-repeating character in a given string.
 */

// my sol
function first_non_repeating_character(str) {
    let char;
    for(let i=0;i<str.length;i++) {
        if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            char=str[i]
            break;
        }
    }
    return char
}

console.log(first_non_repeating_character('abcdef')) // a
console.log(first_non_repeating_character('abcabcdef')) // d
console.log(first_non_repeating_character('aabbcc')) // undefined