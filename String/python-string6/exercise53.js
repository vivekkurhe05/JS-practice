/**
 * Write a Python program to find the first repeated character in a given string.
 */

function first_repeating_character(str) {
    let arr = Array.from(str);
    let obj = {};
    for(let i=0; i<arr.length; i++) {
        if(!(arr[i] in obj)){
            obj[arr[i]] = false
        }else{
            return arr[i]
        }
    }
}

console.log(first_repeating_character('abcdabcd'))
console.log(first_repeating_character('abcd'))
console.log(first_repeating_character('abcdee'))