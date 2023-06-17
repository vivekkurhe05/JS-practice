/**
 * Write a Python program to find sequences of lowercase letters joined with a underscore.
 */

// my solution

function text_match(str) {
    const re = /^[a-z]+_[a-z]+$/;
    return re.test(str);
}

console.log(text_match("aab_cbbbc")); // true
console.log(text_match("aab_Abbbc")); // false
console.log(text_match("Aaab_abbbc")); // false