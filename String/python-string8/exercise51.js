/**
 * Write a Python program to find the first non-repeating character in a given string.
 */

function first_non_repeating_character(str) {

    const obj = {};
    for(let chr of str) {
        if(chr in obj) {
            obj[chr] = false;
        }else{
            obj[chr] = true;
        }
    }

    for(let key in obj) {
        if(obj[key] === true) return key;
    }

    return undefined;
}

console.log(first_non_repeating_character('abcdef')) // a
console.log(first_non_repeating_character('abcabcdef')) // d
console.log(first_non_repeating_character('aabbcc')) // undefined