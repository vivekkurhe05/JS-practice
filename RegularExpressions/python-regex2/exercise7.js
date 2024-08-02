/**
 * Write a Python program to find sequences of lowercase letters joined with a underscore.
 */

// my solution
function text_match(str) {
    const regex = /^[a-z]+_[a-z]+/g
    return regex.test(str)
}

console.log(text_match("aab_cbbbc")); // true
console.log(text_match("aab_Abbbc")); // false
console.log(text_match("Aaab_abbbc")); // false