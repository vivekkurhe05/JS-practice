/**
 * Write a Python program to find the sequences of one upper case letter followed by lower case letters.
 */

// my solution
function text_match(str) {
    const regex = /[A-Z][a-z]+/g
    return regex.test(str)
}

console.log(text_match("AaBbGg")); // false
console.log(text_match("Python")); // true
console.log(text_match("python")); // false
console.log(text_match("PYTHON")); // false
console.log(text_match("aA")); // false
console.log(text_match("Aa")); // true