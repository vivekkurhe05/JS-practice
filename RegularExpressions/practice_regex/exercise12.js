/**
 * python-regex - exercise12
 * 
 * Write a Python program that matches a word containing 'z'.
 */

// my solution
function text_match(str) {
    const re = /\w+z\w+/g
    return re.test(str)
}

console.log(text_match("The quick brown fox jumps over the lazy dog.")); // true
console.log(text_match("Python Exercises.")); // false