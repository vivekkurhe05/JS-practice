/**
 * Write a Python program to reverse words in a string.
 */

// my solution
function reverse_words(str) {
    return str.trim().split("").reverse().join("").split(" ").reverse().join(" ")
}

console.log(reverse_words("The quick brown fox"))