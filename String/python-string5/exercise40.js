/**
 * Write a Python program to reverse words in a string.
 */

function reverse_words(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ")
}

console.log(reverse_words("The quick brown fox"))