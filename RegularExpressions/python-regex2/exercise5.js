/**
 * Write a Python program that matches a string that has an a followed by three 'b'.
 */

// my solution
function text_match(str) {
    const regex = /ab{3}$/g
    return regex.test(str)
}

console.log(text_match("abbb")); // true
console.log(text_match("aabbbbbc")); // false