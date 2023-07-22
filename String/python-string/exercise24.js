/**
 * Write a Python program to check whether a string starts with specified characters.
 */

// my solution
function starts_with(str) {
    return str.startsWith("w3r")
}
console.log(starts_with("w3resource"))

// or my solution

function starts_with2(str) {
    return str.indexOf("w3r") === 0
}
console.log(starts_with2("w3resource"))