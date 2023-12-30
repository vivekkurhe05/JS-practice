/**
 * How to find unique characters of a string in JavaScript ?
 */

// my solution
function unique_chars(str) {
    let arr = str.trim().split("")
    let uniqueChars = new Set(arr)
    return Array.from(uniqueChars).join("")
}

console.log(unique_chars('Geeksforgeeks'));
console.log(unique_chars('Geeksforgeeks is a great site for computer science'));