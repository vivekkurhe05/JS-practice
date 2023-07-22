/**
 * Write a Python program to reverse a string.
 */

// my solution
function reverse_string(str) {
    return str.split("").reverse().join("")
}
console.log(reverse_string("w3resource"))
