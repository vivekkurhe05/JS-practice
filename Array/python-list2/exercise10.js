/**
 * Write a Python program to find the list of words that are longer than n from a given list of words.
 */

// my solution
function long_words(n, str) {
    let arr = str.trim().split(" ")
    return arr.filter(el => el.length > n)
}

console.log(long_words(3, "The quick brown fox jumps over the lazy dog"))
