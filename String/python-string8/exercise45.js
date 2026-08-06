/**
 * Write a Python program to check whether a string contains all letters of the alphabet.
 */

function all_alphabets(str) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    str = str.toLowerCase();

    return chars.split("").every(chr => str.includes(chr));
}

console.log(all_alphabets("The quick brown fox jumps over the lazy dog")) // true
console.log(all_alphabets("The quick brown fox jumps over the lazy cat")) // false