/**
 * Write a Python program that matches a word containing 'z', not at the start or end of the word.
 */

// my solution
function text_match(str){
    const regex = /\w+\Bz\B\w+/g
    return regex.test(str)
}

console.log(text_match("The quick brown fox jumps over the lazy dog.")); // true
console.log(text_match("Python Exercises.")); // false