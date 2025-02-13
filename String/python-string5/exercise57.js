/**
 * Write a Python program to remove spaces from a given string.
 */

function remove_spaces(str) {
    return str.replaceAll(" ","")
}

console.log(remove_spaces("w 3 res ou r ce"))
console.log(remove_spaces("a b c"))