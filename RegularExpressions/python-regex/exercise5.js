/**
 * Write a Python program that matches a string that has an a followed by three 'b'.
 */

// my solution

function text_match(str) {
    const re = /^ab{3}$/;
    return re.test(str);
}

console.log(text_match("abbb"));
console.log(text_match("aabbbbbc"));