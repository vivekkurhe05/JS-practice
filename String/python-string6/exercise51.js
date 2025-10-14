/**
 * Write a Python program to find the first non-repeating character in a given string.
 */

function first_non_repeating_character(str) {
    for(let chr of str) {

        if(str.indexOf(chr) === str.lastIndexOf(chr)) {
            return chr;
        }
    }
}

console.log(first_non_repeating_character('abcdef')) // a
console.log(first_non_repeating_character('abcabcdef')) // d
console.log(first_non_repeating_character('aabbcc')) // undefined