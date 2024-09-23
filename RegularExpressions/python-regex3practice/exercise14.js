/**
 * Write a Python program to match a string that contains only upper and lowercase letters, numbers, and underscores.
 */

// my solution
function text_match(str) {
    const re = /^\w+$/g
    return re.test(str)
}

console.log(text_match("The quick brown fox jumps over the lazy dog.")); // false
console.log(text_match("Python_Exercises_1")); // true