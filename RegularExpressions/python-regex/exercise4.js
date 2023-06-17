// Write a Python program that matches a string that has an a followed by zero or one 'b'.

// my solution

function text_match(str) {
    const re = /^ab?$/;
    return re.test(str);
}

console.log(text_match("ab"));
console.log(text_match("abc"));
console.log(text_match("abbc"));
console.log(text_match("aabbc"));