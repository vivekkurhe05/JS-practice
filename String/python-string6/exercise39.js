/**
 * Write a Python program to reverse a string.
 */

function reverse_string(str) {

    return Array.from(str).reverse().join("");
}

console.log(reverse_string("w3resource"))
