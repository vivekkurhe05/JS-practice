/**
 * Write a Python program to sort a string lexicographically.
 */

function lexicographi_sort(str) {
    return str.trim().split("").sort().join("")
}

console.log(lexicographi_sort("w3resource"))