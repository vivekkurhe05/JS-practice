/**
 * Write a Python program to reverse words in a string.
 */

function reverse_words(str) {
    return str.split(" ").reverse().map(word=>word.split("").reverse().join("")).reverse().join(" ");
}

console.log(reverse_words("The quick brown fox"))