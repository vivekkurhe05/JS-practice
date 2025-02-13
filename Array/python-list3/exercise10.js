/**
 * Write a Python program to find the list of words that are longer than n from a given list of words.
 */

// my sol
function long_words(n, str) {
    let list = str.split(" ")
    return list.filter(word => word.length>n)
}

console.log(long_words(3, "The quick brown fox jumps over the lazy dog"))
