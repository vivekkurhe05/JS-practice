/**
 * Write a Python program to find the substrings within a string.
Sample text :
'Python exercises, PHP exercises, C# exercises'
Pattern :
'exercises'
Note: There are two instances of exercises in the input string.
 */

// my solution
function text_match(str) {
    const re = /exercises/g
    return re.test(str)
}

console.log(text_match("Python exercises, PHP exercises, C# exercises"));
