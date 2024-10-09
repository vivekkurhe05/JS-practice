/**
 * Write a Python program that matches a string that has an a followed by one or more b's.
 */

// my solution
function text_match(str) {
    const re = /^ab+$/g
    return re.test(str)
}

console.log(text_match("ab")); //true
console.log(text_match("abc")); // false