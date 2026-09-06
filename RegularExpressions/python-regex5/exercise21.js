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
    const re = /exercises/g;
    const indexes = [];
    while(re.test(str)) {
        indexes.push((re.lastIndex)-re.source.length);
    }
    return indexes;
}

console.log(text_match("Python exercises, PHP exercises, C# exercises"));
