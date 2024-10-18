/**
 * python-regex - exercise13
 * 
 * Write a Python program that matches a word containing 'z', not at the start or end of the word.
 */

// my solution
function text_match(str){
    const re =/\w*z\w*/g
    return re.test(str)
}

console.log(text_match("The quick brown fox jumps over the lazy dog.")); // true
console.log(text_match("layz")); //true
console.log(text_match("zebra")); //true
console.log(text_match("Python Exercises.")); // false