/**
 * Write a Python program that matches a word containing 'z', not at the start or end of the word.
 */

// work on this

function text_match(str) {
    const re = /\Bz\B/;
    return re.test(str);
}

console.log(text_match("The quick brown fox jumps over the lazy dog.")); // true
console.log(text_match("Python Exercises.")); // false