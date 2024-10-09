/**
 * Write a Python program that matches a string that has an a followed by two to three 'b'.
 */

// my solution
function text_match(str) {
    const re = /ab{2,3}$/g
    return re.test(str)
}

console.log(text_match("abb")); // true
console.log(text_match("aabbbbb")); // false
console.log(text_match("aab")); // false
console.log(text_match("aabbbb")); // false