/**
 * Write a Python program to check whether a string contains all letters of the alphabet.
 */

// my solution
function all_alphabets(str) {
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    str = str.toLowerCase()
    str = str.replaceAll(" ", "")
    return alpha.split("").every(chr => str.indexOf(chr)!=-1)
}

console.log(all_alphabets("The quick brown fox jumps over the lazy dog"))
console.log(all_alphabets("The quick brown fox jumps over the lazy cat"))