/**
 * Write a Python program to find the first repeated character in a given string.
 */

function first_repeating_character(str) {

    const obj = {};
    for(let chr of str) {
        if(!(chr in obj)) {
            obj[chr] = false;
        }else {
            obj[chr] = true;
        }
    }

    for(let key in obj) {
        if(obj[key] === true) return key
    }

    return undefined;
}

console.log(first_repeating_character('abcdabcd'))
console.log(first_repeating_character('abcd'))
console.log(first_repeating_character('abcdee'))