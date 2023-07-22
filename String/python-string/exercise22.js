/**
 * Write a Python program to sort a string lexicographically.
 */

// my solution
function lexicographi_sort(str) {
    return str.split("").sort().join("")
}
console.log(lexicographi_sort("w3resource"))