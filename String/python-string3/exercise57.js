/**
 * Write a Python program to remove spaces from a given string.
 */

// my solution
function remove_spaces(str){
    const re = /\s+/g
    return str.replace(re, "")
}

console.log(remove_spaces("w 3 res ou r ce"))
console.log(remove_spaces("a b c"))