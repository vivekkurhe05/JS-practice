/**
 * Write a Python program that matches a string that has an a followed by two to three 'b'.
 */

// my solution
function text_match(str) {
    const regex = /ab{2,3}$/g
    return regex.test(str)
}

console.log(text_match("abb")); // true
console.log(text_match("aabbbbbc")); // false