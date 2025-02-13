/**
 * Write a Python program to calculate the length of a string.
 */

function calculate_string_length(str) {
    let length=0
    while(str[length]!=undefined) {
        length++
    }
    return length
}

console.log(calculate_string_length("w3resource.com"))