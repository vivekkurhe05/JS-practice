/**
 * Write a Python program to calculate the length of a string.
 */

// my sol
function calculate_string_length(str) {
    return str.length
}

console.log(calculate_string_length("w3resource.com"))

// or
// my sol
function calculate_string_length2(str) {
    let length=0
    while(str[length]!=undefined) {
        length++
    }
    return length
}

console.log(calculate_string_length2("w3resource.com"))