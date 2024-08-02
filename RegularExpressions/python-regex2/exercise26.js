/**
 * Write a Python program to match if two words from a list of words starting with letter 'P'.
 */

// my solution
function match_words(arr) {
    const re = /\bP\w+\s\bP/g
    return arr.filter(el => el.match(re))
}

let words = ["Python PHP", "Java JavaScript", "C C++", "Python Java"];
console.log(match_words(words));