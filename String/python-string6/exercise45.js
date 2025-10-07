/**
 * Write a Python program to check whether a string contains all letters of the alphabet.
 */

function all_alphabets(str) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    return Array.from(chars).every(chr => str.toLowerCase().includes(chr));
    
}

console.log(all_alphabets("The quick brown fox jumps over the lazy dog")) // true
console.log(all_alphabets("The quick brown fox jumps over the lazy cat")) // false