/**
 * Write a Python program to find the first repeated character in a given string.
 */

function first_repeating_character(str) {
    let obj = {};
    for(let chr of str) {
        if(chr in obj) {
            return chr;
        }else {
            obj[chr] = 1;
        }
    }
}

console.log(first_repeating_character('abcdabcd'))
console.log(first_repeating_character('abcd'))
console.log(first_repeating_character('abcdee'))